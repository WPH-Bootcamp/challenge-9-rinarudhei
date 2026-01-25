import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "@/app/auth/authSlice";
import userReducers from "@/app/auth/userSlice";

const allReducers = combineReducers({
  auth: authReducers,
  user: userReducers,
});

export default allReducers;
