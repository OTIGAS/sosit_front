import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

import { languages } from "../../Asset/languages";
import useLanguage from "../Language/useLanguage";
import useError from "../Error/useError";

import { ProfileToken } from "../../Fetch/Entity/Profile";
import useLoading from "../Loading/useLoading";

const EntityContext = createContext();

export const EntityProvider = ({ children }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { setError } = useError();
  const { setLoading } = useLoading();

  const [data, setData] = useState();
  const [login, setLogin] = useState(null);

  const userLogout = useCallback(() => {
    window.localStorage.removeItem("token");
    setData(null);
    setError(null);
    setLogin(null);
    navigate("/");
  }, []);

  const featchEntityToken = useCallback(async () => {
    const token = window.localStorage.getItem("token");
    if (!token) return;
    setLoading(true);
    const response = await ProfileToken(token, language, userLogout);
    if (response) {
      setData(response);
      setLogin(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    featchEntityToken();
  }, []);

  return (
    <EntityContext.Provider
      value={{
        data,
        setData,
        login,
        setLogin,
        userLogout,
        featchEntityToken,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};

EntityProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EntityContext };
