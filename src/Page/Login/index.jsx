import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./styles";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";
import useLoading from "../../Context/Loading/useLoading";
import useError from "../../Context/Error/useError";
import useEntity from "../../Context/Entity/useEntity";

import useForm from "../../Hook/useForm";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import { EntityLogin } from "../../Fetch/Entity/Login";

function Login() {
  const navigate = useNavigate();

  const { language } = useLanguage();

  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  const { setData, setLogin } = useEntity();

  const email = useForm("email");
  const password = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (email.validate() && password.validate()) {
      const { data, token } = await EntityLogin(
        { email: email.value, password: password.value },
        navigate,
        language,
        setLoading
      );

      if (data && token) {
        setLogin(true);
        setData(data);
        window.localStorage.setItem("token", token);
      }
    }
  }

  return (
    <LoginContainer action="submit" onSubmit={handleSubmit}>
      <Input
        required
        type="email"
        {...email}
        disabled={loading}
        label="Email"
      />
      <Input type="password" {...password} disabled={loading} label="Senha" />
      <Button type="submit" required disabled={loading}>
        Entrar
      </Button>
      <span>Esqueceu sua senha?</span>
      {error && <p>{error}</p>}
    </LoginContainer>
  );
}

export default Login;
