import React, { Fragment } from "react";
import { connect } from "react-redux";
import { BookArea, ChapterItem, ChapterList, ChapterListArea } from "./style";
import { useNavigate, useParams } from "react-router-dom";

const Book = ({ books: { books, chapters }, setTitle }) => {
  const { bookName } = useParams();
  setTitle(bookName);
  const navigate = useNavigate();
  return (
    <BookArea>
      {books.length ? (
        <Fragment>
          <span>{bookName}</span>
          <br />
          <br />{" "}
          {books.find((book) => book.book_name.includes(bookName)).book_summary}
          <br />
          <br />
          <ChapterListArea>
            {chapters
              .filter(
                (chapter) =>
                  chapter.book_id ===
                  books.find((book) => book.book_name.includes(bookName))._id
              )
              .map((chapter) => (
                <ChapterList>
                  {" "}
                  <ChapterItem
                    onClick={() =>
                      navigate(`/${bookName}/${chapter.chapter_number}`)
                    }
                  >
                    Capitulo {chapter.chapter_number}
                  </ChapterItem>{" "}
                </ChapterList>
              ))}
          </ChapterListArea>
        </Fragment>
      ) : (
        <span>Carregando...</span>
      )}
    </BookArea>
  );
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
