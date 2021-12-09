import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: "erreur dans le serveur",
    });
  }
};
