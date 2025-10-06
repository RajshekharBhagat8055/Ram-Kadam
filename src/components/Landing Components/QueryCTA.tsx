"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function QueryCTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full pb-10">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border bg-white p-5 shadow-md flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {t("statusTracker.title")}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {t("statusTracker.description")}
              </p>
            </div>
            <Link href="/complaint-status">
              <Button className="rounded-full min-w-32">
                {t("statusTracker.track")}
              </Button>
            </Link>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-md flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {t("queryForm.title")}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {t("queryForm.subtitle")}
              </p>
            </div>
            <Link href="/query">
              <Button variant="outline" className="rounded-full min-w-32">
                {t("queryForm.submit")}
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}


