import React, { useEffect, useState } from "react";
import { useAppSettings } from "../../Context/AppSettings";
import List from "../List";

const UserProfile: React.FC = () => {
  const { data, isUserProfileOpen, isMobile } = useAppSettings();

  // Default state as empty array
  const [profile, setProfile] = useState<{ icon: string; label: string }[]>([]);

  useEffect(() => {
    if (data) {
      // Set user data to profile
      setProfile(data.user || []);
    }
  }, [data]);

  return (
    <div
      className={`${!isUserProfileOpen ? "bottom-full" : "top-full"} ${
        isMobile ? "text-white bg-PeacockBlue-900 w-full" : "bg-white"
      } absolute end-0 p-3`}
    >
      {profile && <List title="" items={profile} />}
    </div>
  );
};

export default UserProfile;
