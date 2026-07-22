import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunAPI) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } },
      );
      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error?.response.message || "Login falied");
    }
  },
);

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    isAuth: false,
    user: null,
    message: null,
    error: null,
  },

  reducers: () => {},

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuth = false;
        state.user = null;
        state.message = action.payload.message;
        state.error = action.payload.error;
      });
  },
});

export default userSlice.reducer;
