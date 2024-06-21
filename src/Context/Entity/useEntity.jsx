import { useContext } from "react";
import { EntityContext } from "./EntityContext";

const useEntity = () => useContext(EntityContext);

export default useEntity;
