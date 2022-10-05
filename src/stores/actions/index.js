import axios from "axios";


export function SV({ payload }) {
  //SEARCH VIDEOGAME
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();
      const json = await axios.get(`/videogames?name=${payload}`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "SV",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const GD = ({ payload }) => {
  //GET DETAILS
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();

      const json = await axios.get(`/videogames/${payload}`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "GD",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GGDBA = () => {
  // GET GAMES DATABASE & API
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();

      const json = await axios.get(`/videogames`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "GGDBA",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GAG = () => {
  // GET ALL GENRES
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();
      const json = await axios.get(`/genres`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "GAG",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GAP = () => {
  // GET ALL PLATFORMS
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();
      const json = await axios.get(`/platforms`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "GAP",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const GAS = () => {
  // GET ALL STORES
  let cancelToken;
  return async function (dispatch) {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Canceling the prev req");
      }
      cancelToken = axios.CancelToken.source();
      const json = await axios.get(`/stores`, {
        cancelToken: cancelToken.token,
      });
      dispatch({
        type: "GAS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const FG = ({ payload }) => {
  // FILTER GAMES
  return async function (dispatch) {
    dispatch({
      type: "FG",
      payload: payload,
    });
  };
};

export const FGR = () => {
  // FILTER GAMES RESET
  return async function (dispatch) {
    dispatch({
      type: "FGR",
    });
  };
};

export const OG = ({ payload }) => {
  // ORDER GAMES
  return async function (dispatch) {
    dispatch({
      type: "OG",
      payload: payload,
    });
  };
};

export const OGR = () => {
  // ORDER GAMES RESET
  return async function (dispatch) {
    dispatch({
      type: "OGR",
    });
  };
};

export const CT = ({ component, stateComponent }) => {
  // COMPONENT TOGGLE
  return async function (dispatch) {
    dispatch({
      type: "CT",
      in: component,
      payload: !stateComponent,
    });
  };
};
