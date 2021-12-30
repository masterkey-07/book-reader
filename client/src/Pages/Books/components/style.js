import styled from "styled-components";

export const BookArea = styled.div`
  padding: 3vh;
  background: rgba(25, 25, 25, 0.7);
  color: rgb(236, 219, 186);
  width: 70%;
  font-size: 2vh;
  text-shadow: 0px 0px 0.3vh rgb(236, 219, 186);
  border-radius: 30px;
  box-shadow: 0px 0px 25px 7.5px rgba(236, 219, 186, 0.5);

  span {
    font-size: 2.5vh;
    font-weight: 700;
    background: transparent;
  }
`;

export const ChapterListArea = styled.div`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export const ChapterList = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  width: 100%;
`;

export const ChapterItem = styled.div`
  padding: 3vh 6vh;
  font-size: 2.5vh;
  text-shadow: 0px 0px 0.3vh rgb(236, 219, 186);
  border-radius: 30px;
  background: transparent;
  border: solid rgba(236, 219, 186, 0.3) 2px;
  width: auto;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: ease-in-out 200ms;
  :hover {
    border: solid rgba(236, 219, 186, 1) 2px;
    text-shadow: 0px 0px 0.7vh rgb(236, 219, 186);
  }
`;

export const ChapterReader = styled.div`
  padding: 1vh;
  font-size: 2vh;
  color: rgb(236, 219, 186);
  text-shadow: 0px 0px 0.2vh rgb(236, 219, 186);
  background-color: rgba(25, 25, 25, 0.7);
  border-radius: 20px;
  box-shadow: 0px 0px 25px 7.5px rgba(236, 219, 186, 0.5);
  width: 90%;

  span {
    font-size: 3vh;
    font-weight: 700;
    background: transparent;
  }

  hr {
    margin: 1vh 0;
    background-color: rgb(236, 219, 186);
    display: block;
    height: 1px;
    border: 0;
    padding: 0;
  }

  i {
    background: transparent;
  }
`;

export const CommentSection = styled.div`
  margin-top: 6vh;
  display: flex;
  background: transparent;
  flex-direction: column;
`;
export const EmojiSection = styled.div`
  display: flex;
  font-size: 5vh;
  background: transparent;
  justify-content: space-around;
  align-items: center;
  padding: 0 20%;

  i {
    outline: 0;
    margin: 0 0.5vh;
    cursor: pointer;
    :hover {
      text-shadow: 0px 0px 1vh rgb(236, 219, 186);
    }
  }

  .selected {
    text-shadow: 0px 0px 0.75vh rgb(236, 219, 186);
    font-size: 7.5vh;
  }
`;

export const CommentArea = styled.div`
  background: transparent;

  div {
    width: 100%;
    background: transparent;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 2.5vh;
    margin-bottom: 1vh;
  }
  textarea {
    font-weight: 700;
    height: 12vh;
    padding: 1vh;
    border-radius: 10px;
    color: rgb(236, 219, 186);
    font-size: 2vh;
    width: 40vh;
    box-shadow: 0px 0px 0.5vh 0.2vh rgba(236, 219, 186, 0.5);
    background: transparent;
  }
`;

export const ButtonsSection = styled.div`
  margin-top: 2.5vh;
  background: transparent;
  display: flex;
  padding: 0 2.5%;
  justify-content: space-between;

  div {
    width: 5%;
    background-color: transparent;
  }
  button {
    background-color: transparent;
    color: rgb(236, 219, 186);
    font-size: 3vh;
    outline: 0;
    font-weight: 700;
    border: solid 1px rgb(236, 219, 186);
    padding: 1vh;
    border-radius: 20px;
    text-shadow: 0px 0px 0.5vh rgb(236, 219, 186);
    cursor: pointer;
    margin-bottom: 2vh;

    :hover {
      text-shadow: 0px 0px 0.75vh rgb(236, 219, 186);
      box-shadow: 0px 0px 0.75vh 0.3vh rgba(236, 219, 186, 0.5);
    }
  }
`;
