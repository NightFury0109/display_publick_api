import { createSlice, ThunkAction, AnyAction } from "@reduxjs/toolkit";

import api from "../../utils/api";
import { RootState } from '../store';

export interface APIState {
  data: Array<object>,
  result: Array<object>
}

const initialState: APIState = {
  data: [],
  result: []
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

export const getApis = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  try {
    const res = await api.get("/entries");
    console.log(res.data.entries);
    dispatch(setData(res.data.entries));
  } catch (error) {
    console.log(error);
  }
}

export default apis.reducer;