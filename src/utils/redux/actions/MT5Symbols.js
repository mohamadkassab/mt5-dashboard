import axios from "axios";
import {
  API_MT5SYMBOL,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
  API_401_RES
} from "../../constants/Constants";
import {
  GET_MT5SYMBOL_REQUEST,
  GET_MT5SYMBOL_SUCCESS,
  GET_MT5SYMBOL_FAILURE,
  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";

export const GetMT5Symbols = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_MT5SYMBOL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);

      const response = await axios.get(`${apiIp}:${apiPort}${API_MT5SYMBOL}`, {
        headers: {
          Authorization: `${authorizationToken}`,
        },
        timeout: GLOBAL_REQUEST_TIMEOUT,
      });

      const status = response.status;

      if (status >= 200 && status < 300) {
        dispatch({ type: GET_MT5SYMBOL_SUCCESS, payload: response.data });
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
      dispatch({ type: GET_MT5SYMBOL_FAILURE, payload: errorPayload });
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
      }
      
    }
  };
};


