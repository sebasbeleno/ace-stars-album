import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState, AppThunk } from "../../App/store";

interface AlbumState {
  status: "idle" | "loading" | "failed";
  obtainedStickers: any[];
}

const initialState: AlbumState = {
  status: "idle",
  obtainedStickers: [],
};

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    addSticker: (state, action: PayloadAction<any>) => {
      state.obtainedStickers.push(action.payload);
    },
  },
});

export const { addSticker } = albumSlice.actions;

export const selectAlbum = (state: AppState) => state.album;

export default albumSlice.reducer;
