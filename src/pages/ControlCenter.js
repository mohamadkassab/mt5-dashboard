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
      {location.pathname === Menu[1].path ? <AdminsDataTable /> : <></>}
      {location.pathname === Menu[2].path ? <UsersDataTable /> : <></>}
      {location.pathname === MT5Menu[0].path ? <ConfigurationsDataTable /> : <></>}
      {location.pathname === MT5Menu[1].path ? <CoverageAccountsDataTable /> : <></>}
      {location.pathname === MT5Menu[2].path ? <CoverageServersDataTable /> : <></>}
      {location.pathname === MT5Menu[3].path ? <ManagersDataTable /> : <></>}
      {location.pathname === MT5Menu[4].path ? <PermissionsDataTable /> : <></>}
      {location.pathname === MT5Menu[5].path ? <RolesDataTable /> : <></>}
      {location.pathname === MT5Menu[6].path ? <TypesDataTable /> : <></>}

    </DefaultLayout>
  );
};

export default ControlCenter;
