import * as types from "./index";

export const registerUserAction = (success) => {
  return {
    type: types.REGISTER_USER,
    success: success,
  };
};

export const loginUserAction = (response) => {
  return {
    type: types.LOGIN_USER,
    response,
  };
};

export const loginUserFailedAction = (response) => {
  return {
    type: types.LOGIN_USER_FAILED,
    response,
  };
};

export const fetchCartsAction = (response) => {
  return {
    type: types.GET_CARTS,
    response,
  };
};

export const userPostFetch = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.erros) {
          console.log(data.errors);
        } else {
          dispatch(registerUserAction(true));
        }
      });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...user }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          dispatch(loginUserFailedAction(data));
        } else {
          console.log(data);
          dispatch(loginUserAction(data));
        }
      });
  };
};

export const fetchCarts = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/carts", {
      method: "GET",
      headers: {
        Authorization: user.token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          console.log(data);
        } else {
          console.log(data);
          dispatch(fetchCartsAction(data));
        }
      });
  };
};
