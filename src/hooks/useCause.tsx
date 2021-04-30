import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Cause {
  id: string;
  name: string;
  description: string;
  value: string;
  organization_id: string;
  organization_name: string;
}

type CauseInput = Omit<Cause, "id">;

interface Organization {
  id: string;
  name: string;
  email: string;
  whatsApp: string;
  city: string;
  uf: string;
}

type OrganizationInput = Omit<Organization, "id">;

interface CauseContextProps {
  organization: Organization;
  causes: Cause[];
  handleLogin: (id: string) => void;
  handleCreateOrganization: (organization: OrganizationInput) => void;
  handleCreateCause: (cause: CauseInput) => void;
  handleDeleteCause: (id: string) => void;
}
export const CauseContext = createContext({} as CauseContextProps);

export function CauseContextProvider({ children }) {
  const [organization, setOrganization] = useState();
  const [causes, setCauses] = useState([]);

  const router = useRouter();

  async function handleLogin(name: string) {
    const response = await api.get("organizations", {
      params: {
        name: name,
      },
    });

    console.log(response.data);

    setOrganization(response.data[0]);

    const causesResponse = await api.get<Cause[]>("causes", {
      params: {
        organization_id: response.data[0].id,
      },
    });

    setCauses(causesResponse.data);

    router.push(`/organization/`);
  }

  async function handleCreateOrganization(organization: OrganizationInput) {
    const response = await api.post("organizations", organization);

    setOrganization(response.data);
    console.log(response.data);
    setCauses([]);
    router.push(`/organization/`);
  }

  async function handleCreateCause(cause: CauseInput) {
    const { data } = await api.post("causes", cause);

    setCauses([...causes, data]);
  }

  async function handleDeleteCause(id: string) {
    const response = await api.delete(`causes/${id}`);

    const filterCauses = causes.filter((cause) => cause.id !== id);
    setCauses(filterCauses);
  }
  return (
    <CauseContext.Provider
      value={{
        organization,
        causes,
        handleLogin,
        handleCreateOrganization,
        handleCreateCause,
        handleDeleteCause,
      }}
    >
      {children}
    </CauseContext.Provider>
  );
}
export const useCause = () => {
  return useContext(CauseContext);
};
