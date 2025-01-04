import React, { useState, useEffect } from "react";
import { useAppSettings } from "../../Context/AppSettings";
import List from "../List";

const AsideBar: React.FC = () => {
  const { data, language, isMenuOpen, isMobile } = useAppSettings();
console.log(isMobile);
console.log(isMenuOpen);

  // Default state as empty object for each category
  const [categories, setCategories] = useState<{
    about: { icon: string; label: string }[];
    salesChannels: { icon: string; label: string }[];
    supportingTools: { icon: string; label: string }[];
    settings: { icon: string; label: string }[];
    storeAppearance: { icon: string; label: string }[];
    appStore: { icon: string; label: string }[];
  }>({
    about: [],
    salesChannels: [],
    supportingTools: [],
    settings: [],
    storeAppearance: [],
    appStore: [],
  });

  useEffect(() => {
    if (data) {
      //! Use spread to set all categories at once
      setCategories({
        about: data.about || [],
        salesChannels: data.salesChannels || [],
        supportingTools: data.supportingTools || [],
        settings: data.settings || [],
        storeAppearance: data.storeAppearance || [],
        appStore: data.appStore || [],
      });
    }
  }, [data]);

  // Helper function to render the list
  const renderList = (
    title: string,
    items: { icon: string; label: string }[]
  ) =>
    items.length > 0 && (
      <List
        title={
          language === "en"
            ? title
            : title === "Sales Channels"
            ? "قنوات البيع"
            : title === "Supporting Tools"
            ? "ادوات مساندة"
            : title === "Settings"
            ? "الإعدادات"
            : title === "Store Appearance"
            ? "مظهر المتجر"
            : title === "App Store"
            ? "متجر التطبيقات"
            : ""
        }
        items={items}
      />
    );

  return (
    <aside className={`${isMobile ? "absolute" : ""} ${isMenuOpen ? "start-0" : "-start-full"} transition-all duration-500 w-fit scrollable-container bg-PeacockBlue-900 text-white md:text-xl p-3 max-h-screen overflow-y-auto lg:w-full lg:order-2`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="size-24 rounded-full overflow-hidden border-2 border-yellow-200 border-dashed">
          <img src="/images/brand-logo.jpg" alt="brand" />
        </div>
        <div>
          <p>{language === "en" ? "Gift Store" : "متجر الهدايا"}</p>
        </div>
        <div className="border border-PeacockBlue-400 rounded-s-full rounded-e-full flex overflow-hidden">
          <p className="py-2 px-4">
            {language === "en" ? "Vast the store" : "زيارة المتجر"}
            {language === "en" ? (
              <i className="fa-solid fa-angle-right ms-2"></i>
            ) : (
              <i className="fa-solid fa-angle-left ms-2"></i>
            )}
          </p>
          <span className="bg-PeacockBlue-100 py-2 px-4">
            <i className="fa-solid fa-share-nodes fa-xl"></i>
          </span>
        </div>
      </div>
      {/* Dynamically render all lists */}
      {renderList("", categories.about)}
      {renderList("Sales Channels", categories.salesChannels)}
      {renderList("Supporting Tools", categories.supportingTools)}
      {renderList("Settings", categories.settings)}
      {renderList("Store Appearance", categories.storeAppearance)}
      {renderList("App Store", categories.appStore)}
      <div className="">
        <p className="py-2 md:py-3 text-PeacockBlue-400 text-lg">
          {language === "en" ? "Application" : "تطبيق التاجر"}
        </p>
        <div className="flex gap-1 md:gap-3">
          <img src="/images/appstore.png" alt="appstore image" />
          <img src="/images/googleplay.png" alt="google play image" />
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
