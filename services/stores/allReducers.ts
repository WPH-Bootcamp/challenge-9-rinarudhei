import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "@/app/auth/authSlice";
import userReducers from "@/app/auth/userSlice";
import foodReducers from "@/app/details/[id]/foodSlice";

const allReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
  food: foodReducers,
});

export default allReducers;
