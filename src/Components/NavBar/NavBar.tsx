import React, { useEffect, useRef } from "react";
import Logo from "../Logo";
import MenuToggleBtn from "../MenuToggleBtn";
import { useAppSettings } from "../../Context/AppSettings";
import UserProfileBtn from "../UserProfileBtn";
import UserProfile from "../User/UserProfile";
import Input from "../Input";
import ToggleMode from "../ToggleMode";
import GiftBtn from "../GiftBtn";

const NavBar: React.FC = () => {
  const {
    setIsMenuOpen,
    setIsUserProfileOpen,
    isMenuOpen,
    isUserProfileOpen,
    isMobile,
  } = useAppSettings();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    if (isUserProfileOpen) setIsUserProfileOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };
  const handleUserProfileToggle = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsUserProfileOpen(!isUserProfileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (isMenuOpen) setIsMenuOpen(false);
        if (isUserProfileOpen) setIsUserProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isUserProfileOpen, setIsMenuOpen, setIsUserProfileOpen]);

  return (
    <nav
      className={`${isMobile ? "bg-PeacockBlue-900" : ""} py-2 px-4 relative lg:col-span-2 xl:col-span-3 lg:order-1`}
    >
      <div className="flex justify-between items-center" ref={menuRef}>
        {isMobile && <MenuToggleBtn handleMenuToggle={handleMenuToggle} />}
        {isMobile && <Logo />}
        {!isMobile && <Input />}
        <div className="flex items-center justify-center gap-2">
          {!isMobile && <GiftBtn />}
          {!isMobile && <ToggleMode />}
          <UserProfileBtn handleUserProfileToggle={handleUserProfileToggle} />
        </div>
      </div>
      <UserProfile />
    </nav>
  );
};

export default NavBar;
