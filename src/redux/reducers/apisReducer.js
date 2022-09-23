import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
};

const apis = createSlice({
  name: "apis",
  initialState: initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setData } = apis.actions;
export default apis.reducer;