    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import apiClient from "../../services/apiClient";

    export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async () => {
    const response = await apiClient.get("reviews/");
    return response.data;
    });

    const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchReviews.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchReviews.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.reviews = action.payload;
        })
        .addCase(fetchReviews.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
    });

    export default reviewSlice.reducer;
