import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { languages } from "../../Asset/languages";
import useLanguage from "../Language/useLanguage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { language } = useLanguage();

  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        login,
        setLogin,
        loading,
        setLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext };
