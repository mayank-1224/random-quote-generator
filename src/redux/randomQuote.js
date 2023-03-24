import { createSlice } from "@reduxjs/toolkit";

export const randomQuoteSlice = createSlice({
  name: "randomQuote",
  initialState: {
    quote: {},
  },
  reducers: {
    generatedQuote: (state, action) => {
      console.log(action.payload);
      if (action.payload.content === undefined) {
        state.quote = {
          content: "",
        };
      } else state.quote = action.payload;
    },
  },
});

export const { generatedQuote } = randomQuoteSlice.actions;
export default randomQuoteSlice.reducer;
