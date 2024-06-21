import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppContainer } from "./styles";

import Header from "../Components/Header";
<<<<<<< HEAD

import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";

import Profile from "../Page/Profile";

import ScheduleUser from "../Page/ScheduleUser";
import ScheduleCommitmentUser from "../Page/ScheduleCommitmentUser";
import CommitmentUser from "../Page/CommitmentUser";

import ScheduleCompany from "../Page/ScheduleCompany";
import CommitmentCompany from "../Page/CommitmentCompany";

import { EntityProvider } from "../Context/Entity/EntityContext";
=======
import Sidebar from "../Components/Sidebar";

import Home from "../Page/Home";
import Login from "../Page/Login";
>>>>>>> 6eae61b608659a718ffe202fd987891a53699eec

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
<<<<<<< HEAD
        <EntityProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/commitments-user" element={<CommitmentUser />} />
            <Route path="/schedule-user" element={<ScheduleUser />} />
            <Route
              path="/schedule-user/:id"
              element={<ScheduleCommitmentUser />}
            />

            <Route path="/schedule-company" element={<ScheduleCompany />} />
            <Route path="/commitment-company" element={<CommitmentCompany />} />
          </Routes>
        </EntityProvider>
=======
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
>>>>>>> 6eae61b608659a718ffe202fd987891a53699eec
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
