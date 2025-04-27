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
        if (typeof action.payload === 'object' && action.payload !== null) {
          state.otpMessage = action.payload.message || action.payload.code || 'Код подтвержден успешно!';
        } else {
          state.otpMessage = action.payload || 'Код подтвержден успешно!';
        }
      })
      .addCase(verifyCode.rejected, (state, action) => {
        state.otpStatus = 'failed';
        if (typeof action.payload === 'object' && action.payload !== null) {
          state.otpError = action.payload.error || action.payload.code || 'Ошибка при проверке кода';
        } else {
          state.otpError = action.payload || 'Ошибка при проверке кода';
        }
      });
  },
});

export default otpVerificationSlice.reducer;
