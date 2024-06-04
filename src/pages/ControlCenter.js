import DefaultLayout from "../layouts/DefaultLayout";
import { Menu, MT5Menu } from "../utils/constants/Constants";
import React from "react";
import AdminsDataTable from "../components/tables/AdminsDataTable";
import UsersDataTable from "../components/tables/UsersDataTable";
import ConfigurationsDataTable from "../components/tables/ConfigurationsDataTable";
import PermissionsDataTable from "../components/tables/PermissionsDataTable";
import RolesDataTable from "../components/tables/RolesDataTable";
import TypesDataTable from "../components/tables/TypesDataTable";
import ManagersDataTable from '../components/tables/ManagersDataTable';
import CoverageServersDataTable from "../components/tables/CoverageServersDataTable";
import CoverageAccountsDataTable from "../components/tables/CoverageAccountsDataTable";
import SymbolsDataTable from "../components/tables/SymbolsDataTable";
import { useLocation } from "react-router-dom";

const ControlCenter = () => {
  const location = useLocation();
  const [pageName, setPageName] = React.useState("");

  const checkPathName = () => {
    Menu.map((page) => {
      if (location.pathname === page.path) {
        setPageName(page.name);
      }
    });
    MT5Menu.map((page) => {
      if (location.pathname === page.path) {
        setPageName(page.name);
      }
    });
  };

  React.useEffect(() => {
    checkPathName();
  });
  return (
    <DefaultLayout componentName={pageName}>
      {location.pathname === "/admins" ? <AdminsDataTable /> : <></>}
      {location.pathname === "/users" ? <UsersDataTable /> : <></>}
      {location.pathname === "/mt5Configurations" ? <ConfigurationsDataTable /> : <></>}
      {location.pathname === "/managers" ? <ManagersDataTable /> : <></>}
      {location.pathname === "/coverageServers" ? <CoverageServersDataTable /> : <></>}
      {location.pathname === "/coverageAccounts" ? <CoverageAccountsDataTable /> : <></>}
      {location.pathname === "/permissions" ? <PermissionsDataTable /> : <></>}
      {location.pathname === "/roles" ? <RolesDataTable /> : <></>}
      {location.pathname === "/types" ? <TypesDataTable /> : <></>}
      {location.pathname === "/symbols" ? <SymbolsDataTable /> : <></>}
    </DefaultLayout>
  );
};

export default ControlCenter;
