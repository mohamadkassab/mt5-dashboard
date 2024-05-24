import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import Avatar from "@mui/material/Avatar";

// Common
export const ATFXTOKEN = "ATFXTOKEN";
export const GLOBAL_REQUEST_TIMEOUT = 10000;
export const ROWS_PER_PAGE = [10, 15, 30];

// AUTH
export const API_ADMIN_LOGIN = "/admins/login/"; 

// ADMINS
export const API_ADMIN = "/admins/admins/";
export const API_ADMIN_EDIT = "/admins/admin/"; 

// USERS
export const API_USER = "/admins/users/"; 
export const API_USER_EDIT = "/admins/user/"; 

// ROLES
export const API_ROLE = "/admins/roles/"; 

// TYPES
export const API_TYPE = "/admins/user_types/";

// CONFIGURATIONS
export const API_CONFIGURATION = "/admins/configurations/";

// PERMISSIONS
export const API_PERMISSIONS = "/admins/permissions/";



export const Menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <GridViewRoundedIcon />,
  },
  {
    name: "Admins",
    path: "/admins",
    icon: <AssignmentIndRoundedIcon />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <PeopleAltRoundedIcon />,
  },
  {
    name: "Configurations",
    path: "/configurations",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 24, height: 24 }}>C</Avatar>
    ),
  },
  {
    name: "Permissions",
    path: "/permissions",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 24, height: 24 }}>P</Avatar>
    ),
  },
  {
    name: "Roles",
    path: "/roles",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 24, height: 24 }}>R</Avatar>
    ),
  },
  {
    name: "Types",
    path: "/types",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 24, height: 24 }}>T</Avatar>
    ),
  },
];

export const AdminDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
  },
  {
    dataField: "email",
    caption: "Email",
    alignment: "left",
  },

  {
    dataField: "role_id",
    caption: "Role Id",
    alignment: "center",
  },

  {
    dataField: "role_name",
    caption: "Role",
    alignment: "center",
  },

  {
    dataField: "is_active",
    caption: "Is Active",
    alignment: "center",
  },

  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
  },
];

export const UserDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
  },
  {
    dataField: "email",
    caption: "Email",
    alignment: "left",
  },

  {
    dataField: "type_id",
    caption: "Type Id",
    alignment: "center",
  },

  {
    dataField: "type_name",
    caption: "Type",
    alignment: "center",
  },

  {
    dataField: "is_active",
    caption: "Is Active",
    alignment: "center",
  },

  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
  },
];

export const ConfigurationDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "center",
  },
  {
    dataField: "db_host",
    caption: "Db Host",
    alignment: "left",
  },
  {
    dataField: "db_username",
    caption: "Db Username",
    alignment: "left",
  },

  {
    dataField: "db_password",
    caption: "Db Password",
    alignment: "center",
  },

  {
    dataField: "db_port",
    caption: "Db Port",
    alignment: "center",
  },

  {
    dataField: "db_name",
    caption: "Db Name",
    alignment: "center",
  },

  {
    dataField: "mt5_login",
    caption: "Mt5 Login",
    alignment: "center",
  },
  {
    dataField: "mt5_host",
    caption: "Mt5 Host",
    alignment: "center",
  },
  {
    dataField: "mt5_port",
    caption: "Mt5 Port",
    alignment: "center",
  },
  {
    dataField: "mt5_password",
    caption: "Mt5 Password",
    alignment: "center",
  },
  {
    dataField: "server_name",
    caption: "Server Name",
    alignment: "center",
  },
  {
    dataField: "is_active",
    caption: "Is Active",
    alignment: "center",
  },
  {
    dataField: "db_type",
    caption: "Db Type",
    alignment: "center",
  },
];

export const PermissionDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
  },
  {
    dataField: "permission_code",
    caption: "Permission Code",
    alignment: "center",
  },

  {
    dataField: "permission",
    caption: "Permission",
    alignment: "center",
  },
];

export const RoleDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
  },
  {
    dataField: "role_name",
    caption: "Role Name",
    alignment: "center",
  },

];

export const TypeDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
  },
  {
    dataField: "type_name",
    caption: "Type Name",
    alignment: "center",
  },

];

