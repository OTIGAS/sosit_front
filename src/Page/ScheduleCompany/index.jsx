import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScheduleCompanyContainer,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "./styles";

import Modal from "../../Components/Modal";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

import ModalCreateSchedule from "./ModalCreateSchedule";
import ModalUpdateSchedule from "./ModalUpdateSchedule";

import Edit from "../../Asset/Image/edit.png";
import Delete from "../../Asset/Image/delete.png";
import Visibility from "../../Asset/Image/visibility.png";
import VisibilityOff from "../../Asset/Image/visibility_off.png";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";
import useLoading from "../../Context/Loading/useLoading";

import { ScheduleList } from "../../Fetch/Schedule/List";
import { ScheduleUpdate } from "../../Fetch/Schedule/Update";
import { ScheduleDelete } from "../../Fetch/Schedule/Delete";

import { AlertConfirm } from "../../Helper/sweetAlert";

import { Rating } from "react-simple-star-rating";
import ModaTimeSchedule from "./ModaTimeSchedule";

function ScheduleCompany() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const { loading } = useLoading();

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalUpdateInfo, setOpenModalUpdateInfo] = useState(false);
  const [openModalUpdateTime, setOpenModalUpdateTime] = useState(false);

  const [nameSchedule, setNameSchedule] = useState("");
  const [serviceSchedule, setServiceSchedule] = useState("");

  const [schedule, setSchedule] = useState({});
  const [schedules, setSchedules] = useState([]);

  async function featchSchedules(name, service) {
    const token = window.localStorage.getItem("token");
    const query = { nameSchedule: name, serviceSchedule: service };
    const response = await ScheduleList(token, query, language);
    setSchedules(response);
  }

  async function handleUpdateIsActive(idSchedule, isActive) {
    AlertConfirm({
      title: "update",
      icon: "warning",
      language,
    }).then(async (result) => {
      if (!result) return null;
      const token = window.localStorage.getItem("token");
      const body = { is_active: !isActive };
      const response = await ScheduleUpdate(token, idSchedule, body, language);
      if (response) featchSchedules();
    });
  }

  async function handleDeleteSchedule(idSchedule) {
    AlertConfirm({
      title: "delete",
      icon: "warning",
      language,
    }).then(async (result) => {
      if (!result) return null;
      const token = window.localStorage.getItem("token");
      const response = await ScheduleDelete(token, idSchedule, language);
      if (response) featchSchedules();
    });
  }

  useEffect(() => {
    featchSchedules(nameSchedule, serviceSchedule);
  }, [nameSchedule, serviceSchedule]);

  return (
    <ScheduleCompanyContainer>
      <div>
        <Input
          required
          type="text"
          label="Nome da Agenda"
          disabled={loading}
          value={nameSchedule}
          onChange={(e) => setNameSchedule(e.target.value)}
        />
        <Input
          required
          type="text"
          label="Serviço da Agenda"
          disabled={loading}
          value={serviceSchedule}
          onChange={(e) => setServiceSchedule(e.target.value)}
        />
        <Button
          type="button"
          disabled={loading}
          onClick={() => setOpenModalCreate(true)}
        >
          Nova Agenda
        </Button>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Serviço</TableHeader>
              <TableHeader>Atualizado</TableHeader>
              <TableHeader>Ações</TableHeader>
              <TableHeader>Ativo</TableHeader>
              <TableHeader>Apagar</TableHeader>
            </tr>
          </thead>
          <tbody>
            {schedules &&
              schedules.map((item) => (
                <TableRow key={item.id_schedule}>
                  <TableData>{item.name_schedule}</TableData>
                  <TableData>{item.service_schedule}</TableData>
                  <TableData>{item.updated_at}</TableData>
                  <TableData
                    onClick={() => {
                      setSchedule(item);
                      setOpenModalUpdate(true);
                    }}
                  >
                    <img src={Edit} alt="Editar" />
                  </TableData>
                  <TableData
                    onClick={() =>
                      handleUpdateIsActive(item.id_schedule, item.is_active)
                    }
                  >
                    {item.is_active ? (
                      <img src={Visibility} alt="Visível" />
                    ) : (
                      <img src={VisibilityOff} alt="Invisível" />
                    )}
                  </TableData>
                  <TableData
                    onClick={() => handleDeleteSchedule(item.id_schedule)}
                  >
                    <img src={Delete} alt="Apagar" />
                  </TableData>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </div>
      <ModalCreateSchedule
        isOpenModal={openModalCreate}
        setIsOpenModal={setOpenModalCreate}
        featchSchedules={featchSchedules}
      />
      <ModalUpdateSchedule
        schedule={schedule}
        isOpenModal={openModalUpdateInfo}
        setIsOpenModal={setOpenModalUpdateInfo}
        featchSchedules={featchSchedules}
      />
      <ModaTimeSchedule
        idSchedule={schedule.id_schedule}
        isOpenModal={openModalUpdateTime}
        setIsOpenModal={setOpenModalUpdateTime}
      />
      <Modal isOpen={openModalUpdate} onClose={() => setOpenModalUpdate(false)}>
        <h1>Atualizar Agenda</h1>
        <strong>Nome</strong>
        <span>{schedule.name_schedule}</span>
        <strong>Serviço</strong>
        <span>{schedule.service_schedule}</span>
        <strong>Rating</strong>
        <Rating readonly={true} rating={schedule.rating} />
        <Button
          type="button"
          disabled={loading}
          onClick={() => {
            setOpenModalUpdate(false);
            setOpenModalUpdateTime(true);
          }}
        >
          Criar/Editar Horários
        </Button>
        <Button
          type="button"
          disabled={loading}
          onClick={() => {
            setOpenModalUpdate(false);
            setOpenModalUpdateInfo(true);
          }}
        >
          Editar Informações
        </Button>
      </Modal>
    </ScheduleCompanyContainer>
  );
}

export default ScheduleCompany;
