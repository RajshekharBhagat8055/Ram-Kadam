"use client"

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, MapPin, Phone, User, FileText, CheckCircle, AlertCircle, XCircle, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface QueryData {
  _id: string;
  referenceNumber: string;
  name: string;
  phone: string;
  address: string;
  villageName: string;
  taluka: string;
  district: string;
  complaintDetails: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

const StatusTracker = () => {
  const { t } = useTranslation();
  const [referenceNumber, setReferenceNumber] = useState("");
  const [queryData, setQueryData] = useState<QueryData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'in-progress':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'closed':
        return <XCircle className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 'in-progress':
        return "bg-blue-100 text-blue-800 border-blue-200";
      case 'resolved':
        return "bg-green-100 text-green-800 border-green-200";
      case 'closed':
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return "bg-green-100 text-green-800 border-green-200";
      case 'medium':
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 'high':
        return "bg-orange-100 text-orange-800 border-orange-200";
      case 'urgent':
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleTrackStatus = async () => {
    if (!referenceNumber.trim()) {
      toast.error(t('statusTracker.enterReferenceNumber'));
      return;
    }

    setIsLoading(true);
    setError("");
    setQueryData(null);

    try {
      const response = await axios.get(`/api/queries/${referenceNumber.trim()}`);
      
      if (response.data.success) {
        setQueryData(response.data.data);
        toast.success(t('statusTracker.queryFound'));
      }
    } catch (error: any) {
      console.error('Status tracking error:', error);
      
      if (error.response?.status === 404) {
        setError(t('statusTracker.queryNotFound'));
        toast.error(t('statusTracker.queryNotFound'));
      } else {
        setError(t('statusTracker.trackingError'));
        toast.error(t('statusTracker.trackingError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t('statusTracker.title')}
          </CardTitle>
          <CardDescription>
            {t('statusTracker.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder={t('statusTracker.placeholder')}
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTrackStatus()}
              className="flex-1"
            />
            <Button 
              onClick={handleTrackStatus} 
              disabled={isLoading}
              className="min-w-24"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  {t('statusTracker.tracking')}
                </>
              ) : (
                t('statusTracker.track')
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-800">
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Query Details */}
      {queryData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {t('statusTracker.queryDetails')}
                </CardTitle>
                <CardDescription>
                  {t('statusTracker.referenceNumber')}: {queryData.referenceNumber}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className={getStatusColor(queryData.status)}>
                  {getStatusIcon(queryData.status)}
                  <span className="ml-1 capitalize">{queryData.status.replace('-', ' ')}</span>
                </Badge>
                <Badge className={getPriorityColor(queryData.priority)}>
                  <span className="capitalize">{queryData.priority}</span>
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <User className="h-4 w-4" />
                {t('statusTracker.personalInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.name')}</label>
                  <p className="text-sm">{queryData.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.phone')}</label>
                  <p className="text-sm">{queryData.phone}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Location Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t('statusTracker.locationInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.address')}</label>
                  <p className="text-sm">{queryData.address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.villageName')}</label>
                  <p className="text-sm">{queryData.villageName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.taluka')}</label>
                  <p className="text-sm">{queryData.taluka}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('queryForm.district')}</label>
                  <p className="text-sm">{queryData.district}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Complaint Details */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {t('queryForm.complaintDetails')}
              </h3>
              <p className="text-sm bg-gray-50 p-3 rounded-md">{queryData.complaintDetails}</p>
            </div>

            <Separator />

            {/* Status Information */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {t('statusTracker.statusInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('statusTracker.submittedOn')}</label>
                  <p className="text-sm">{formatDate(queryData.createdAt)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600">{t('statusTracker.lastUpdated')}</label>
                  <p className="text-sm">{formatDate(queryData.updatedAt)}</p>
                </div>
                {queryData.resolvedAt && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('statusTracker.resolvedOn')}</label>
                    <p className="text-sm">{formatDate(queryData.resolvedAt)}</p>
                  </div>
                )}
                {queryData.assignedTo && (
                  <div>
                    <label className="text-sm font-medium text-gray-600">{t('statusTracker.assignedTo')}</label>
                    <p className="text-sm">{queryData.assignedTo}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            {queryData.notes && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t('statusTracker.notes')}</h3>
                  <p className="text-sm bg-blue-50 p-3 rounded-md border-l-4 border-blue-200">
                    {queryData.notes}
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StatusTracker;
