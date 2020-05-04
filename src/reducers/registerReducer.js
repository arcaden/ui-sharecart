import * as types from "../actions/index";

export default function (state = [], action) {
  let registered = action.success;

  switch (action.type) {
    case types.REGISTER_USER:
      return { ...state, registered };
    default:
      return state;
  }
}
