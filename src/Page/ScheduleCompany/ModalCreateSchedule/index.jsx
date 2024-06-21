import { useEffect } from "react";

import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import Modal from "../../../Components/Modal";
import Textarea from "../../../Components/Textarea";

import { languages } from "../../../Asset/languages";
import useLanguage from "../../../Context/Language/useLanguage";
import useLoading from "../../../Context/Loading/useLoading";

import { ScheduleCreate } from "../../../Fetch/Schedule/Create";

import useForm from "../../../Hook/useForm";

function ModalCreateSchedule({ isOpenModal, setIsOpenModal, featchSchedules }) {
  const { language } = useLanguage();
  const { loading } = useLoading();

  const nameSchedule = useForm();
  const serviceSchedule = useForm();
  const descriptionSchedule = useForm();

  async function handleCreateSchedule() {
    if (
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
    const response = await ScheduleCreate(token, body, language);
    if (response) featchSchedules();
  }

  useEffect(() => {
    nameSchedule.setValue("");
    serviceSchedule.setValue("");
    descriptionSchedule.setValue("");
  }, []);

  return (
    <Modal
      isOpen={isOpenModal}
      setIsOpen={setIsOpenModal}
      onClose={() => setIsOpenModal(false)}
    >
      <h1>Criar Agenda</h1>
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
      <Button type="button" disabled={loading} onClick={handleCreateSchedule}>
        Cadastrar Agenda
      </Button>
    </Modal>
  );
}

export default ModalCreateSchedule;
