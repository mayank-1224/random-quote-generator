import { configureStore } from "@reduxjs/toolkit";
import randomQuoteReducer from "./randomQuote";
import tagReducer from "./tags";
import bookmarksReducer from "./bookmarks";

export default configureStore({
  reducer: {
    randomQuote: randomQuoteReducer,
    tagsArray: tagReducer,
    bookmarks: bookmarksReducer,
  },
});
