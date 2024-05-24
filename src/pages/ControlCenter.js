import DefaultLayout from "../layouts/DefaultLayout";
import { Menu } from "../utils/constants/Constants";
import React from "react";
import AdminsDataTable from "../components/tables/AdminsDataTable";
import UsersDataTable from "../components/tables/UsersDataTable";
import ConfigurationsDataTable from "../components/tables/ConfigurationsDataTable"
import PermissionsDataTable from "../components/tables/PermissionsDataTable"
import RolesDataTable from "../components/tables/RolesDataTable";
import TypesDataTable from "../components/tables/TypesDataTable";
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
      {location.pathname === Menu[3].path ? <ConfigurationsDataTable /> : <></>}
      {location.pathname === Menu[4].path ? <PermissionsDataTable /> : <></>}
      {location.pathname === Menu[5].path ? <RolesDataTable /> : <></>}
      {location.pathname === Menu[6].path ? <TypesDataTable /> : <></>}
    </DefaultLayout>
  );
};

export default ControlCenter;
