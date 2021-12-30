import axios from "axios";

import { ERROR, GET_BOOKS, POST_COOMENT } from "./types";

const config = { headers: { "Content-Type": "application/json" } };

export const getBooks = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/books/");

    dispatch({ type: GET_BOOKS, payload: data });
  } catch (error) {
    console.error(error);
    alert(error.response.data.message);
    dispatch({ type: ERROR });
  }
};

export const setChapterComment =
  (chapterId, emoji, comments) => async (dispatch) => {
    try {
      const data = { chapterId, emoji, comments };

      axios.post("/api/books", data, config);

      dispatch({ type: POST_COOMENT, payload: data });
    } catch (error) {
      alert(error.response.data.message);
      dispatch({ type: ERROR });
    }
  };
