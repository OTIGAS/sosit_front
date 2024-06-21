import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./styles";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";

function Home() {
  const navigate = useNavigate();

  const { language } = useLanguage();

  return <HomeContainer>Home Page</HomeContainer>;
}

export default Home;
