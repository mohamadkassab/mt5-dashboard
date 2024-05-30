import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import Avatar from "@mui/material/Avatar";
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
];

export const MT5Menu = [
  {
    name: "Configurations",
    path: "/configurations",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>C</Avatar>
    ),
  },
  {
    name: "Coverage Servers",
    path: "/coverageServers",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>CS</Avatar>
    ),
  },
  {
    name: "Managers",
    path: "/managers",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>MA</Avatar>
    ),
  },
  {
    name: "Permissions",
    path: "/permissions",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>P</Avatar>
    ),
  },
  {
    name: "Roles",
    path: "/roles",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>R</Avatar>
    ),
  },
  {
    name: "Types",
    path: "/types",
    icon: (
      <Avatar sx={{ bgcolor: "#0000008a", width: 34, height: 34 }}>T</Avatar>
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

export const MT5SymbolDataColumns = [
  {
    dataField: "Symbol_ID",
    caption: "Symbol Id",
    alignment: "left",
    hideColumn: true,
  },
  {
    dataField: "Path",
    caption: "Path",
    alignment: "center",
  },
  {
    dataField: "ISIN",
    caption: "ISIN",
    alignment: "center",
  },
  {
    dataField: "CFI",
    caption: "CFI",
    alignment: "center",
  },

  {
    dataField: "Category",
    caption: "Category",
    alignment: "center",
  },

  {
    dataField: "Exchange",
    caption: "Exchange",
    alignment: "center",
  },
  {
    dataField: "Description",
    caption: "Description",
    alignment: "center",
  },

  {
    dataField: "International",
    caption: "International",
    alignment: "center",
  },

  {
    dataField: "Sector",
    caption: "Sector",
    alignment: "center",
  },

  {
    dataField: "Industry",
    caption: "Industry",
    alignment: "center",
  },
  {
    dataField: "Country",
    caption: "Country",
    alignment: "center",
  },
  {
    dataField: "Basis",
    caption: "Basis",
    alignment: "center",
  },
  {
    dataField: "Source",
    caption: "Source",
    alignment: "center",
  },
  {
    dataField: "Page",
    caption: "Page",
    alignment: "center",
  },
  {
    dataField: "CurrencyBase",
    caption: "Currency Base",
    alignment: "center",
  },
  {
    dataField: "CurrencyBaseDigits",
    caption: "Currency Base Digits",
    alignment: "center",
  },
  {
    dataField: "CurrencyProfit",
    caption: "Currency Profit",
    alignment: "center",
  },
  {
    dataField: "CurrencyProfitDigits",
    caption: "Currency Profit Digits",
    alignment: "center",
  },
  {
    dataField: "CurrencyMargin",
    caption: "Currency Margin",
    alignment: "center",
  },
  {
    dataField: "CurrencyMarginDigits",
    caption: "Currency Margin Digits",
    alignment: "center",
  },
  {
    dataField: "Color",
    caption: "Color",
    alignment: "center",
  },
  {
    dataField: "ColorBackground",
    caption: "Color Background",
    alignment: "center",
  },
  {
    dataField: "Digits",
    caption: "Digits",
    alignment: "center",
  },
  {
    dataField: "Point",
    caption: "Point",
    alignment: "center",
  },
  {
    dataField: "Multiply",
    caption: "Multiply",
    alignment: "center",
  },
  {
    dataField: "TickFlags",
    caption: "TickFlags",
    alignment: "center",
  },
  {
    dataField: "TickBookDepth",
    caption: "TickBookDepth",
    alignment: "center",
  },
  {
    dataField: "TickChartMode",
    caption: "TickChartMode",
    alignment: "center",
  },
  {
    dataField: "SubscriptionsDelay",
    caption: "SubscriptionsDelay",
    alignment: "center",
  },
  {
    dataField: "FilterSoftTicks",
    caption: "FilterSoftTicks",
    alignment: "center",
  },
  {
    dataField: "FilterHard",
    caption: "FilterHard",
    alignment: "center",
  },
  {
    dataField: "FilterHardTicks",
    caption: "FilterHardTicks",
    alignment: "center",
  },
  {
    dataField: "FilterDiscard",
    caption: "FilterDiscard",
    alignment: "center",
  },
  {
    dataField: "FilterSpreadMax",
    caption: "FilterSpreadMax",
    alignment: "center",
  },
  {
    dataField: "FilterSpreadMin",
    caption: "FilterSpreadMin",
    alignment: "center",
  },

  {
    dataField: "FilterGap",
    caption: "FilterGap",
    alignment: "center",
  },
  {
    dataField: "FilterGapTicks",
    caption: "FilterGapTicks",
    alignment: "center",
  },
  {
    dataField: "TradeMode",
    caption: "TradeMode",
    alignment: "center",
  },
  {
    dataField: "TradeFlags",
    caption: "TradeFlags",
    alignment: "center",
  },
  {
    dataField: "CalcMode",
    caption: "CalcMode",
    alignment: "center",
  },
  {
    dataField: "ExecMode",
    caption: "ExecMode",
    alignment: "center",
  },
  {
    dataField: "GTCMode",
    caption: "GTCMode",
    alignment: "center",
  },
  {
    dataField: "FillFlags",
    caption: "FillFlags",
    alignment: "center",
  },
  {
    dataField: "ExpirFlags",
    caption: "ExpirFlags",
    alignment: "center",
  },
  {
    dataField: "OrderFlags",
    caption: "OrderFlags",
    alignment: "center",
  },
  {
    dataField: "Spread",
    caption: "Spread",
    alignment: "center",
  },
  {
    dataField: "SpreadBalance",
    caption: "SpreadBalance",
    alignment: "center",
  },
  {
    dataField: "SpreadDiff",
    caption: "SpreadDiff",
    alignment: "center",
  },
  {
    dataField: "SpreadDiffBalance",
    caption: "SpreadDiffBalance",
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

  {
    dataField: "StopsLevel",
    caption: "StopsLevel",
    alignment: "center",
  },

  {
    dataField: "FreezeLevel",
    caption: "FreezeLevel",
    alignment: "center",
  },

  {
    dataField: "QuotesTimeout",
    caption: "QuotesTimeout",
    alignment: "center",
  },

  {
    dataField: "VolumeMinExt",
    caption: "VolumeMinExt",
    alignment: "center",
  },
  {
    dataField: "VolumeMaxExt",
    caption: "VolumeMaxExt",
    alignment: "center",
  },
  {
    dataField: "VolumeStepExt",
    caption: "VolumeStepExt",
    alignment: "center",
  },
  {
    dataField: "VolumeLimitExt",
    caption: "VolumeLimitExt",
    alignment: "center",
  },
  {
    dataField: "MarginFlags",
    caption: "MarginFlags",
    alignment: "center",
  },
  {
    dataField: "MarginInitial",
    caption: "MarginInitial",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenance",
    caption: "MarginMaintenance",
    alignment: "center",
  },
  {
    dataField: "MarginInitialBuy",
    caption: "MarginInitialBuy",
    alignment: "center",
  },
  {
    dataField: "MarginInitialSell",
    caption: "MarginInitialSell",
    alignment: "center",
  },
  {
    dataField: "MarginInitialBuyLimit",
    caption: "MarginInitialBuyLimit",
    alignment: "center",
  },
  {
    dataField: "MarginInitialSellLimit",
    caption: "MarginInitialSellLimit",
    alignment: "center",
  },
  {
    dataField: "MarginInitialBuyStop",
    caption: "MarginInitialBuyStop",
    alignment: "center",
  },
  {
    dataField: "MarginInitialSellStop",
    caption: "MarginInitialSellStop",
    alignment: "center",
  },
  {
    dataField: "MarginInitialBuyStopLimit",
    caption: "MarginInitialBuyStopLimit",
    alignment: "center",
  },
  {
    dataField: "MarginInitialSellStopLimit",
    caption: "MarginInitialSellStopLimit",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceBuy",
    caption: "MarginMaintenanceBuy",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceSell",
    caption: "MarginMaintenanceSell",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceBuyLimit",
    caption: "MarginMaintenanceBuyLimit",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceSellLimit",
    caption: "MarginMaintenanceSellLimit",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceBuyStop",
    caption: "MarginMaintenanceBuyStop",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceSellStop",
    caption: "MarginMaintenanceSellStop",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceBuyStopLimit",
    caption: "MarginMaintenanceBuyStopLimit",
    alignment: "center",
  },
  {
    dataField: "MarginMaintenanceSellStopLimit",
    caption: "MarginMaintenanceSellStopLimit",
    alignment: "center",
  },
  {
    dataField: "MarginRateLiquidity",
    caption: "MarginRateLiquidity",
    alignment: "center",
  },
  {
    dataField: "MarginHedged",
    caption: "MarginHedged",
    alignment: "center",
  },
  {
    dataField: "MarginRateCurrency",
    caption: "MarginRateCurrency",
    alignment: "center",
  },
  {
    dataField: "SwapMode",
    caption: "SwapMode",
    alignment: "center",
  },
  {
    dataField: "SwapLong",
    caption: "SwapLong",
    alignment: "center",
  },
  {
    dataField: "SwapShort",
    caption: "SwapShort",
    alignment: "center",
  },
  {
    dataField: "SwapFlags",
    caption: "SwapFlags",
    alignment: "center",
  },
  {
    dataField: "SwapYearDay",
    caption: "SwapYearDay",
    alignment: "center",
  },
  {
    dataField: "SwapRateSunday",
    caption: "SwapRateSunday",
    alignment: "center",
  },
  {
    dataField: "SwapRateMonday",
    caption: "SwapRateMonday",
    alignment: "center",
  },
  {
    dataField: "SwapRateTuesday",
    caption: "SwapRateTuesday",
    alignment: "center",
  },
  {
    dataField: "SwapRateWednesday",
    caption: "SwapRateWednesday",
    alignment: "center",
  },
  {
    dataField: "SwapRateThursday",
    caption: "SwapRateThursday",
    alignment: "center",
  },
  {
    dataField: "SwapRateFriday",
    caption: "SwapRateFriday",
    alignment: "center",
  },
  {
    dataField: "SwapRateSaturday",
    caption: "SwapRateSaturday",
    alignment: "center",
  },
  {
    dataField: "REFlags",
    caption: "REFlags",
    alignment: "center",
  },
  {
    dataField: "RETimeout",
    caption: "RETimeout",
    alignment: "center",
  },
  {
    dataField: "IECheckMode",
    caption: "IECheckMode",
    alignment: "center",
  },
  {
    dataField: "IETimeout",
    caption: "IETimeout",
    alignment: "center",
  },
  {
    dataField: "IESlipProfit",
    caption: "IESlipProfit",
    alignment: "center",
  },
  {
    dataField: "IESlipLosing",
    caption: "IESlipLosing",
    alignment: "center",
  },
  {
    dataField: "IEVolumeMaxExt",
    caption: "IEVolumeMaxExt",
    alignment: "center",
  },
  {
    dataField: "PriceSettle",
    caption: "PriceSettle",
    alignment: "center",
  },
  {
    dataField: "PriceLimitMax",
    caption: "PriceLimitMax",
    alignment: "center",
  },
  {
    dataField: "PriceLimitMin",
    caption: "PriceLimitMin",
    alignment: "center",
  },
  {
    dataField: "PriceStrike",
    caption: "PriceStrike",
    alignment: "center",
  },
  {
    dataField: "OptionMode",
    caption: "OptionMode",
    alignment: "center",
  },
  {
    dataField: "FaceValue",
    caption: "FaceValue",
    alignment: "center",
  },
  {
    dataField: "AccruedInterest",
    caption: "AccruedInterest",
    alignment: "center",
  },
  {
    dataField: "SpliceType",
    caption: "SpliceType",
    alignment: "center",
  },
  {
    dataField: "SpliceTimeType",
    caption: "SpliceTimeType",
    alignment: "center",
  },
  {
    dataField: "SpliceTimeDays",
    caption: "SpliceTimeDays",
    alignment: "center",
  },
  {
    dataField: "VolumeMin",
    caption: "VolumeMin",
    alignment: "center",
  },
  {
    dataField: "VolumeMax",
    caption: "VolumeMax",
    alignment: "center",
  },
  {
    dataField: "VolumeStep",
    caption: "VolumeStep",
    alignment: "center",
  },
  {
    dataField: "VolumeLimit",
    caption: "VolumeLimit",
    alignment: "center",
  },
  {
    dataField: "IEVolumeMax",
    caption: "IEVolumeMax",
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
    caption: "Server id",
    alignment: "center",
  },
  {
    dataField: "password",
    caption: "Password",
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
];
