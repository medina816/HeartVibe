import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

export const sendFeedback = createAsyncThunk(
  'feedback/sendFeedback',
  async ({ name, phone_number }, thunkAPI) => {
    try {
      const response = await apiClient.post('contact-requests/', {
        name,
        phone_number,
        is_processed: false,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.detail || 'Ошибка при отправке'
      );
    }
  }
);

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    resetFeedback: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendFeedback.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(sendFeedback.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
