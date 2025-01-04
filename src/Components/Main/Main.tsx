import React from "react";
import { useAppSettings } from "../../Context/AppSettings";
import Input from "../Input";
import AlertBox from "../AlertBox";
import HeadLine from "../HeadLine";
import Panel from "../Panel";

const Main: React.FC = () => {
  const {isMobile} = useAppSettings();
  return <main className="lg:order-4 lg:col-span-2 xl:col-span-3 p-4">
    {isMobile && <Input/>}
    <AlertBox/>
    <HeadLine/>
    <Panel/>
  </main>;
};

export default Main;
