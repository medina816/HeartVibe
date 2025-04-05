import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/apiClient";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await apiClient.get("news");
  return response.data;
});

export const fetchSingleNews = createAsyncThunk(
  "news/fetchSingleNews",
  async (id) => {
    const response = await apiClient.get(`news/${id}`);
    return response.data;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    currentArticle: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(fetchSingleNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentArticle = action.payload;
      })
      .addCase(fetchSingleNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearCurrentArticle } = newsSlice.actions;
export default newsSlice.reducer;