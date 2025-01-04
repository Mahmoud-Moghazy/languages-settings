import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface IMenuToggleBtnProps {
  handleMenuToggle: () => void;
}

const MenuToggleBtn: React.FC<IMenuToggleBtnProps> = ({ handleMenuToggle }) => {
  return (
    <button onClick={handleMenuToggle}>
      <FontAwesomeIcon icon={faBars} size={"xl"} className="text-white" />
    </button>
  );
};

export default MenuToggleBtn;
