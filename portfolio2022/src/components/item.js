import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
export const initialState = {
  items: [],
};

// our slice
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
});

// export the actions
export const { setLoading, setItems, setError } = itemSlice.actions;

// export the selector (".items" being same as in slices/index.js's "items: something")
export const itemsSelector = (state) => state.items;

// export the default reducer
export default itemSlice.reducer;

// set up axios - simple json-server prototype config here
const api = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// fetch all items
export function fetchItems() {
  return async (dispatch) => {
    api
      .get("/list")
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
