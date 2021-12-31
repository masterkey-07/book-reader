import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  ButtonsSection,
  ChapterReader,
  CommentArea,
  CommentSection,
  EmojiSection,
} from "./style";
import { setChapterComment } from "../state/actions";

const Chapter = ({
  books: { chapters, books },
  setChapterComment,
  setTitle,
  refContent,
}) => {
  const navigate = useNavigate();
  const { chapter_number, bookName } = useParams();
  setTitle(bookName);

  const refTextArea = useRef(null);

  const chapter = chapters.find((chapter) => {
    const bookId = books.find((book) => book.book_name === bookName)._id;

    return (
      chapter.book_id == bookId && chapter.chapter_number == chapter_number
    );
  });

  const [comment, setComment] = useState("");

  const setSelectedEmoji = (emoji, selectedEmoji) =>
    selectedEmoji == emoji ? "s selected" : "r";

  const updateSelectedComment = (emoji) =>
    setChapterComment(chapter._id, emoji, refTextArea.current.value);

  const emojiList = [
    "angry",
    "sad-cry",
    "grin-hearts",
    "grimace",
    "meh-rolling-eyes",
  ];

  const getLastChapter = () => {
    let chapterNumber = chapters[0].chapter_number;
    chapters.forEach((chapter) => {
      if (chapterNumber < chapter.chapter_number)
        chapterNumber = chapter.chapter_number;
    });

    return chapterNumber;
  };

  useEffect(() => {
    chapter && setComment(chapter.comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter_number, chapter]);

  return (
    <ChapterReader>
      <span>Capitulo {chapter_number}</span>
      <br />
      <br />
      {chapter ? (
        <Fragment>
          {chapter.text.split("\n").map((txt, index) => (
            <Fragment key={index}>
              {txt}
              <br />
            </Fragment>
          ))}
          <hr />
          <i> {chapter.chapter_thought}</i>

          <CommentSection>
            <EmojiSection>
              {emojiList.map((emojiItem, index) => (
                <i
                  key={index}
                  onClick={() =>
                    index == chapter.emoji
                      ? updateSelectedComment(-1)
                      : updateSelectedComment(index)
                  }
                  className={`fa${setSelectedEmoji(
                    index,
                    chapter.emoji
                  )} fa-${emojiItem} `}
                ></i>
              ))}
            </EmojiSection>
            <CommentArea>
              <div>
                <textarea
                  ref={refTextArea}
                  placeholder="Deixa um comentário aqui!"
                  onBlur={() => updateSelectedComment(chapter.emoji)}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </CommentArea>
          </CommentSection>

          <ButtonsSection>
            {chapter_number > 1 && (
              <button
                onClick={() => {
                  refContent.current.scrollTop = 0;
                  navigate(`/${bookName}/${chapter_number - 1}`);
                }}
              >
                Capitulo Anterior
              </button>
            )}

            <div></div>
            {chapter_number < getLastChapter() && (
              <button
                onClick={() => {
                  refContent.current.scrollTop = 0;

                  navigate(`/${bookName}/${chapter_number * 1 + 1}`);
                }}
              >
                Proximo Capitulo
              </button>
            )}
          </ButtonsSection>
        </Fragment>
      ) : (
        <span> Carregando...</span>
      )}
    </ChapterReader>
  );
};

const mapStateToProps = (state) => ({ books: state.books });

const mapDispatchToProps = { setChapterComment };

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
