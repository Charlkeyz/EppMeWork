import { configureStore } from "@reduxjs/toolkit";
import facebook from "./slice/UserInformations";
export const store = configureStore({
  reducer: {
    userDetails: facebook,
  },
});
