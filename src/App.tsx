import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import AsideBar from "./Components/AsideBar/AsideBar";
import { useAppSettings } from "./Context/AppSettings";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Logo from "./Components/Logo";

const App: React.FC = () => {
  const { isMobile } = useAppSettings();
  return (
    <>
      <section className="relative lg:grid lg:grid-cols-3 xl:grid-cols-4">
        <NavBar />
        {!isMobile && <Logo/>}
        <AsideBar />
        <Main />
      </section>
      <Footer />
    </>
  );
};

export default App;

