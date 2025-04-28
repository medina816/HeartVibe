import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/apiClient";

// Асинхронный запрос для изменения пароля
export const changePassword = createAsyncThunk(
  "password/changePassword",
  async ({ passwordData, token }, { rejectWithValue }) => {
    try {
      // Отправляем запрос с подтверждением через токен
      const response = await apiClient.put("/change-password/", passwordData, {
        headers: {
          Authorization: `Bearer ${token}`, // Передаем токен подтверждения в заголовке
        },
      });

      return response.data; // Возвращаем данные ответа от сервера
    } catch (error) {
      // Обработка ошибки
      return rejectWithValue(error.response?.data || "Что-то пошло не так!");
    }
  }
);

const passwordSlice = createSlice({
  name: "password",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Что-то пошло не так!";
      });
  },
});

export default passwordSlice.reducer;
