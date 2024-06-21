import { useEffect, useState } from "react";
import { InputTime, ListTimes } from "../styles";

import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Modal from "../../../Components/Modal";
import Select from "../../../Components/Select";

import Delete from "../../../Asset/Image/delete.png";

import { languages } from "../../../Asset/languages";
import useLanguage from "../../../Context/Language/useLanguage";
import useLoading from "../../../Context/Loading/useLoading";

import { TimeCreate } from "../../../Fetch/Time/Create";
import { TimeList } from "../../../Fetch/Time/List";
import { TimeDelete } from "../../../Fetch/Time/Delete";

import useForm from "../../../Hook/useForm";

import { timeMask } from "../../../Helper/mask";
import { AlertConfirm } from "../../../Helper/sweetAlert";

function ModaTimeSchedule({ idSchedule, isOpenModal, setIsOpenModal }) {
  const { language } = useLanguage();
  const { loading } = useLoading();

  const [time, setTime] = useState({});
  const [times, setTimes] = useState([]);

  const startTime = useForm("time");
  const endTime = useForm("time");

  const [dayWeek, setDayWeek] = useState(null);
  const optionsDayWeek = [
    { value: 0, label: languages[language].pageSchedule.sunday },
    { value: 1, label: languages[language].pageSchedule.monday },
    { value: 2, label: languages[language].pageSchedule.tuesday },
    { value: 3, label: languages[language].pageSchedule.wednesday },
    { value: 4, label: languages[language].pageSchedule.thursday },
    { value: 5, label: languages[language].pageSchedule.friday },
    { value: 6, label: languages[language].pageSchedule.saturday },
  ];

  async function featchTimes() {
    const token = window.localStorage.getItem("token");
    if (!token || !idSchedule || !dayWeek) return;
    const response = await TimeList(token, idSchedule, dayWeek, language);
    if (response) setTimes(response);
  }

  async function handleCreateTimes() {
    const token = window.localStorage.getItem("token");
    if (
      !token ||
      !idSchedule ||
      !dayWeek ||
      !startTime.validate() ||
      !endTime.validate()
    ) {
      alert("Preencha todos os campos");
      return;
    }
    const body = {
      id_schedule: idSchedule,
      time: {
        start_time: startTime.value,
        end_time: endTime.value,
        day_week: dayWeek,
      },
    };
    const response = await TimeCreate(token, body, language);
    if (response) {
      featchTimes();
      startTime.setValue("");
      endTime.setValue("");
    }
  }

  async function handleDeleteTime(idTime) {
    AlertConfirm({
      title: "delete",
      icon: "warning",
      language,
    }).then(async (result) => {
      if (!result) return null;
      const token = window.localStorage.getItem("token");
      const response = await TimeDelete(token, idTime, language);
      if (response) featchTimes();
    });
  }

  useEffect(() => {
    if (idSchedule) {
      featchTimes();
    } else {
      setIsOpenModal(false);
    }
  }, [idSchedule, dayWeek]);

  return (
    <Modal
      isOpen={isOpenModal}
      setIsOpen={setIsOpenModal}
      onClose={() => setIsOpenModal(false)}
    >
      <h1>Criar/Editar Horários</h1>
      <Select
        disabled={loading}
        options={optionsDayWeek}
        onChange={(e) => setDayWeek(e)}
        label="Selecione o Dia da Semana"
      />
      <InputTime>
        <Input
          required
          type="text"
          {...startTime}
          mask={timeMask}
          disabled={loading}
          label="Início"
        />
        <Input
          required
          type="text"
          {...endTime}
          mask={timeMask}
          disabled={loading}
          label="Término"
        />
        <Button
          type="button"
          disabled={loading}
          onClick={() => handleCreateTimes()}
        >
          +
        </Button>
      </InputTime>
      <ListTimes>
        {times.map((item) => (
          <div key={item.id_times}>
            <strong>Inicio: {item.start_time}</strong>
            <strong>Término: {item.end_time}</strong>
            <img
              src={Delete}
              alt="Apagar"
              onClick={() => handleDeleteTime(item.id_times)}
            />
          </div>
        ))}
      </ListTimes>
    </Modal>
  );
}

export default ModaTimeSchedule;
