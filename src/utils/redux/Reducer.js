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
  isAuthenticated: localStorage.getItem(ATFXTOKEN) || false,
  loading: false,
  success: false,
  error: false,
};

const reducer = produce((draft, action) => {
  // console.log('Action Type:', action.type);
  // console.log('Action Payload:', action.payload);
  // console.log('Is Draft Extensible:', Object.isExtensible(draft));

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

    default:
      break;
  }
}, initialState);

export default reducer;
