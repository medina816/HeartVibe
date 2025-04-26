import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../services/apiClient";

export const fetchTeams = createAsyncThunk(
    "teams/fetchTeams",
    async (lang, { rejectWithValue }) => {
        try {
            const response = await apiClient.get("/team/", {
                params: { lang },
            });
            return response.data;
        } catch (error) {
            const message =
                error.response?.data?.message || error.message || "Ошибка загрузки команды";
            return rejectWithValue(message);
        }
    }
);
const teamsSlice = createSlice({
    name: "teams",
    initialState: {
        teams: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTeams.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.teams = action.payload;
            })
            .addCase(fetchTeams.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message; // Обработка ошибки
            });
    },
});

export default teamsSlice.reducer;
