// Actions dispatched by the redux store to update the global state in the application.

import * as authApi from "../api/auth";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await authApi.login(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
    console.log(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await authApi.signup(formData);
    dispatch({ type: "AUTH_SUCCESS", data });
  } catch (error) {
    dispatch({ type: "AUTH_FAIL" });
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
