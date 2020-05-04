import * as types from "../actions/index";

export default function (state = [], action) {
  const response = action.response;
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        user: { ...response.user, token: response.token },
        error: null,
      };
    case types.LOGIN_USER_FAILED:
      return { ...state, error: response.error };
    default:
      return state;
  }
}
