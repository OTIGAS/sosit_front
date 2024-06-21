import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommitmentCompanyContainer,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "./styles";

import { languages } from "../../Asset/languages";
import useLanguage from "../../Context/Language/useLanguage";

function CommitmentCompany() {
  const navigate = useNavigate();

  const { language } = useLanguage();

  const [schedules, setSchedules] = useState([]);

  return (
    <CommitmentCompanyContainer>
      <div></div>
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
    </CommitmentCompanyContainer>
  );
}

export default CommitmentCompany;
