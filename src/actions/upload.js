import * as uploadApi from "../api/upload";

export const uploadImage = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    await uploadApi.uploadImage(data);
    dispatch({ type: "UPLOAD_SUCCESS" });
  } catch (error) {
     dispatch({ type: "UPLOAD_FAIL" });
    console.log(error);
  }
};
