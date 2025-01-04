import React from "react";
import { useAppSettings } from "../../Context/AppSettings";

const Footer: React.FC = () => {
  const { language } = useAppSettings();
  return (
    <footer className="w-full bg-PeacockBlue-900 py-5 px-4 text-white flex items-center justify-center gap-5 relative">
      <p>
        {language === "en"
          ? "Did you like the experience? Start your business today with Salla easily and without any commission!"
          : "عجبتك التجربة؟ انطلق بتجارتك اليوم مع سلة بسهولة و بدون أي عمولة!"}
      </p>
      <button className=" bg-PeacockBlue-100 text-PeacockBlue-800 p-3 rounded-md">
        {language === "en" ? "Create your store for free" : "انشئ متجرك مجاناً"}
      </button>
      <button className="absolute bottom-full bg-PeacockBlue-100 end-6 translate-y-1/2 size-16 rounded-full text-PeacockBlue-800">
        <span className="flex items-center justify-center">
          <i className="fa-regular fa-envelope fa-xl"></i>
        </span>
      </button>
    </footer>
  );
};

export default Footer;
