// otpVerificationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

// Асинхронная проверка OTP
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

// Слайс для верификации OTP
const otpVerificationSlice = createSlice({
  name: 'otpVerification',
  initialState: {
    otpStatus: 'idle',
    otpError: null,
    otpMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyCode.pending, (state) => {
        state.otpStatus = 'loading';
        state.otpError = null;
        state.otpMessage = null;
      })
      .addCase(verifyCode.fulfilled, (state, action) => {
        state.otpStatus = 'succeeded';
        state.otpMessage = action.payload.message || 'Код подтвержден успешно!';
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload?.error || 'Ошибка при проверке кода';
      });
  },
});

export default otpVerificationSlice.reducer;
