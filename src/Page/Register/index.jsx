import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  PreRegisterContainer,
  RegisterContainer,
  SubContainer,
} from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Textarea from "../../Components/Textarea";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";
import useError from "../../Context/Error/useError";
import useLoading from "../../Context/Loading/useLoading";
import useEntity from "../../Context/Entity/useEntity";

import useForm from "../../Hook/useForm";

import {
  birthDateMask,
  cnpjMask,
  cpfMask,
  phoneMask,
  postalCodeMask,
} from "../../Helper/mask";
import { EntityCreate } from "../../Fetch/Entity/Create";

function Register() {
  const navigate = useNavigate();

  const { language } = useLanguage();

  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  const [register, setRegister] = useState(false);

  const emailLogin = useForm("email");
  const passwordLogin = useForm();

  const nameUser = useForm();
  const cpfUser = useForm("cpf");
  const dateBirth = useForm("birthDate");

  const nameCompany = useForm();
  const cnpjCompany = useForm("cnpj");
  const moreInformation = useForm();

  const personName = useForm();
  const emailContact = useForm("email");
  const phoneContact = useForm("phone");

  const number = useForm();
  const street = useForm();
  const district = useForm();
  const city = useForm();
  const state = useForm();
  const postalCode = useForm("postalCode");
  const complement = useForm();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (
      emailLogin.validate() &&
      passwordLogin.validate() &&
      ((register === "user" &&
        nameUser.validate() &&
        cpfUser.validate() &&
        dateBirth.validate()) ||
        (register === "company" &&
          nameCompany.validate() &&
          cnpjCompany.validate() &&
          moreInformation.validate())) &&
      personName.validate() &&
      emailContact.validate() &&
      phoneContact.validate() &&
      number.validate() &&
      street.validate() &&
      district.validate() &&
      city.validate() &&
      state.validate() &&
      postalCode.validate() &&
      complement.validate()
    ) {
      const result = await EntityCreate(
        {
          credential: {
            profile: register,
            email_login: emailLogin.value,
            password_login: passwordLogin.value,
          },
          contact: {
            person_name: personName.value,
            email_contact: emailContact.value,
            phone_contact: phoneContact.value,
          },
          address: {
            number: number.value,
            street: street.value,
            district: district.value,
            city: city.value,
            state: state.value,
            postal_code: postalCode.value,
            complement: complement.value,
          },
          company: {
            name_company: nameCompany.value,
            cnpj_company: cnpjCompany.value,
            more_information: moreInformation.value,
          },
          user: {
            name_user: nameUser.value,
            cpf_user: cpfUser.value,
            date_of_birth: dateBirth.value,
          },
        },
        language
      );

      if (result) {
        navigate("/login");
      }
      setLoading(false);
    }
  }

  async function handleOnBlurCep() {
    setLoading(true);
    if (postalCode.validate()) {
      const response = await fetch(
        `https://viacep.com.br/ws/${postalCode.value}/json/`
      );
      if (response.status === 200) {
        const data = await response.json();
        street.setValue(data.logradouro);
        district.setValue(data.bairro);
        city.setValue(data.localidade);
        state.setValue(data.uf);
      }
    }
    setLoading(false);
  }

  if (!register) {
    return (
      <PreRegisterContainer>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis ipsam facere qui reiciendis beatae corrupti consectetur
            quaerat, aut cumque ratione asperiores a molestiae facilis maiores
            quod. Consectetur, voluptatem nesciunt.
          </p>
          <Button type="button" onClick={() => setRegister("user")}>
            Cadastrar Usuário
          </Button>
        </div>
        <div>
          <Button type="button" onClick={() => setRegister("company")}>
            Cadastrar Empresa
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis ipsam facere qui reiciendis beatae corrupti consectetur
            quaerat, aut cumque ratione asperiores a molestiae facilis maiores
            quod. Consectetur, voluptatem nesciunt.
          </p>
        </div>
      </PreRegisterContainer>
    );
  } else if (register) {
    return (
      <RegisterContainer>
        <div>
          <Container>
            {register === "user" ? (
              <SubContainer>
                <h1>Usuário</h1>
                <Input
                  required
                  type="text"
                  {...nameUser}
                  disabled={loading}
                  label="Nome"
                />
                <Input
                  required
                  type="text"
                  {...cpfUser}
                  mask={cpfMask}
                  disabled={loading}
                  label="CPF"
                />
                <Input
                  required
                  type="text"
                  {...dateBirth}
                  mask={birthDateMask}
                  disabled={loading}
                  label="Data de Nascimento"
                />
                <Input
                  required
                  type="email"
                  {...emailLogin}
                  disabled={loading}
                  label="Email"
                />
                <Input
                  required
                  type="password"
                  {...passwordLogin}
                  disabled={loading}
                  label="Password"
                />
              </SubContainer>
            ) : (
              <SubContainer>
                <h1>Empresa</h1>
                <Input
                  required
                  type="text"
                  {...nameCompany}
                  disabled={loading}
                  label="Nome"
                />
                <Input
                  required
                  type="text"
                  {...cnpjCompany}
                  mask={cnpjMask}
                  disabled={loading}
                  label="CNPJ"
                />
                <Input
                  required
                  type="text"
                  {...moreInformation}
                  disabled={loading}
                  label="Mais Informações"
                />
                <Input
                  required
                  type="email"
                  {...emailLogin}
                  disabled={loading}
                  label="Email"
                />
                <Input
                  required
                  type="password"
                  {...passwordLogin}
                  disabled={loading}
                  label="Password"
                />
              </SubContainer>
            )}

            <SubContainer>
              <h1>Contato</h1>
              <Input
                required
                type="text"
                {...personName}
                disabled={loading}
                label="Nome"
              />
              <Input
                required
                type="text"
                {...emailContact}
                disabled={loading}
                label="E-mail p/ Contato"
              />
              <Input
                required
                type="text"
                {...phoneContact}
                mask={phoneMask}
                disabled={loading}
                label="Telefone p/ Contato"
              />
            </SubContainer>
          </Container>
          <Container>
            <SubContainer>
              <h1>Endereço</h1>
              <Input
                required
                type="text"
                {...postalCode}
                mask={postalCodeMask}
                onBlur={handleOnBlurCep}
                disabled={loading}
                label="CEP"
              />
              <Input
                required
                type="text"
                {...number}
                disabled={loading}
                label="Número"
              />
              <Input
                required
                type="text"
                {...street}
                disabled={loading}
                label="Rua"
              />
              <Input
                required
                type="text"
                {...district}
                disabled={loading}
                label="Bairro"
              />
              <Input
                required
                type="text"
                {...city}
                disabled={loading}
                label="Cidade"
              />
              <Input
                required
                type="text"
                {...state}
                disabled={loading}
                label="Estado"
              />
              <Textarea
                required
                type="text"
                {...complement}
                disabled={loading}
                placeholder="Complemento"
                style={{ gridArea: "input08 input09 input10" }}
              />
            </SubContainer>
          </Container>
        </div>
        <Button type="submit" onClick={handleSubmit} disabled={loading}>
          Cadastrar
        </Button>
        <Button
          type="button"
          disabled={loading}
          onClick={() => setRegister("")}
        >
          Voltar
        </Button>
      </RegisterContainer>
    );
  }
}

export default Register;
