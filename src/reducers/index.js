import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import cart from "./cartsReducer";

const rootReducer = combineReducers({
  register,
  login,
  cart,
});

export default rootReducer;
