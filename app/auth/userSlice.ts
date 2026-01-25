import { IUser } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: 0,
  name: "",
  avatar: "",
  phone: "",
  createdAt: "",
  email: "",
};

const authSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
      state.phone = action.payload.phone;
      state.createdAt = action.payload.createdAt;
      state.email = action.payload.email;
    },
    clearCurrentUser: (state) => {
      state.id = initialState.id;
      state.name = initialState.name;
      state.avatar = initialState.avatar;
      state.phone = initialState.phone;
      state.createdAt = initialState.createdAt;
      state.email = initialState.email;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = authSlice.actions;
export default authSlice.reducer;
