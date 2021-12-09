import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
} from "../constants/postConstants";
import axios from "axios";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    dispatch({
      type: POST_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_LIST_FAIL,
      payload: "erreur dans le serveur",
    });
  }
};
