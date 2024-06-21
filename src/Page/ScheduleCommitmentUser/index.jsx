import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScheduleCommitmentUserContainer, TimesContainer } from "./styles";

import Modal from "../../Components/Modal";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Edit from "../../Asset/Image/edit.png";

import { TimeList } from "../../Fetch/Time/List";
import { CommitmentFind } from "../../Fetch/Commitment/Find";
import { AlertConfirm } from "../../Helper/sweetAlert";
import { CommitmentCreate } from "../../Fetch/Commitment/Create";

function ScheduleCommitmentUser() {
  const navigate = useNavigate();
  const { id: idSchedule } = useParams();

  const { language } = useLanguage();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [commitment, setCommitment] = useState({});

  const [times, setTimes] = useState([]);
  const [dateSelected, setDateSelected] = useState(new Date());

  const optionsDayWeek = [
    languages[language].pageSchedule.sunday,
    languages[language].pageSchedule.monday,
    languages[language].pageSchedule.tuesday,
    languages[language].pageSchedule.wednesday,
    languages[language].pageSchedule.thursday,
    languages[language].pageSchedule.friday,
    languages[language].pageSchedule.saturday,
  ];

  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  async function fetchTimes() {
    const token = window.localStorage.getItem("token");
    if (!token) return;

    const responseTimes = await TimeList(
      token,
      idSchedule,
      dateSelected.getDay(),
      language
    );

    if (responseTimes) {
      setTimes(responseTimes);
      const dateCommitment = formatDateToYYYYMMDD(dateSelected);
      const query = { idSchedule, dateCommitment };

      const responseCommitments = await CommitmentFind(token, query, language);

      if (responseCommitments) {
        const updatedTimes = responseTimes.map((time) => {
          const hasCommitment = responseCommitments.some(
            (commitment) => commitment.id_times === time.id_times
          );
          return { ...time, commitment: hasCommitment };
        });

        setTimes(updatedTimes);
      }
    }
  }

  async function handleCommitment(time) {
    AlertConfirm({
      title: "create",
      icon: "warning",
      language,
    }).then(async (result) => {
      if (!result) return null;
      const token = window.localStorage.getItem("token");
      if (!token) return;
      const body = {
        id_times: time.id_times,
        date_commitment: formatDateToYYYYMMDD(dateSelected),
      };
      const response = await CommitmentCreate(token, body, language);
      if (response) fetchTimes();
    });
  }

  useEffect(() => {
    fetchTimes();
  }, [dateSelected]);

  return (
    <ScheduleCommitmentUserContainer>
      <h1>Agendamento de Compromisso</h1>
      <strong>{times && times[0]?.name_schedule}</strong>
      <strong>{times && times[0]?.service_schedule}</strong>
      <Calendar onChange={setDateSelected} value={dateSelected} />
      <strong>
        {dateSelected.toLocaleDateString() +
          " - " +
          optionsDayWeek[dateSelected.getDay()]}
      </strong>
      <h2>Horários Disponíveis</h2>
      <TimesContainer>
        {times.map((time) => (
          <div
            key={time.id_times}
            onClick={() => {
              if (time.commitment) return;
              handleCommitment(time);
            }}
            className={time.commitment ? "commitment" : ""}
          >
            <span>{time.start_time}</span>
            <span>{time.end_time}</span>
            <img src={Edit} alt="Agendar" />
          </div>
        ))}
      </TimesContainer>
    </ScheduleCommitmentUserContainer>
  );
}

export default ScheduleCommitmentUser;
