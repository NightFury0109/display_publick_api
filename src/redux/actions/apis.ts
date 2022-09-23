import { createSlice } from "@reduxjs/toolkit";

import api from "../../utils/api";

export interface APIState {
  data: Array<object>
}

const initialState: APIState = {
  data: []
};

const apis = createSlice({
  name: "apis",
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setData } = apis.actions;

export const getApis = () => async dispatch => {
  try {
    console.log("Success");
    const res = await api.get("/entries");
    console.log(res.data.entries);
  } catch (error) {
    console.log(error);
  }
}

export default apis.reducer;