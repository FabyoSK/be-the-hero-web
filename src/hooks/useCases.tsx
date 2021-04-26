import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Case {
  name: string;
  description: string;
  value: string;
  organization_id: string;
}
interface Organization {
  id: string;
  name: string;
  email: string;
  whatsApp: string;
  city: string;
  uf: string;
}
interface CaseContextProps {
  organization: Organization;
  cases: Case[];
  handleLogin: () => void;
  handleCreateOrganization: () => void;
  handleCreateCase: (c: Case) => void;
}
export const CaseContext = createContext({} as CaseContextProps);

export function CaseContextProvider({ children }) {
  const [organization, setOrganization] = useState();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    api
      .get("organizations/fsk")
      .then((response) => setOrganization(response.data));

    api.get("cases").then((response) => setCases(response.data));
  }, []);

  function handleLogin() {}

  function handleCreateOrganization() {}

  async function handleCreateCase(c: Case) {
    const { data } = await api.post("cases", c);

    setCases([...cases, data]);
  }

  return (
    <CaseContext.Provider
      value={{
        organization,
        cases,
        handleLogin,
        handleCreateOrganization,
        handleCreateCase,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
}
export const useCase = () => {
  return useContext(CaseContext);
};
