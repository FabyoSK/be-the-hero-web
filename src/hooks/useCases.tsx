import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Case {
  id: string;
  name: string;
  description: string;
  value: string;
  organization_id: string;
}
type CaseInput = Omit<Case, "id">;
interface Organization {
  id: string;
  name: string;
  email: string;
  whatsApp: string;
  city: string;
  uf: string;
}
type OrganizationInput = Omit<Organization, "id">;
interface CaseContextProps {
  organization: Organization;
  cases: Case[];
  handleLogin: (id: string) => void;
  handleCreateOrganization: (organization: OrganizationInput) => void;
  handleCreateCase: (c: CaseInput) => void;
  handleDeleteCase: (id: string) => void;
}
export const CaseContext = createContext({} as CaseContextProps);

export function CaseContextProvider({ children }) {
  const [organization, setOrganization] = useState();
  const [cases, setCases] = useState([]);

  const router = useRouter();

  async function handleLogin(name: string) {
    const response = await api.get("organizations", {
      params: {
        name: name,
      },
    });

    console.log(response.data);

    setOrganization(response.data[0]);

    const casesResponse = await api.get<Case[]>("cases", {
      params: {
        organization_id: response.data.id,
      },
    });

    setCases(casesResponse.data);

    router.push(`/organization/`);
  }

  async function handleCreateOrganization(organization: OrganizationInput) {
    const response = await api.post("organizations", organization);

    setOrganization(response.data);
    console.log(response.data);

    router.push(`/organization/`);
  }

  async function handleCreateCase(c: CaseInput) {
    const { data } = await api.post("cases", c);

    setCases([...cases, data]);
  }

  async function handleDeleteCase(id: string) {
    const response = await api.delete(`cases/${id}`);

    const filterCases = cases.filter((c) => c.id !== id);
    setCases(filterCases);
  }
  return (
    <CaseContext.Provider
      value={{
        organization,
        cases,
        handleLogin,
        handleCreateOrganization,
        handleCreateCase,
        handleDeleteCase,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
}
export const useCase = () => {
  return useContext(CaseContext);
};
