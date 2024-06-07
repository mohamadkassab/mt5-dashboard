import axios from "axios";
import {
  API_SYMBOL,
  API_SYMBOLCONFIGURATION,
  ATFXTOKEN,
  GLOBAL_REQUEST_TIMEOUT,
  API_401_RES,
} from "../../constants/Constants";
import {
  GET_SYMBOL_REQUEST,
  GET_SYMBOL_SUCCESS,
  GET_SYMBOL_FAILURE,
  GET_SYMBOLSUFFIXES_REQUEST,
  GET_SYMBOLSUFFIXES_SUCCESS,
  GET_SYMBOLSUFFIXES_FAILURE,
  SEL_REQUEST,
  SEL_SUCCESS,
  SEL_FAILURE,
  ISAUTHENTICATED_FAILURE,
} from "../ActionTypes";


export const GetSymbols = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SYMBOL_REQUEST });
      const apiIp = process.env.REACT_APP_API_IP;
      const apiPort = process.env.REACT_APP_API_PORT;
      const authorizationToken = localStorage.getItem(ATFXTOKEN);

      const response = await axios.get(`${apiIp}:${apiPort}${API_SYMBOL}`, {
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
      if(errorPayload.message === API_401_RES){
        dispatch({ type: ISAUTHENTICATED_FAILURE });
        
      }
      
    }
  };
};

// export const DeleteSymbol = (params) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: SEL_REQUEST });
//       const apiIp = process.env.REACT_APP_API_IP;
//       const apiPort = process.env.REACT_APP_API_PORT;
//       const authorizationToken = localStorage.getItem(ATFXTOKEN);
//       const response = await axios.delete(
//         `${apiIp}:${apiPort}${API_SYMBOL}${params}`,

//         {
//           headers: {
//             Authorization: `${authorizationToken}`,
//           },
//           timeout: GLOBAL_REQUEST_TIMEOUT,
//         }
//       );

//       const status = response.status;

//       if (status >= 200 && status < 300) {
//         dispatch({ type: SEL_SUCCESS });
//       } else if (status === 401) {
//         dispatch({ type: ISAUTHENTICATED_FAILURE });
//       } else {
//         throw new Error(`Unexpected status code: ${status}`);
//       }
//     } catch (error) {
//       const errorPayload = {
//         message: error.message,
//         code: error.code,
//       };
//       console.log(error);
//       dispatch({ type: SEL_FAILURE, payload: errorPayload });
//     }
//   };
// };

export const CreateSymbolConfiguration = (formData, symbolSuffixes) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const params = formData;

        params["suffixes"] = symbolSuffixes;
        params["symbol"] = String(params["symbol"]);
        params["multiplier"] = parseInt(params["multiplier"]);
        console.log(params)
        const response = await axios.post(
          `${apiIp}:${apiPort}${API_SYMBOLCONFIGURATION}`,
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

  export const EditSymbolConfiguration = (formData, symbolSuffixes) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const {id, ...restParams} = formData;
        const params = formData;
        params["suffixes"] = symbolSuffixes;
        params["symbol"] = String(params["symbol"]);
        params["multiplier"] = parseInt(params["multiplier"]);
        const response = await axios.put(
          `${apiIp}:${apiPort}${API_SYMBOLCONFIGURATION}${id}`,
          params,
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

  
  export const GetSymbolSuffixes = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: GET_SYMBOLSUFFIXES_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const response = await axios.get(`${apiIp}:${apiPort}${API_SYMBOLCONFIGURATION}${id}`, {
          headers: {
            Authorization: `${authorizationToken}`,
          },
          timeout: GLOBAL_REQUEST_TIMEOUT,
        });

        const status = response.status;

        if (status >= 200 && status < 300) {
          dispatch({ type: GET_SYMBOLSUFFIXES_SUCCESS, payload: response.data.suffixes });
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
        dispatch({ type: GET_SYMBOLSUFFIXES_FAILURE, payload: errorPayload });
        if(errorPayload.message === API_401_RES){
          dispatch({ type: ISAUTHENTICATED_FAILURE });
        }
        
      }
    };
  };

  export const DeleteSymbolConfiguration = (params) => {
    return async (dispatch) => {
      try {
        dispatch({ type: SEL_REQUEST });
        const apiIp = process.env.REACT_APP_API_IP;
        const apiPort = process.env.REACT_APP_API_PORT;
        const authorizationToken = localStorage.getItem(ATFXTOKEN);
        const response = await axios.delete(
          `${apiIp}:${apiPort}${API_SYMBOLCONFIGURATION}${params}`,
  
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


  
