import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

export const sendOtp = createAsyncThunk(
  'otp/sendOtp',
  async (email, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/send-otp/', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'otp/verifyOtp',
  async ({ email, code }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post('/verify-otp/', { email, code });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

const otpSlice = createSlice({
  name: 'otp',
  initialState: {
    otpStatus: 'idle',
    otpError: null,
    otpMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.otpStatus = 'loading';
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.otpStatus = 'succeeded';
        state.otpMessage = action.payload.message;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload.error || 'Ошибка отправки OTP';
      })
      .addCase(verifyOtp.pending, (state) => {
        state.otpStatus = 'loading';
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.otpStatus = 'succeeded';
        state.otpMessage = action.payload.message;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.otpStatus = 'failed';
        state.otpError = action.payload.error || 'Ошибка верификации OTP';
      });
  },
});

export default otpSlice.reducer;
