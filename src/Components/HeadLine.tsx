import React from "react";
import { useAppSettings } from "../Context/AppSettings";

const HeadLine: React.FC = () => {
  const { language } = useAppSettings();
  return (
    <div className="flex items-center justify-end p-4 gap-3">
      <h6>{language === "en" ? "Services" : "خدمات"}</h6>
      <i className="fa-solid fa-toolbox"></i>
    </div>
  );
};

export default HeadLine;
