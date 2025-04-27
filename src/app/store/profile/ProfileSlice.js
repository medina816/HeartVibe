import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import apiClient from '../../services/apiClient';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {
    const response = await apiClient.get('/profile/');
    return response.data;
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (data) => {
    const response = await apiClient.put('/profile/', data);
    return response.data;
  }
);

export const partialUpdateProfile = createAsyncThunk(
  'profile/partialUpdateProfile',
  async (data) => {
    const response = await apiClient.patch('/profile/', data);
    return response.data;
  }
);

const initialState = {
  user: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      .addCase(partialUpdateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      
      // Обработаем все pending вместе
      .addMatcher(
        isAnyOf(fetchProfile.pending, updateProfile.pending, partialUpdateProfile.pending),
        (state) => {
          state.status = 'loading';
          state.error = null;
        }
      )

      // Обработаем все rejected вместе
      .addMatcher(
        isAnyOf(fetchProfile.rejected, updateProfile.rejected, partialUpdateProfile.rejected),
        (state, action) => {
          state.status = 'failed';
          state.error = action.error?.message || 'Something went wrong';
        }
      );
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;