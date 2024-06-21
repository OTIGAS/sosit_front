import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { HeaderContainer } from "./styles";

import useEntity from "../../Context/Entity/useEntity";

import useTheme from "../../Context/Theme/useTheme";
import useLanguage from "../../Context/Language/useLanguage";
import useLoading from "../../Context/Loading/useLoading";

import IconLogo from "../../Asset/Image/icon-logo.png";
import BR from "../../Asset/Image/br.png";
import EN from "../../Asset/Image/en.png";
import Light from "../../Asset/Image/light.png";
import Dark from "../../Asset/Image/dark.png";

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { loading } = useLoading();

  const { data } = useEntity();

  const renderNavigation = () => {
    switch (data?.profile) {
      case "user": {
        return (
          <div>
            <NavLink to={"/commitments-user"} disabled={loading}>
              Compromissos
            </NavLink>
            <NavLink to={"/schedule-user"} disabled={loading}>
              Agendamentos
            </NavLink>
            <NavLink to={"/profile"} disabled={loading}>
              Perfil
            </NavLink>
          </div>
        );
      }
      case "company": {
        return (
          <div>
            <NavLink to={"/schedule-company"} disabled={loading}>
              Agendas
            </NavLink>
            <NavLink to={"/profile"} disabled={loading}>
              Perfil
            </NavLink>
          </div>
        );
      }
      default: {
        return (
          <div>
            <NavLink to={"/"} disabled={loading}>
              Inicio
            </NavLink>
            <NavLink to={"/login"} disabled={loading}>
              Entrar
            </NavLink>
            <NavLink to={"/register"} disabled={loading}>
              Cadastro
            </NavLink>
          </div>
        );
      }
    }
  };

  return (
    <HeaderContainer>
      <div>
        <img src={IconLogo} alt={"SOSIT"} onClick={() => userLogout()} />
        {data && <h1>{data?.name_user || data?.name_company}</h1>}
        <div>
          <button onClick={toggleLanguage}>
            {language === "portuguese" ? (
              <img src={BR} alt={language} />
            ) : (
              <img src={EN} alt={language} />
            )}
          </button>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <img src={Light} alt={theme} />
            ) : (
              <img src={Dark} alt={theme} />
            )}
          </button>
        </div>
      </div>
      {renderNavigation()}
    </HeaderContainer>
  );
}

Header.propTypes = {
  isOpenNavigation: PropTypes.bool,
};

export default Header;
