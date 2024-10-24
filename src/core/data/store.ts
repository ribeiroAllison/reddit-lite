import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slices/sideBarSlice";

export default configureStore({
  reducer: {
    sideBarSlice: sideBarReducer,
  },
});
