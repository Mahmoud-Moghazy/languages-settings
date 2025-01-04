import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import i18next from "../Utility/translation";
import Cookies from "js-cookie";

interface Data {
  [key: string]: { label: string; icon: string }[];
}

interface AppSettingsContextType {
  data: Data | null;
  language: string | null;
  setArabicLang: () => void;
  setEnglishLang: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isUserProfileOpen: boolean;
  setIsUserProfileOpen: (value: boolean) => void;
  isMobile: boolean;
}

const AppSettings = createContext<AppSettingsContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppSettings = (): AppSettingsContextType => {
  const context = useContext(AppSettings);
  if (!context) {
    throw new Error(
      "useAppSettings must be used within an AppSettingsProvider"
    );
  }
  return context;
};

interface AppSettingsProviderProps {
  children: ReactNode;
}

export const AppSettingsProvider: React.FC<AppSettingsProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<Data | null>(null);
  const [language, setLang] = useState(Cookies.get("i18next") || "ar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const setArabicLang = () => {
    setLang("ar");
    Cookies.set("i18next", "ar");
    i18next.changeLanguage("ar");
  };

  const setEnglishLang = () => {
    setLang("en");
    Cookies.set("i18next", "en");
    i18next.changeLanguage("en");
  };

  const dataFetching = async (lang: string) => {
    try {
      const response = await fetch(`/locale/${lang}/data.json`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    window.document.dir = i18next.dir(language);
    dataFetching(language);
  }, [language]);

  useEffect(() => {
    // Update the state immediately
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppSettings.Provider
      value={{
        data,
        language,
        setArabicLang,
        setEnglishLang,
        isMenuOpen,
        setIsMenuOpen,
        isUserProfileOpen,
        setIsUserProfileOpen,
        isMobile,
      }}
    >
      {children}
    </AppSettings.Provider>
  );
};
