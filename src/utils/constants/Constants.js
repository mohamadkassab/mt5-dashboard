import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import AvatarMenu from "../../components/common/AvatarMenu";
import { booleanCellRender } from "../../components/cellRendering/CellRendering";

// Common
export const ATFXTOKEN = "ATFXTOKEN";
export const GLOBAL_REQUEST_TIMEOUT = 10000;
export const ROWS_PER_PAGE = [10, 15, 30];

// AUTH
export const API_ADMIN_LOGIN = "/admins/login/";

// ADMIN
export const API_ADMIN = "/admins/admins/";
export const API_ADMIN_EDIT = "/admins/admin/";

// USER
export const API_USER = "/admins/users/";
export const API_USER_EDIT = "/admins/user/";

// ROLE
export const API_ROLE = "/admins/roles/";

// TYPE
export const API_TYPE = "/admins/user_types/";

// CONFIGURATION
export const API_CONFIGURATION = "/admins/configurations/";

// PERMISSION
export const API_PERMISSION = "/admins/permissions/";

// MANAGER
export const API_MANAGER = "/admins/MT5ManagersAdmin/";

// MT5MANAGER
export const API_MT5MANAGER = "/admins/MT5AllManagers/";

// COVERAGESERVER
export const API_COVERAGESERVER = "/admins/MT5CoverageServerAdmin/";

// COVERAGEACCOUNT
export const API_COVERAGEACCOUNT = "/admins/MT5CoverageAdmin/";

// MT5SYMBOL
export const API_MT5SYMBOL = "/admins/MT5Symbols/";

// SYMBOL
export const API_SYMBOL = "/admins/MT5SymbolsConfigurations/";

// SUFFIX
export const API_SUFFIX = "/admins/MT5SymbolsSuffixes/";

// SYMBOL CONFIGURATION
export const API_SYMBOLCONFIGURATION = "/admins/MT5SymbolsConfigurationsAndSuffixes/";

// API_401_RES
export const API_401_RES = "Request failed with status code 401";

export const Menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <GridViewRoundedIcon fontSize="large"/>,

  },
  {
    name: "Admins",
    path: "/admins",
    icon: <AssignmentIndRoundedIcon fontSize="large"/>,
  },
  {
    name: "Users",
    path: "/users",
    icon: <PeopleAltRoundedIcon fontSize="large"/>,
  },
];

export const MT5Menu = [
  {
    name: "MT5 Configurations",
    path: "/mt5Configurations",
    icon: (
      <AvatarMenu>C</AvatarMenu>
    ),
  },
  {
    name: "Managers",
    path: "/managers",
    icon: (
      <AvatarMenu >M</AvatarMenu>
    ),

  },
  {
    name: "Symbols",
    path: "/symbols",
    icon: (
      <AvatarMenu >S</AvatarMenu>
    ),
    dividerBottom: true,
  },
  {
    name: "Coverage Servers",
    path: "/coverageServers",
    icon: (
      <AvatarMenu >CS</AvatarMenu>
    ),
  },
  {
    name: "Coverage Accounts",
    path: "/coverageAccounts",
    icon: (
      <AvatarMenu >CA</AvatarMenu>
    ),
    dividerBottom: true,
  },
  {
    name: "Permissions",
    path: "/permissions",
    icon: (
      <AvatarMenu >P</AvatarMenu>
    ),
  },
  {
    name: "Roles",
    path: "/roles",
    icon: (
      <AvatarMenu >R</AvatarMenu>
    ),
  },
  {
    name: "Types",
    path: "/types",
    icon: (
      <AvatarMenu >T</AvatarMenu>
    ),
  },
];

export const AdminDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "email",
    caption: "Email",
    alignment: "center",
  },

  {
    dataField: "role_id",
    caption: "Role Id",
    alignment: "center",
    hideColumn: true,
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
    cellRender: booleanCellRender,
  },

  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
    hideColumn: true,
  },
];

export const UserDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "email",
    caption: "Email",
    alignment: "center",
  },

  {
    dataField: "type_id",
    caption: "Type Id",
    alignment: "center",
    hideColumn: true,
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
    cellRender: booleanCellRender,
  },

  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
    hideColumn: true,
  },
];

export const ConfigurationDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "center",
    hideColumn: true,
  },
  {
    dataField: "db_host",
    caption: "Db Host",
    alignment: "center",
  },
  {
    dataField: "db_username",
    caption: "Db Username",
    alignment: "center",
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
    caption: "Mt5 Web Password",
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
    cellRender: booleanCellRender,
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
    hideColumn: true,
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
    hideColumn: true,
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
    hideColumn: true,
  },
  {
    dataField: "type_name",
    caption: "Type Name",
    alignment: "center",
  },
];

export const MT5GroupDataColumns = [
  {
    dataField: "Group_ID",
    caption: "Group ID",
    alignment: "left",
    hideColumn: true,
},
{
    dataField: "Timestamp",
    caption: "Timestamp",
    alignment: "center",
},
{
    dataField: "Server",
    caption: "Server",
    alignment: "center",
},
{
    dataField: "PermissionsFlags",
    caption: "Permissions Flags",
    alignment: "center",
},
{
    dataField: "AuthMode",
    caption: "Auth Mode",
    alignment: "center",
},
{
    dataField: "AuthPasswordMin",
    caption: "Auth Password Min",
    alignment: "center",
},
{
    dataField: "AuthOTPMode",
    caption: "Auth OTP Mode",
    alignment: "center",
},
{
    dataField: "Company",
    caption: "Company",
    alignment: "center",
},
{
    dataField: "CompanyPage",
    caption: "Company Page",
    alignment: "center",
},
{
    dataField: "CompanyEmail",
    caption: "Company Email",
    alignment: "center",
},
{
    dataField: "CompanySupportPage",
    caption: "Company Support Page",
    alignment: "center",
},
{
    dataField: "CompanySupportEmail",
    caption: "Company Support Email",
    alignment: "center",
},
{
    dataField: "CompanyCatalog",
    caption: "Company Catalog",
    alignment: "center",
},
{
    dataField: "CompanyDepositURL",
    caption: "Company Deposit URL",
    alignment: "center",
},
{
    dataField: "CompanyWithdrawalURL",
    caption: "Company Withdrawal URL",
    alignment: "center",
},
{
    dataField: "Currency",
    caption: "Currency",
    alignment: "center",
},
{
    dataField: "CurrencyDigits",
    caption: "Currency Digits",
    alignment: "center",
},
{
    dataField: "ReportsMode",
    caption: "Reports Mode",
    alignment: "center",
},
{
    dataField: "ReportsEmail",
    caption: "Reports Email",
    alignment: "center",
},
{
    dataField: "ReportsFlags",
    caption: "Reports Flags",
    alignment: "center",
},
{
    dataField: "NewsMode",
    caption: "News Mode",
    alignment: "center",
},
{
    dataField: "NewsCategory",
    caption: "News Category",
    alignment: "center",
},
{
    dataField: "MailMode",
    caption: "Mail Mode",
    alignment: "center",
},
{
    dataField: "TradeFlags",
    caption: "Trade Flags",
    alignment: "center",
},
{
    dataField: "TransferMode",
    caption: "Transfer Mode",
    alignment: "center",
},
{
    dataField: "TradeInterestrate",
    caption: "Trade Interest Rate",
    alignment: "center",
},
{
    dataField: "TradeVirtualCredit",
    caption: "Trade Virtual Credit",
    alignment: "center",
},
{
    dataField: "MarginMode",
    caption: "Margin Mode",
    alignment: "center",
},
{
    dataField: "MarginSOMode",
    caption: "Margin SO Mode",
    alignment: "center",
},
{
    dataField: "MarginFreeMode",
    caption: "Margin Free Mode",
    alignment: "center",
},
{
    dataField: "MarginCall",
    caption: "Margin Call",
    alignment: "center",
},
{
    dataField: "MarginStopOut",
    caption: "Margin Stop Out",
    alignment: "center",
},
{
    dataField: "MarginLeverageProfile",
    caption: "Margin Leverage Profile",
    alignment: "center",
},
{
    dataField: "MarginFreeProfitMode",
    caption: "Margin Free Profit Mode",
    alignment: "center",
},
{
    dataField: "DemoLeverage",
    caption: "Demo Leverage",
    alignment: "center",
},
{
    dataField: "DemoDeposit",
    caption: "Demo Deposit",
    alignment: "center",
},
{
    dataField: "DemoTradesClean",
    caption: "Demo Trades Clean",
    alignment: "center",
},
{
    dataField: "LimitHistory",
    caption: "Limit History",
    alignment: "center",
},
{
    dataField: "LimitOrders",
    caption: "Limit Orders",
    alignment: "center",
},
{
    dataField: "LimitSymbols",
    caption: "Limit Symbols",
    alignment: "center",
},
{
    dataField: "LimitPositions",
    caption: "Limit Positions",
    alignment: "center",
},
{
    dataField: "LimitPositionsVolume",
    caption: "Limit Positions Volume",
    alignment: "center",
},

];

export const ManagerDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "name",
    caption: "Name",
    alignment: "center",
  },
  {
    dataField: "login",
    caption: "Login",
    alignment: "center",
  },
  {
    dataField: "server_id",
    caption: "Server Name",
    alignment: "center",
    hideColumn: true,
  },
  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
  },
  {
    dataField: "server_name",
    caption: "Server Name",
    alignment: "center",
  },

  
];

export const CoverageServerDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "name",
    caption: "Name",
    alignment: "center",
  },
  {
    dataField: "host",
    caption: "Host",
    alignment: "center",
  },
  {
    dataField: "port",
    caption: "port",
    alignment: "center",
  },
];

export const CoverageAccountDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "coverage_server_id",
    caption: "Coverage Server",
    alignment: "center",
    hideColumn: true,
  },
  {
    dataField: "name",
    caption: "Name",
    alignment: "center",
  },
  {
    dataField: "login",
    caption: "Login",
    alignment: "center",
  },
  {
    dataField: "password",
    caption: "Password",
    alignment: "center",
  },
  {
    dataField: "path",
    caption: "Path",
    alignment: "center",
  },
];

export const MT5SymbolDataColumns = [
  {
    dataField: "Symbol_ID",
    caption: "Symbol Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "Symbol",
    caption: "Symbol",
    alignment: "center",
  },
  {
    dataField: "Path",
    caption: "Path",
    alignment: "center",
  },
  {
    dataField: "Digits",
    caption: "Digits",
    alignment: "center",
  },

  {
    dataField: "CalcMode",
    caption: "CalcMode",
    alignment: "center",
  },

  {
    dataField: "TickValue",
    caption: "TickValue",
    alignment: "center",
  },
  {
    dataField: "TickSize",
    caption: "TickSize",
    alignment: "center",
  },

  {
    dataField: "ContractSize",
    caption: "ContractSize",
    alignment: "center",
  },
];

export const SymbolDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "name",
    caption: "Name",
    alignment: "center",
  },
  {
    dataField: "symbol",
    caption: "Symbol",
    alignment: "center",
  },
  {
    dataField: "multiplier",
    caption: "Multiplier",
    alignment: "center",
    hideColumn: true,
  },
  {
    dataField: "server_id",
    caption: "Server Id",
    alignment: "center",
    hideColumn: true,
  },
  {
    dataField: "server_name",
    caption: "Server Name",
    alignment: "center",

  },
];

export const SuffixDataColumns = [
  {
    dataField: "id",
    caption: "Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "suffix",
    caption: "Suffix",
    alignment: "center",
  },
  {
    dataField: "multiplier",
    caption: "Multiplier",
    alignment: "center",
  },
  {
    dataField: "config_id",
    caption: "Config Id",
    alignment: "center",
  },
];

