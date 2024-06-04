import axios from "axios";
import {
  API_SUFFIX,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
} from "../../constants/Constants";
import {
  GET_SUFFIX_REQUEST,
  GET_SUFFIX_SUCCESS,
  GET_SUFFIX_FAILURE,
  SEL_REQUEST,
  SEL_SUCCESS,
  SEL_FAILURE,
  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";

export const GetSuffixes = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SUFFIX_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);

      const response = await axios.get(`${apiIp}:${apiPort}${API_SUFFIX}`, {
        headers: {
          Authorization: `${authorizationToken}`,
        },
        timeout: GLOBAL_REQUEST_TIMEOUT,
      });

      const status = response.status;

      if (status >= 200 && status < 300) {
        const data = JSON.parse(response.data);
        dispatch({ type: GET_SUFFIX_SUCCESS, payload: data });
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
      dispatch({ type: GET_SUFFIX_FAILURE, payload: errorPayload });
    }
  };
};

export const CreateSuffix = (params) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const response = await axios.post(
          `${apiIp}:${apiPort}${API_SUFFIX}`,
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

  export const EditSuffix = (params) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const {id, ...restParams} = params;
        const response = await axios.put(
          `${apiIp}:${apiPort}${API_SUFFIX}${id}`,
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

  export const DeleteSuffix = (params) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const response = await axios.delete(
          `${apiIp}:${apiPort}${API_SUFFIX}${params}`,
  
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
  
