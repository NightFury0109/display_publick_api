import { createSlice, ThunkAction, AnyAction } from "@reduxjs/toolkit";

import api from "../../utils/api";
import { RootState } from '../store';
import { APIData } from '../../types';

export interface APIState {
  data: Array<APIData>,
  result: Array<APIData>
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
    },
    setResult: (state, action) => {
      state.result = action.payload;
    }
  }
});

export const { setData, setResult } = apis.actions;

export const getApis = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  try {
    const res = await api.get("/entries");
    // console.log(res.data.entries);
    dispatch(setData(res.data.entries));
  } catch (error) {
    console.log(error);
  }
}

export default apis.reducer;