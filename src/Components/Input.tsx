import React from "react";
import { useAppSettings } from "../Context/AppSettings";

const Input: React.FC = () => {
  const { language } = useAppSettings();
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="flex-grow flex items-center">
        <input
          className="flex-grow"
          type="text"
          placeholder={
            language === "en"
              ? "Search by order number, customer name, shipment number"
              : "ابحث برقم الطلب ، اسم العميل ، رقم الشحنة"
          }
        />
        <i className="fa-solid fa-circle-info text-PeacockBlue-900"></i>
      </div>
      <p className="text-slate-400 mx-3">
        {language === "en" ? "Orders" : "الطلبات"}
      </p>
      <button className="bg-PeacockBlue-100 text-white px-4 py-2 rounded-md">
        <i className="fa-solid fa-magnifying-glass text-PeacockBlue-800"></i>
      </button>
    </div>
  );
};

export default Input;
