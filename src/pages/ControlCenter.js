import DefaultLayout from "../layouts/DefaultLayout";
import { Menu, MT5 } from "../utils/constants/Constants";
import React from "react";
import AdminsDataTable from "../components/tables/AdminsDataTable";
import UsersDataTable from "../components/tables/UsersDataTable";
import ConfigurationsDataTable from "../components/tables/ConfigurationsDataTable"
import PermissionsDataTable from "../components/tables/PermissionsDataTable"
import RolesDataTable from "../components/tables/RolesDataTable";
import TypesDataTable from "../components/tables/TypesDataTable";
import SymbolsDataTable from "../components/tables/SymbolsDataTable";
import GroupsDataTable from "../components/tables/GroupsDataTable";
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
  };

  React.useEffect(() => {
    checkPathName();
  });
  return (
    <DefaultLayout componentName={pageName}>
      {location.pathname === Menu[1].path ? <AdminsDataTable /> : <></>}
      {location.pathname === Menu[2].path ? <UsersDataTable /> : <></>}
      {location.pathname === MT5[0].path ? <ConfigurationsDataTable /> : <></>}
      {location.pathname === MT5[1].path ? <GroupsDataTable /> : <></>}
      {location.pathname === MT5[2].path ? <PermissionsDataTable /> : <></>}
      {location.pathname === MT5[3].path ? <RolesDataTable /> : <></>}
      {location.pathname === MT5[4].path ? <SymbolsDataTable /> : <></>}
      {location.pathname === MT5[5].path ? <TypesDataTable /> : <></>}

    </DefaultLayout>
  );
};

export default ControlCenter;
