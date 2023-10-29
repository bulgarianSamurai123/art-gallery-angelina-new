import React, { useState } from "react";
import { signIn } from "next-auth/react";

const AuthContext = React.createContext({
  isLoggedin: true,
  onLogout: () => {},
  onLogin: (username, password) => {},
  switchAuthModeHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  async function loginHandler(username, password) {
    console.log('In loginhandler')
    if (isLoggedin) {
      // log user in
      const result = await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      });

        if (!result.error) {
          // set some auth state
        }
    }
    setIsLoggedin(true);
  }

  const logoutHandler = () => {
    setIsLoggedin(false);
  };

  function switchAuthModeHandler() {
    setIsLoggedin((prevState) => !prevState);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedin,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        switchAuthModeHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
