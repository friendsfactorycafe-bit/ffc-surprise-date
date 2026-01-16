"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { StudyAbroadForm } from "./forms/study-abroad-form";

interface BusinessContactFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

export function BusinessContactForm({ business, area, keyword }: BusinessContactFormProps) {
  const areaName = getAreaDisplayName(area);

  // Render Study Abroad form
  return <StudyAbroadForm area={areaName} keyword={keyword} />;
}

