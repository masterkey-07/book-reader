import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import Landing from "./Landing";

const Pages = ({ setTitle, refContent }) => {
  return (
    <Routes>
      <Route
        exact
        path="/:bookName/*"
        element={<Books setTitle={setTitle} refContent={refContent} />}
      />
      <Route exact path="/" element={<Landing setTitle={setTitle} />} />
    </Routes>
  );
};

export default Pages;
