import mongoose, { Document, Schema } from 'mongoose';

// Interface for the Query document
export interface IQuery extends Document {
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
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  referenceNumber: string;
}

// Query Schema
const QuerySchema = new Schema<IQuery>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name must be less than 50 characters'],
    match: [/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces']
  },
  
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    minlength: [10, 'Phone number must be at least 10 digits'],
    maxlength: [15, 'Phone number must be less than 15 digits'],
    match: [/^[0-9+\-\s()]+$/, 'Please enter a valid phone number']
  },
  
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true,
    minlength: [10, 'Address must be at least 10 characters'],
    maxlength: [200, 'Address must be less than 200 characters']
  },
  
  villageName: {
    type: String,
    required: [true, 'Village name is required'],
    trim: true,
    minlength: [2, 'Village name must be at least 2 characters'],
    maxlength: [50, 'Village name must be less than 50 characters']
  },
  
  taluka: {
    type: String,
    required: [true, 'Taluka is required'],
    trim: true,
    minlength: [2, 'Taluka must be at least 2 characters'],
    maxlength: [50, 'Taluka must be less than 50 characters']
  },
  
  district: {
    type: String,
    required: [true, 'District is required'],
    trim: true,
    minlength: [2, 'District must be at least 2 characters'],
    maxlength: [50, 'District must be less than 50 characters']
  },
  
  complaintDetails: {
    type: String,
    required: [true, 'Complaint details are required'],
    trim: true,
    minlength: [20, 'Complaint details must be at least 20 characters'],
    maxlength: [1000, 'Complaint details must be less than 1000 characters']
  },
  
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'resolved', 'closed'],
    default: 'pending'
  },
  
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  
  assignedTo: {
    type: String,
    trim: true,
    default: null
  },
  
  notes: {
    type: String,
    trim: true,
    maxlength: [500, 'Notes must be less than 500 characters'],
    default: ''
  },
  
  referenceNumber: {
    type: String,
    required: false // Will be set by pre-save middleware
  },
  
  resolvedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt automatically
  collection: 'queries'
});

// Indexes for better query performance
QuerySchema.index({ referenceNumber: 1 }, { unique: true });
QuerySchema.index({ status: 1 });
QuerySchema.index({ priority: 1 });
QuerySchema.index({ district: 1 });
QuerySchema.index({ taluka: 1 });
QuerySchema.index({ villageName: 1 });
QuerySchema.index({ createdAt: -1 });

// Pre-save middleware to generate reference number
QuerySchema.pre('save', async function(next) {
  if (this.isNew && !this.referenceNumber) {
    const count = await Query.countDocuments();
    const year = new Date().getFullYear();
    const paddedCount = String(count + 1).padStart(6, '0');
    this.referenceNumber = `QRY${year}${paddedCount}`;
  }
  next();
});

// Virtual for formatted phone number
QuerySchema.virtual('formattedPhone').get(function() {
  return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
});

// Method to update status
QuerySchema.methods.updateStatus = function(newStatus: string, notes?: string) {
  this.status = newStatus;
  if (notes) {
    this.notes = notes;
  }
  if (newStatus === 'resolved') {
    this.resolvedAt = new Date();
  }
  return this.save();
};

// Static method to get queries by status
QuerySchema.statics.getByStatus = function(status: string) {
  return this.find({ status }).sort({ createdAt: -1 });
};

// Static method to get queries by district
QuerySchema.statics.getByDistrict = function(district: string) {
  return this.find({ district }).sort({ createdAt: -1 });
};

// Static method to get statistics
QuerySchema.statics.getStatistics = function() {
  return this.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 }
      }
    }
  ]);
};

// Ensure virtual fields are serialized
QuerySchema.set('toJSON', { virtuals: true });
QuerySchema.set('toObject', { virtuals: true });

// Create and export the model
const Query = mongoose.models.Query || mongoose.model<IQuery>('Query', QuerySchema);

export default Query;
