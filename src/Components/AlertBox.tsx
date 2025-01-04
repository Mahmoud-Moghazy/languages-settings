import React from "react";
import { useAppSettings } from "../Context/AppSettings";

const AlertBox: React.FC = () => {
  const { language } = useAppSettings();
  const content = {
    titleEn: "Instant translation",
    titleAr: "الترجمة الفورية",
    descriptionEn: "Get instant translation of your text in 100+ languages.",
    descriptionAr:
      "توفر خاصية الترجمة الفورية إمكانية دعم لغات جديدة في متجرك بضغطة زر.",
  };
  return (
    <div className="alert-box p-4 mt-2 rounded-lg text-white flex flex-col items-center lg:flex-row gap-3 lg: justify-between">
      <img
        className="w-16"
        src="/images/google-translate.png"
        alt="google translate image"
      />
      <div className="text-center lg:text-start lg:flex-grow">
        <h2 className="">
          {language === "en" ? content.titleEn : content.titleAr}
        </h2>
        <p className="">
          {language === "en" ? content.descriptionEn : content.descriptionAr}
        </p>
      </div>
      <button className="flex items-center justify-center bg-white text-black rounded-md overflow-hidden min-w-fit">
        <p className="px-3">{language === "en" ? "Balance 0 Char" : "الرصيد 0 حرف"}</p>
        <span className="px-3 py-2 bg-gray-300 text-xl">+</span>
      </button>
    </div>
  );
};

export default AlertBox;
