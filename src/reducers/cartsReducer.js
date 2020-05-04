import * as types from "../actions/index";

export default function (state = [], action) {
  const response = action.response;
  switch (action.type) {
    case types.GET_CARTS:
      if (response instanceof Array) {
        return {
          ...state,
          carts: response,
        };
      } else {
        return {
          ...state,
          carts: [response],
        };
      }
    case types.GET_CARTS_FAILED:
      return { ...state, error: response.error };
    default:
      return state;
  }
}
