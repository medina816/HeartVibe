import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

export const verifyCode = createAsyncThunk(
  'otpVerification/verifyCode',
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/verify-otp/', { email, code });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const otpVerificationSlice = createSlice({
  name: 'otpVerification',
  initialState: {
    otpStatus: 'idle',  // idle, loading, succeeded, failed
    otpError: null,
    otpMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyCode.pending, (state) => {
        state.otpStatus = 'loading';
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.otpStatus = 'succeeded';
        state.otpMessage = action.payload.message;
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload.error;
      });
  },
});

export default otpVerificationSlice.reducer;