import { useEffect, useState } from "react";

import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Modal from "../../../Components/Modal";
import Textarea from "../../../Components/Textarea";

import { languages } from "../../../Asset/languages";
import useLanguage from "../../../Context/Language/useLanguage";
import useLoading from "../../../Context/Loading/useLoading";

import { ScheduleUpdate } from "../../../Fetch/Schedule/Update";

import useForm from "../../../Hook/useForm";

function ModalUpdateSchedule({
  schedule,
  isOpenModal,
  setIsOpenModal,
  featchSchedules,
}) {
  const { language } = useLanguage();
  const { loading } = useLoading();

  const [idSchedule, setIdSchedule] = useState();

  const nameSchedule = useForm("");
  const serviceSchedule = useForm("");
  const descriptionSchedule = useForm("");

  async function handleUpdateIsActive() {
    if (
      !idSchedule ||
      !nameSchedule.validate() ||
      !serviceSchedule.validate() ||
      !descriptionSchedule.validate()
    )
      return;

    const token = window.localStorage.getItem("token");
    const body = {
      name_schedule: nameSchedule.value,
      service_schedule: serviceSchedule.value,
      description_schedule: descriptionSchedule.value,
    };
    const response = await ScheduleUpdate(token, idSchedule, body, language);
    if (response) featchSchedules();
  }

  useEffect(() => {
    if (!schedule) setIsOpenModal(false);
    setIdSchedule(schedule.id_schedule);
    nameSchedule.setValue(schedule.name_schedule);
    serviceSchedule.setValue(schedule.service_schedule);
    descriptionSchedule.setValue(schedule.description_schedule);
  }, [schedule]);

  return (
    <Modal
      isOpen={isOpenModal}
      setIsOpen={setIsOpenModal}
      onClose={() => setIsOpenModal(false)}
    >
      <h1>Editar Informações da Agenda</h1>
      <Input
        required
        type="text"
        {...nameSchedule}
        disabled={loading}
        label="Nome da Agenda"
      />
      <Input
        required
        type="text"
        {...serviceSchedule}
        disabled={loading}
        label="Serviço da Agenda"
      />
      <Textarea
        required
        type="text"
        value={descriptionSchedule.value}
        onChange={descriptionSchedule.onChange}
        disabled={loading}
        placeholder="Descrição da Agenda"
      />
      <Button type="button" disabled={loading} onClick={handleUpdateIsActive}>
        Editar Agenda
      </Button>
    </Modal>
  );
}

export default ModalUpdateSchedule;
