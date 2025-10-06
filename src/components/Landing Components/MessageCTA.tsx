"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import MaxWidthWrapper from "../MaxWidthWrapper";

export default function MessageCTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-8">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl border bg-white p-5 shadow-md">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl md:text-2xl font-bold text-orange-600">
              {t("contactPopup.title")}
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              {t("contactPopup.description")}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button className="rounded-full">
                {t("contactPopup.contactUs")}
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="rounded-full">
                {t("contactPopup.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}


