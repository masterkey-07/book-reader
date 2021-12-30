import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import Chapter from "./components/Chapter";

const Books = ({ setTitle, refContent }) => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="*" element={<Book setTitle={setTitle} />} />
        <Route
          exact
          path="/:chapter_number"
          element={<Chapter setTitle={setTitle} refContent={refContent} />}
        />
      </Routes>
    </Fragment>
  );
};

export default Books;
