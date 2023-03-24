import { createSlice } from "@reduxjs/toolkit";

export const tagSlice = createSlice({
  name: "tagsArray",
  initialState: {
    tags: [],
  },
  reducers: {
    generatedTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const { generatedTags } = tagSlice.actions;
export default tagSlice.reducer;
