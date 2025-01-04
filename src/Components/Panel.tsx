import React from "react";
import { useAppSettings } from "../Context/AppSettings";

const Panel: React.FC = () => {
  const { language, setArabicLang, setEnglishLang } = useAppSettings();
  const content = {
    titleEn: "Default store language",
    titleAr: "اللغة الافتراضية للمتجر",
    descriptionEn:
      "You will not be able to change the default language after translating content (product, category, brand, ...)",
    descriptionAr:
      "لن تتمكن من تغيير اللغة الإفتراضية بعد ترجمة محتوى (منتج، تصنيف، ماركة تجارية، ...)",
  };
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden mb-40">
      <div className="bg-gray-100 flex items-center gap-2 p-3">
        <img
          src="/images/google-translate-50.png"
          alt="google translate image"
          className="w-6"
        />
        <h6 className="text-lg">
          {language === "en" ? "Store Language" : "لغات المتجر"}
        </h6>
      </div>
      <div className="px-3 py-6 flex items-center gap-2">
        <div className="w-1/2">
          <h6>{language === "en" ? content.titleEn : content.titleAr}</h6>
          <p className="text-gray-400 text-sm">
            {language === "en" ? content.descriptionEn : content.descriptionAr}
          </p>
        </div>
        <button className="flex items-center gap-2 bg-gray-100 flex-grow p-2 border rounded-sm">
          <img
            src={language === "en" ? "/images/en.svg" : "/images/ar.svg"}
            alt="language flag"
            className="w-4"
          />
          <span className="flex-grow text-start">
            {language === "en" ? "English" : "العربية"}
          </span>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/2 text-start p-3">
              {language === "en"
                ? "Available Languages"
                : "اللغات المتاحة فى المتجر"}
            </th>
            <th className="w-1/2 text-start p-3">
              {language === "en" ? "Translation type" : "	نوع الترجمة"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3 flex items-center gap-3">
              <i className="fa-solid fa-bars"></i>
              <img src="/images/ar.svg" alt="Arabic flag" className="w-5" />
              <span className="text-start">العربية</span>
              <span className="text-sm text-gray-400">
                {language === "en" ? "" : "(اللغة الإفتراضية)"}
              </span>
            </td>
            <td>
              {language === "en" ? "Manual" : "يدوية"}
              {language === "en" ? (
                <button
                  onClick={() => {
                    setArabicLang();
                  }}
                  className="bg-PeacockBlue-400 px-2 rounded-md absolute end-4"
                >
                  Set as default
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-3 flex items-center gap-3 w-1/2">
              <i className="fa-solid fa-bars"></i>
              <img src="/images/en.svg" alt="English flag" className="w-5" />
              <span className="text-start">English</span>
              <span className="text-sm text-gray-400">
                {language === "en" ? "(Default Language)" : ""}
              </span>
            </td>
            <td className=" relative">
              <span>{language === "en" ? "Manual" : "يدوية"}</span>
              {language === "ar" ? (
                <button
                  onClick={() => {
                    setEnglishLang();
                  }}
                  className="bg-PeacockBlue-400 px-2 rounded-md absolute end-4"
                >
                  تعيين كافتراضي
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="px-3 py-6 bg-gray-100 border-t">
        <h6>{language === "en" ? "Add new language" : "إضافة لغة جديدة"}</h6>
        <div className="flex items-center justify-between gap-5 my-3">
          <div className="flex-grow relative">
            <input
              className="w-full py-[6px] px-2"
              type="text"
              placeholder={
                language === "en"
                  ? "Select language"
                  : "اختر اللغة التىتود إضافتها"
              }
            />
            <i className="fa-solid fa-angle-down absolute translate-y-1/2 end-4 text-gray-300"></i>
          </div>
          <button className="bg-PeacockBlue-100 py-1 px-3">
            <span className="text-xl text-gray-500">+</span>
            <span className="text-PeacockBlue-900">
              {language === "en" ? "Add" : "إضافة"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panel;
