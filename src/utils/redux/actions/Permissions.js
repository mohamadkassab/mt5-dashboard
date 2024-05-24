import axios from "axios";
import {
  API_PERMISSIONS,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
} from "../../constants/Constants";
import {
  GET_PERMISSION_REQUEST,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_FAILURE,
  SEL_REQUEST,
  SEL_SUCCESS,
  SEL_FAILURE,
  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";

export const GetPermissions = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PERMISSION_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);

      const response = await axios.get(`${apiIp}:${apiPort}${API_PERMISSIONS}`, {
        headers: {
          Authorization: `${authorizationToken}`,
        },
        timeout: GLOBAL_REQUEST_TIMEOUT,
      });

      const status = response.status;

      if (status >= 200 && status < 300) {
        const data = JSON.parse(response.data);
        dispatch({ type: GET_PERMISSION_SUCCESS, payload: data });
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
      dispatch({ type: GET_PERMISSION_FAILURE, payload: errorPayload });
    }
  };
};

export const CreatePermission = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      const response = await axios.post(
        `${apiIp}:${apiPort}${API_PERMISSIONS}`,
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
      console.log(error);
      dispatch({ type: SEL_FAILURE, payload: errorPayload });
    }
  };
};

export const EditPermission = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SEL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);
      const {id, ...restParams} = params;
      const response = await axios.put(
        `${apiIp}:${apiPort}${API_PERMISSIONS}${id}`,
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
    }
  };
};

export const DeletePermission = (params) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const response = await axios.delete(
          `${apiIp}:${apiPort}${API_PERMISSIONS}${params}`,
  
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
        console.log(error);
        dispatch({ type: SEL_FAILURE, payload: errorPayload });
      }
    };
  };
  