import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  userDeatils: "",
};

export const UserInformations = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    handleuser: (state, action) => {
      state.userDeatils = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleuser } = UserInformations.actions;

export default UserInformations.reducer;
