import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialize, deleteBookmark } from "../redux/bookmarks";
import deleteIcon from "./delete.svg";

const Bookmarks = () => {
  const { bookmark } = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {bookmark.length === 0 ? (
        <h1
          className="quoteText"
          style={{ textAlign: "center", marginTop: "50px", fontWeight: "600" }}
        >
          No Bookmarks. Click on bookmark icon to add a quote to bookmarks.
        </h1>
      ) : (
        bookmark.map((quote) => (
          <div className="quoteBox" key={quote._id}>
            <div className="quoteInnerContainer">
              <p className="quoteText">{quote.content}</p>
              <div
                className="authBookmarkContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  className="quoteText"
                  style={{
                    fontWeight: "700",
                    fontSize: "25px",
                    margin: "0 auto",
                  }}
                >
                  - {quote.author}
                </p>
                <button
                  className="bookmarkButton"
                  onClick={() => dispatch(deleteBookmark(quote._id))}
                >
                  <img src={deleteIcon} alt="delete-icon" />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default Bookmarks;
