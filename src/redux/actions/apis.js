import api from "../../utils/api";
import { setData } from '../reducers/apisReducer';

export const getApis = () => {
  return async dispatch => {
    try {
      console.log("Success");
      const res = await api.get("/entries");
      console.log(res.data.entries);
    } catch (error) {
      console.log(error);
    }
  }
}