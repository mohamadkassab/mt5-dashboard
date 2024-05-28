import axios from "axios";
import {
  API_SYMBOLS,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
} from "../../constants/Constants";
import {
  GET_SYMBOL_REQUEST,
  GET_SYMBOL_SUCCESS,
  GET_SYMBOL_FAILURE,

  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";

export const GetSymbols = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SYMBOL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);

      const response = await axios.get(`${apiIp}:${apiPort}${API_SYMBOLS}?server_id=1`, {
        headers: {
          Authorization: `${authorizationToken}`,
        },
        timeout: GLOBAL_REQUEST_TIMEOUT,
      });

      const status = response.status;

      if (status >= 200 && status < 300) {
        const data = JSON.parse(response.data);
        dispatch({ type: GET_SYMBOL_SUCCESS, payload: data });
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
      dispatch({ type: GET_SYMBOL_FAILURE, payload: errorPayload });
    }
  };
};


  