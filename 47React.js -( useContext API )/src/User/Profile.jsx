import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <span className="text-red-700">Please Sign in</span>;

  return (
    <>
      <span>
        Welcome <span className="text-green-500">{user.username}</span>
      </span>
    </>
  );
}

export default Profile;
