import React, { useState } from "react";
import UserContext from "./UserContext"; // main data file

function UserContextProvider({ children }) {
  // to get all inner Elements

  const [user, setUser] = useState(null); // state to handle user field

  return (
    // wrapping children Elements

    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
