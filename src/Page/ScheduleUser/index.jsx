import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScheduleContent,
  ScheduleUserContainer,
  SearchCompanySchedule,
  ShowCompanySchedule,
} from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import { Rating } from "react-simple-star-rating";
import Company from "../../Asset/Image/company.png";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";
import useLoading from "../../Context/Loading/useLoading";

import { URL } from "../../Api/URL";
import { ScheduleList } from "../../Fetch/Schedule/List";

function ScheduleUser() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const { loading } = useLoading();

  const [schedules, setSchedules] = useState([]);

  const [city, setCity] = useState("");
  const [nameCompany, setNameCompany] = useState("");
  const [nameSchedule, setNameSchedule] = useState("");
  const [serviceSchedule, setServiceSchedule] = useState("");

  const [idScheduleSelect, setIdScheduleSelect] = useState("");
  const [nameScheduleSelect, setNameScheduleSelect] = useState("");
  const [serviceScheduleSelect, setServiceScheduleSelect] = useState("");
  const [descriptionScheduleSelect, setDescriptionScheduleSelect] =
    useState("");
  const [ratingSelect, setRatingSelect] = useState(0);
  const [daysWeekSelect, setDaysWeekSelect] = useState("");

  const [nameCompanySelect, setNameCompanySelect] = useState("");
  const [moreInformationSelect, setMoreInformationSelect] = useState("");
  const [imageCompanySelect, setImageCompanySelect] = useState(Company);

  const [districtAddressSelect, setDistrictAddressSelect] = useState("");
  const [cityAddressSelect, setCityAddressSelect] = useState("");
  const [stateAddressSelect, setStateAddressSelect] = useState("");
  const [postalCodeAddressSelect, setPostalCodeAddressSelect] = useState("");

  const optionsDayWeek = [
    languages[language].pageSchedule.sunday,
    languages[language].pageSchedule.monday,
    languages[language].pageSchedule.tuesday,
    languages[language].pageSchedule.wednesday,
    languages[language].pageSchedule.thursday,
    languages[language].pageSchedule.friday,
    languages[language].pageSchedule.saturday,
  ];

  async function featchCompanies() {
    const token = window.localStorage.getItem("token");
    if (!token) return;
    const query = { city, nameCompany, nameSchedule, serviceSchedule };
    const response = await ScheduleList(token, query, language);
    if (response) setSchedules(response);
  }

  const handleSelectSchedule = (schedule) => {
    if (schedule) {
      setIdScheduleSelect(schedule.id_schedule);
      setNameScheduleSelect(schedule.name_schedule);
      setServiceScheduleSelect(schedule.service_schedule);
      setDescriptionScheduleSelect(schedule.description_schedule);
      setRatingSelect(schedule.rating || 0);
      setDaysWeekSelect(
        schedule?.days_week
          ? schedule?.days_week
              .split(",")
              .map((day) => optionsDayWeek[day].slice(0, 3))
          : ["Nenhum horário disponível"]
      );

      setNameCompanySelect(schedule.name_company);
      setMoreInformationSelect(schedule.more_information);
      setImageCompanySelect(`${URL}/entity/image/${schedule.image_company}`);

      setDistrictAddressSelect(schedule.district);
      setCityAddressSelect(schedule.city);
      setStateAddressSelect(schedule.state);
      setPostalCodeAddressSelect(schedule.postal_code);
    }
  };

  useEffect(() => {
    featchCompanies();
  }, [city, nameCompany, nameSchedule, serviceSchedule]);

  return (
    <ScheduleUserContainer>
      <SearchCompanySchedule>
        <h1>Pesquise pela Agenda</h1>
        <Input
          required
          type="text"
          label="Cidade"
          disabled={loading}
          value={nameCompany}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          required
          type="text"
          label="Nome Empresa"
          disabled={loading}
          value={city}
          onChange={(e) => setNameCompany(e.target.value)}
        />
        <Input
          required
          type="text"
          label="Nome Agenda"
          disabled={loading}
          value={nameSchedule}
          onChange={(e) => setNameSchedule(e.target.value)}
        />
        <Input
          required
          type="text"
          label="Serviço Prestado"
          disabled={loading}
          value={serviceSchedule}
          onChange={(e) => setServiceSchedule(e.target.value)}
        />
        <div>
          {schedules.map((schedule) => (
            <div
              key={schedule.id_schedule}
              onClick={() => handleSelectSchedule(schedule)}
            >
              <div>
                <strong>{schedule.name_schedule}</strong>
                <strong>{schedule.service_schedule}</strong>
              </div>
              <div>
                {schedule?.days_week ? (
                  schedule?.days_week
                    .split(",")
                    .map((day) => (
                      <span key={day}>
                        {optionsDayWeek[day].slice(0, 3)}...
                      </span>
                    ))
                ) : (
                  <span>Nenhum horário disponível</span>
                )}
              </div>
              <Rating readonly={true} rating={schedule.rating} size={25} />
            </div>
          ))}
        </div>
      </SearchCompanySchedule>
      <ShowCompanySchedule>
        <h1>Agenda Selecionada</h1>
        <div>
          <img src={imageCompanySelect} alt="Avatar" />
          <div>
            <label>Nome Empresa</label>
            <input disabled type="text" value={nameCompanySelect} />
            <label>Mais Informações</label>
            <textarea disabled type="text" value={moreInformationSelect} />
          </div>
        </div>

        <div>
          <div>
            <label>Bairro</label>
            <input disabled type="text" value={districtAddressSelect} />
          </div>
          <div>
            <label>Cidade</label>
            <input disabled type="text" value={cityAddressSelect} />
          </div>
        </div>
        <div>
          <div>
            <label>Estado</label>
            <input disabled type="text" value={stateAddressSelect} />
          </div>
          <div>
            <label>CEP</label>
            <input disabled type="text" value={postalCodeAddressSelect} />
          </div>
        </div>

        <div>
          <div>
            <label>Nome da Agenda</label>
            <input disabled type="text" value={nameScheduleSelect} />
          </div>
          <div>
            <label>Serviço Prestado</label>
            <input disabled type="text" value={serviceScheduleSelect} />
          </div>
        </div>
        <div>
          <div>
            <label>Dias Da Semana</label>
            <input disabled type="text" value={daysWeekSelect} />
          </div>
        </div>
        <div>
          <div>
            <label>Descricão da Agenda</label>
            <textarea disabled type="text" value={descriptionScheduleSelect} />
          </div>
        </div>
        <Button
          type="button"
          disabled={idScheduleSelect == null || loading}
          onClick={() => navigate(`/schedule-user/${idScheduleSelect}`)}
        >
          Abrir Agenda
        </Button>
      </ShowCompanySchedule>
    </ScheduleUserContainer>
  );
}

export default ScheduleUser;
