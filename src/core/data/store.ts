import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./slices/sideBarSlice";
import contentReducer from "./slices/contentSlice";

export default configureStore({
  reducer: {
    sideBarSlice: sideBarReducer,
    contentSlice: contentReducer,
  },
});
