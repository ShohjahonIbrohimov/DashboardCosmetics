import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// SIGN UP
const signupAsync = async (data) => {
  try {
    const res = await axios({
      url: "http://webmaster.fin-up.su/api/user/signup",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const signup = createAsyncThunk("auth/signup", signupAsync);

// LOGIN
const loginAsync = async (data) => {
  try {
    const res = await axios({
      url: "http://174.138.10.57/api/users/login ",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const login = createAsyncThunk("auth/login", loginAsync);
