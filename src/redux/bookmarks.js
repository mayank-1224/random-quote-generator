import { createSlice } from "@reduxjs/toolkit";

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    bookmark: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      let flag = false;
      if (!localStorage.getItem("bookmarks")) {
        localStorage.setItem("bookmarks", JSON.stringify([]));
      }
      let tempbookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      tempbookmarks.forEach((item) => {
        if (item._id === action.payload._id) {
          console.log("already bookmarked");
          flag = true;
        }
      });
      if (!flag) {
        tempbookmarks.unshift(action.payload);
        localStorage.setItem("bookmarks", JSON.stringify(tempbookmarks));
        state.bookmark = tempbookmarks;
      }
    },
    initialize: (state) => {
      if (!localStorage.getItem("bookmarks")) {
        localStorage.setItem("bookmarks", JSON.stringify([]));
      }
      let tempbookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      state.bookmark = tempbookmarks;
    },
    deleteBookmark: (state, action) => {
      let tempbookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      tempbookmarks = tempbookmarks.filter(
        (item) => item._id !== action.payload
      );
      localStorage.setItem("bookmarks", JSON.stringify(tempbookmarks));
      console.log(tempbookmarks);

      state.bookmark = tempbookmarks;
    },
  },
});

export const {
  addBookmark,
  initialize,
  deleteBookmark,
} = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
