import axios from "axios";
import {
  API_USER,
  API_TYPE,
  API_USER_EDIT,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
  API_401_RES
} from "../../constants/Constants";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_TYPE_REQUEST,
  GET_TYPE_SUCCESS,
  GET_TYPE_FAILURE,
  SEL_REQUEST,
  SEL_SUCCESS,
  SEL_FAILURE,
  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";


export const GetUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USER_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      const response = await axios.get(`${apiIp}:${apiPort}${API_USER}`, {
        headers: {
          Authorization: `${authorizationToken}`,
        },
        timeout: GLOBAL_REQUEST_TIMEOUT,
      });
      const status = response.status;

      if (status >= 200 && status < 300) {
        const data = JSON.parse(response.data);
        dispatch({ type: GET_USER_SUCCESS, payload: data });
      } else if (status === 401) {
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      } else {
        throw new Error(`Unexpected status code: ${status}`);
      }
    } catch (error) {
      console.log(error);
      const errorPayload = {
        message: error.message,
        code: error.code,
      };
      dispatch({ type: GET_USER_FAILURE, payload: errorPayload });
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      }
      
    }
  };
};

export const CreateUser = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      const response = await axios.post(
        `${apiIp}:${apiPort}${API_USER}`,
        params,
        {
          headers: {
            Authorization: `${authorizationToken}`,
          },
          timeout: GLOBAL_REQUEST_TIMEOUT,
        }
      );
      const status = response.status;

      if (status >= 200 && status < 300) {
        dispatch({ type: SEL_SUCCESS });
      } else if (status === 401) {
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      } else {
        throw new Error(`Unexpected status code: ${status}`);
      }
    } catch (error) {
      const errorPayload = {
        message: error.message,
        code: error.code,
      };
      dispatch({ type: SEL_FAILURE, payload: errorPayload });
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      }
      
    }
  };
};


export const EditUser = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      params.is_active = params?.is_active === "Active" ? true : false;
      const {id, ...restParams} = params;
      const response = await axios.put(
        `${apiIp}:${apiPort}${API_USER_EDIT}${id}`,
        restParams,
        {
          headers: {
            Authorization: `${authorizationToken}`,
            'Content-Type': 'application/json',

          },
          timeout: GLOBAL_REQUEST_TIMEOUT,
        }
      );

      const status = response.status;

      if (status >= 200 && status < 300) {
        dispatch({ type: SEL_SUCCESS });
      } else if (status === 401) {
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      } else {
        throw new Error(`Unexpected status code: ${status}`);
      }
    } catch (error) {
      const errorPayload = {
        message: error.message,
        code: error.code,
      };
      dispatch({ type: SEL_FAILURE, payload: errorPayload });
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      }
      
    }
  };
};

export const DeleteUser = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      const response = await axios.delete(
        `${apiIp}:${apiPort}${API_USER}${params}`,

        {
          headers: {
            Authorization: `${authorizationToken}`,
          },
          timeout: GLOBAL_REQUEST_TIMEOUT,
        }
      );

      const status = response.status;

      if (status >= 200 && status < 300) {
        dispatch({ type: SEL_SUCCESS });
      } else if (status === 401) {
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      } else {
        throw new Error(`Unexpected status code: ${status}`);
      }
    } catch (error) {
      const errorPayload = {
        message: error.message,
        code: error.code,
      };
      dispatch({ type: SEL_FAILURE, payload: errorPayload });
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      }
      
    }
  };
};

