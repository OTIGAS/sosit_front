import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContainer } from "./styles";

import useForm from "../../Hook/useForm";
import Input from "../../Components/Input";
import Textarea from "../../Components/Textarea";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import InputFile from "../../Components/InputFile";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";
import useEntity from "../../Context/Entity/useEntity";
import useError from "../../Context/Error/useError";
import useLoading from "../../Context/Loading/useLoading";

import { EntityUpdate } from "../../Fetch/Entity/Update";
import { ImageUpdate } from "../../Fetch/Entity/Image";
import { URL } from "../../Api/URL";

import Person from "../../Asset/Image/person.png";
import Company from "../../Asset/Image/company.png";

import {
  birthDateMask,
  cnpjMask,
  cpfMask,
  phoneMask,
  postalCodeMask,
} from "../../Helper/mask";

function Profile() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const { error, setError } = useError();
  const { loading, setLoading } = useLoading();

  const { data, userLogout, featchEntityToken } = useEntity();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState();

  const [imageUser, setImageUser] = useState(Person);
  const [imageCompany, setImageCompany] = useState(Company);

  const emailLogin = useForm("email");

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

  const passwordLoginOld = useForm();
  const passwordLoginNew = useForm();

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

  async function handleUpdate() {
    if (
      (content == "user" &&
        nameUser.validate() &&
        cpfUser.validate() &&
        dateBirth.validate()) ||
      (content == "company" &&
        nameCompany.validate() &&
        cnpjCompany.validate() &&
        moreInformation.validate()) ||
      (content == "contact" &&
        personName.validate() &&
        emailContact.validate() &&
        phoneContact.validate()) ||
      (content == "address" &&
        number.validate() &&
        street.validate() &&
        district.validate() &&
        city.validate() &&
        state.validate() &&
        postalCode.validate() &&
        complement.validate())
    ) {
      setLoading(true);
      const token = localStorage.getItem("token");
      await EntityUpdate(
        token,
        {
          content: content,
          credential: {
            profile: data?.profile,
            email_login: emailLogin.value,
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
      featchEntityToken();
      setLoading(false);
    }
  }

  async function handleUpdatePassoword() {
    if (passwordLoginOld.validate() && passwordLoginNew.validate()) {
      setLoading(true);
      const token = localStorage.getItem("token");
      await EntityUpdate(
        token,
        {
          content: "password",
          password: {
            profile: data?.profile,
            old_password: passwordLoginOld.value,
            new_password: passwordLoginNew.value,
          },
        },
        language
      );
      featchEntityToken();
      setLoading(false);
    }
  }

  useEffect(() => {
    if (data) {
      setContent(data?.profile);
      emailLogin.setValue(data?.email_login);

      nameUser.setValue(data?.name_user);
      cpfUser.setValue(data?.cpf_user);
      dateBirth.setValue(data?.date_of_birth);

      nameCompany.setValue(data?.name_company);
      cnpjCompany.setValue(data?.cnpj_company);
      moreInformation.setValue(data?.more_information);

      personName.setValue(data?.person_name);
      emailContact.setValue(data?.email_contact);
      phoneContact.setValue(data?.phone_contact);

      postalCode.setValue(data?.postal_code);
      number.setValue(data?.number);
      street.setValue(data?.street);
      district.setValue(data?.district);
      city.setValue(data?.city);
      state.setValue(data?.state);
      complement.setValue(data?.complement);

      if (data?.image_user)
        setImageUser(`${URL}/entity/image/${data.image_user}`);
      if (data.image_company)
        setImageCompany(`${URL}/entity/image/${data.image_company}`);
    }
  }, [data]);

  function renderContentProfile() {
    if (content == "user") {
      return (
        <div>
          <img src={imageUser} alt="Avatar" />
          <InputFile
            id="file-upload"
            htmlFor="file-upload"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          >
            Selecione uma imagem
          </InputFile>
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
        </div>
      );
    } else if (content == "company") {
      return (
        <div>
          <img src={imageCompany} alt="Avatar" />
          <InputFile
            id="file-upload"
            htmlFor="file-upload"
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
          >
            Selecione uma imagem
          </InputFile>
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
        </div>
      );
    } else if (content == "contact") {
      return (
        <div>
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
        </div>
      );
    } else if (content == "address") {
      return (
        <div>
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
            value={complement.value}
            onChange={complement.onChange}
            disabled={loading}
            placeholder="Complemento"
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
  }

  async function handleChangeImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const token = window.localStorage.getItem("token");
    await ImageUpdate(token, file, data?.profile, language);
    await featchEntityToken();
  }

  return (
    <ProfileContainer>
      <div>
        <a
          disabled={loading}
          onClick={() => setContent(data?.profile)}
          className={content == "user" || content == "company" ? "active" : ""}
        >
          {data?.profile == "user" ? "Usuário" : "Empresa"}
        </a>
        <a
          disabled={loading}
          onClick={() => setContent("contact")}
          className={content == "contact" ? "active" : ""}
        >
          Contato
        </a>
        <a
          disabled={loading}
          onClick={() => setContent("address")}
          className={content == "address" ? "active" : ""}
        >
          Endereço
        </a>
      </div>
      {renderContentProfile()}
      <div>
        <Button type="button" disabled={loading} onClick={handleUpdate}>
          Atualizar Informações
        </Button>
        <Button
          type="button"
          disabled={loading}
          onClick={() => setIsModalOpen(true)}
        >
          Atualizar Senha
        </Button>
        <Button type="button" disabled={loading} onClick={() => userLogout()}>
          Sair
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1>Atualizar Senha</h1>
        <Input
          required
          type="password"
          {...passwordLoginOld}
          disabled={loading}
          label="Senha Antiga"
        />
        <Input
          required
          type="password"
          {...passwordLoginNew}
          disabled={loading}
          label="Senha Nova"
        />
        <Button
          type="submit"
          disabled={loading}
          onClick={handleUpdatePassoword}
        >
          Atualizar
        </Button>
      </Modal>
    </ProfileContainer>
  );
}

export default Profile;
