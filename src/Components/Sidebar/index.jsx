import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ImageContent,
  SidebarContainer,
  SidebarContent,
  SidebarHeader,
  ToggleButton,
} from "./styles";

import useLanguage from "../../Context/Language/useLanguage";
import useUser from "../../Context/User/useUser";
import { languages } from "../../Asset/languages";
import Open from "../../Asset/Image/arrow-right.png";
import Close from "../../Asset/Image/arrow-left.png";

function Sidebar() {
  const { data } = useUser();
  const { language } = useLanguage();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const userRoles = {
    1: [
      { to: "/", label: languages[language].header.home },
      { to: "/company", label: languages[language].header.company },
      { to: "/profile", label: languages[language].header.profile },
      { to: "/requests", label: languages[language].header.requests },
      { to: "/analysis", label: languages[language].header.analysis },
      { to: "/projects", label: languages[language].header.projects },
    ],
    2: [
      { to: "/", label: languages[language].header.home },
      { to: "/company", label: languages[language].header.company },
      { to: "/profile", label: languages[language].header.profile },
      { to: "/requests", label: languages[language].header.requests },
      { to: "/analysis", label: languages[language].header.analysis },
    ],
    3: [
      { to: "/", label: languages[language].header.home },
      { to: "/profile", label: languages[language].header.profile },
      { to: "/requests", label: languages[language].header.requests },
    ],
    4: [
      { to: "/", label: languages[language].header.home },
      { to: "/company", label: languages[language].header.company },
      { to: "/profile", label: languages[language].header.profile },
      { to: "/requests", label: languages[language].header.requests },
      { to: "/analysis", label: languages[language].header.analysis },
    ],
    5: [
      { to: "/", label: languages[language].header.home },
      { to: "/profile", label: languages[language].header.profile },
      { to: "/analysis", label: languages[language].header.analysis },
    ],
    default: [
      { to: "/", label: languages[language].header.home },
      { to: "/login", label: languages[language].header.login },
      { to: "/register", label: languages[language].header.register },
    ],
  };

  const renderContent = () => {
    const role = data?.user_role || "default";
    return userRoles[role].map((item, index) => (
      <NavLink key={index} to={item.to}>
        {item.label}
      </NavLink>
    ));
  };

  return (
    <SidebarContainer isOpenSidebar={isOpenSidebar}>
      <SidebarHeader isOpenSidebar={isOpenSidebar}>
        {isOpenSidebar && <h2>SOSIT</h2>}
        <ToggleButton onClick={toggleSidebar}>
          <ImageContent
            src={isOpenSidebar ? Close : Open}
            alt={isOpenSidebar ? "Close" : "Open"}
          />
        </ToggleButton>
      </SidebarHeader>
      {isOpenSidebar && (
        <SidebarContent>
          {data && <h1>{data.name_company}</h1>}
          {renderContent()}
        </SidebarContent>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
