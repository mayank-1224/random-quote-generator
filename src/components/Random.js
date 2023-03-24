import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatedQuote } from "../redux/randomQuote";
import { generatedTags } from "../redux/tags";
import { addBookmark } from "../redux/bookmarks";
import bookIcon from "./plus.svg";
const Random = () => {
  const { quote } = useSelector((state) => state.randomQuote);
  const { tags } = useSelector((state) => state.tagsArray);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuote();
    getTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        dispatch(generatedQuote(data));
        setLoading(false);
      });
  };

  const getTags = () => {
    fetch("https://api.quotable.io/tags")
      .then((response) => response.json())
      .then((data) => {
        dispatch(generatedTags(data));
      });
  };

  const getTaggedQuote = (tag) => {
    fetch(`https://api.quotable.io/random?tags=${tag}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(generatedQuote(data));
      });
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="quoteBox">
          <div className="quoteInnerContainer">
            <p className="quoteText">
              {loading ? (
                <p className="loadingText">Loading your random quote...</p>
              ) : (
                quote.content
              )}
            </p>
            <div className="authBookmarkContainer">
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
                onClick={() => dispatch(addBookmark(quote))}
              >
                <img src={bookIcon} alt="bookmark-icon" />
              </button>
            </div>
          </div>
        </div>

        <select
          className="tagSelect"
          onChange={(e) => getTaggedQuote(e.target.value)}
        >
          <option>Select Tag</option>
          {tags.map((tag) => (
            <option value={tag.name} key={tag._id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button className="nextButton" onClick={getQuote}>
          Next Quote
        </button>
      </div>
    </>
  );
};
export default Random;
