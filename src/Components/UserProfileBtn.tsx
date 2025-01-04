import React from "react";

interface IUserProfileToggleBtnProps {
  handleUserProfileToggle: () => void;
}

const UserProfileBtn: React.FC<IUserProfileToggleBtnProps> = ({
  handleUserProfileToggle,
}) => {
  return (
    <button
      onClick={handleUserProfileToggle}
      className="size-10 rounded-full overflow-hidden"
    >
      <img src="/images/user.png" alt="profile" />
    </button>
  );
};

export default UserProfileBtn;
