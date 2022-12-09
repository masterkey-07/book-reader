import { ERROR, GET_BOOKS, POST_COOMENT } from "./types";

const initialState = {
  books: [],
  chapters: [],
  title: "Leitor de Livros (Intermináveis)",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload.books, chapters: payload.chapters };
    case POST_COOMENT:
      const newChapters = state.chapters.map((chapter) => {
        return chapter._id == payload.chapterId
          ? { ...chapter, comments: payload.comments, emoji: payload.emoji }
          : chapter;
      });

      return { ...state, chapters: newChapters };
    default:
      return state;
  }
};
