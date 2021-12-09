import { combineReducers } from "redux";
import { userList } from "./userReducers";
import { postList } from "./postReducers";

export default combineReducers({
  userList: userList,
  postList: postList,
});
