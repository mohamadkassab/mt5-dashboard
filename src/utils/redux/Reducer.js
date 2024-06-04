import {

  ISAUTHENTICATED_REQUEST,
  ISAUTHENTICATED_FAILURE,
  ISAUTHENTICATED_SUCCESS,
  EL_REQUEST,
  EL_SUCCESS,
  EL_FAILURE,
  SEL_REQUEST,
  SEL_SUCCESS,
  SEL_FAILURE,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_ROLE_REQUEST,
  GET_ROLE_SUCCESS,
  GET_ROLE_FAILURE,
  GET_TYPE_REQUEST,
  GET_TYPE_SUCCESS,
  GET_TYPE_FAILURE,
  GET_CONFIGURATION_REQUEST,
  GET_CONFIGURATION_SUCCESS,
  GET_CONFIGURATION_FAILURE,
  GET_PERMISSION_REQUEST,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAILURE,
  GET_MANAGER_REQUEST,
  GET_MANAGER_SUCCESS,
  GET_MANAGER_FAILURE,
  GET_MT5MANAGER_REQUEST,
  GET_MT5MANAGER_SUCCESS,
  GET_MT5MANAGER_FAILURE,
  GET_COVERAGESERVER_REQUEST,
  GET_COVERAGESERVER_SUCCESS,
  GET_COVERAGESERVER_FAILURE,
  GET_COVERAGEACCOUNT_REQUEST,
  GET_COVERAGEACCOUNT_SUCCESS,
  GET_COVERAGEACCOUNT_FAILURE,
  GET_MT5SYMBOL_REQUEST,
  GET_MT5SYMBOL_SUCCESS,
  GET_MT5SYMBOL_FAILURE,
  GET_SYMBOL_REQUEST,
  GET_SYMBOL_SUCCESS,
  GET_SYMBOL_FAILURE,
  GET_SUFFIX_REQUEST,
  GET_SUFFIX_SUCCESS,
  GET_SUFFIX_FAILURE,
} from "./ActionTypes";
import produce from "immer";
import { ATFXTOKEN } from "../constants/Constants";

const initialState = {
  admins: [],
  users: [],
  roles: [],
  types: [],
  permissions: [],
  configurations: [],
  managers: [],
  mt5Managers: [],
  coverageServers:[],
  coverageAccounts:[],
  mt5Symbols:[],
  symbols:[],
  suffixes:[],
  isAuthenticated: localStorage.getItem(ATFXTOKEN) || false,
  blur: false,
  loading: false,
  success: false,
  error: false,
};

const reducer = produce((draft, action) => {

  switch (action.type) {
    // GLOBAL
    case EL_REQUEST:
      draft.error = false;
      draft.loading = true;
      break;
    case EL_SUCCESS:
      draft.error = false;
      draft.loading = false;
      break;
    case EL_FAILURE:
      draft.error = true;
      draft.loading = false;
      break;

    case SEL_REQUEST:
      draft.success = false;
      draft.error = false;
      draft.loading = true;
      break;
    case SEL_SUCCESS:
      draft.success = true;
      draft.error = false;
      draft.loading = false;
      break;
    case SEL_FAILURE:
      draft.success = false;
      draft.error = true;
      draft.loading = false;
      break;

    case ISAUTHENTICATED_REQUEST:
      draft.isAuthenticated = false;
      break;
    case ISAUTHENTICATED_SUCCESS:
      draft.isAuthenticated = true;
      break;
    case ISAUTHENTICATED_FAILURE:
      draft.isAuthenticated = false;
      break;

    // ADMIN
    case GET_ADMIN_REQUEST:
      draft.admins = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_ADMIN_SUCCESS:
      draft.admins = action.payload.map((admin) => admin);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_ADMIN_FAILURE:
      draft.admins = [];
      draft.error = true;
      draft.loading = false;
      break;
   
    // USER
    case GET_USER_REQUEST:
      draft.users = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_USER_SUCCESS:
      draft.users = action.payload.map((user) => user);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_USER_FAILURE:
      draft.users = [];
      draft.error = true;
      draft.loading = false;
      break;

    // ROLE
    case GET_ROLE_REQUEST:
      draft.roles = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_ROLE_SUCCESS:
      draft.roles = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_ROLE_FAILURE:
      draft.roles = [];
      draft.error = true;
      draft.loading = false;
      break;

    // TYPE
    case GET_TYPE_REQUEST:
      draft.types = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_TYPE_SUCCESS:
      draft.types = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_TYPE_FAILURE:
      draft.types = [];
      draft.error = true;
      draft.loading = false;
      break;

    // CONFIGURATIONS
    case GET_CONFIGURATION_REQUEST:
      draft.configurations = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_CONFIGURATION_SUCCESS:
      draft.configurations = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_CONFIGURATION_FAILURE:
      draft.configurations = [];
      draft.error = true;
      draft.loading = false;
      break;

    // PERMISSIONS
    case GET_PERMISSION_REQUEST:
      draft.permissions = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_PERMISSION_SUCCESS:
      draft.permissions = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_PERMISSION_FAILURE:
      draft.permissions = [];
      draft.error = true;
      draft.loading = false;
      break;    

     // MANAGERS
    case GET_MANAGER_REQUEST:
      draft.managers = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_MANAGER_SUCCESS:
      draft.managers = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_MANAGER_FAILURE:
      draft.managers = [];
      draft.error = true;
      draft.loading = false;
      break;

    // MT5 MANAGERS
    case GET_MT5MANAGER_REQUEST:
      draft.mt5Managers = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_MT5MANAGER_SUCCESS:
      draft.mt5Managers = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_MT5MANAGER_FAILURE:
      draft.mt5Managers = [];
      draft.error = true;
      draft.loading = false;
      break;

    // COVERAGESERVERS
    case GET_COVERAGESERVER_REQUEST:
      draft.coverageServers = [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_COVERAGESERVER_SUCCESS:
      draft.coverageServers = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_COVERAGESERVER_FAILURE:
      draft.coverageServers = [];
      draft.error = true;
      draft.loading = false;
      break;

    // COVERAGEACCOUNTS
    case GET_COVERAGEACCOUNT_REQUEST:
      draft.coverageAccounts= [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_COVERAGEACCOUNT_SUCCESS:
      draft.coverageAccounts = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_COVERAGEACCOUNT_FAILURE:
      draft.coverageAccounts = [];
      draft.error = true;
      draft.loading = false;
      break;

    // MT5SYMBOL
    case GET_MT5SYMBOL_REQUEST:
      draft.mt5Symbols= [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_MT5SYMBOL_SUCCESS:
      draft.mt5Symbols = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_MT5SYMBOL_FAILURE:
      draft.mt5Symbols = [];
      draft.error = true;
      draft.loading = false;
      break;

    // SYMBOL
    case GET_SYMBOL_REQUEST:
      draft.symbols= [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_SYMBOL_SUCCESS:
      draft.symbols = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_SYMBOL_FAILURE:
      draft.symbols = [];
      draft.error = true;
      draft.loading = false;
      break;

    // SUFFIX
    case GET_SUFFIX_REQUEST:
      draft.suffixes= [];
      draft.error = false;
      draft.loading = true;
      break;
    case GET_SUFFIX_SUCCESS:
      draft.suffixes = action.payload.map((item) => item);
      draft.error = false;
      draft.loading = false;
      break;
    case GET_SUFFIX_FAILURE:
      draft.suffixes = [];
      draft.error = true;
      draft.loading = false;
      break;


    default:
      break;
  }
}, initialState);

export default reducer;
