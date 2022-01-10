import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Header = styled.h1`
  width: 100%;
  top: 0;
  font-size: 4.5vh;
  padding: 1.5vh 0;
  background-color: rgb(25, 25, 25);
  color: rgb(236, 219, 186);
  text-shadow: 0px 0px 0.5vh rgb(236, 219, 186);
  box-shadow: 0px 0px 1vh 0.1vh rgb(236, 219, 186);
  display: flex;
  align-items: center;
  z-index: 15;
  cursor: pointer;

  i {
    margin-left: 2.5vh;
    cursor: pointer;
    ${({ open }) => (open ? "transform: rotate(90deg);" : "")};
    transition: ease-in-out 200ms;
    :hover {
      text-shadow: 0px 0px 1.5vh rgb(236, 219, 186);
      transition: ease-in-out 200ms;
    }
  }

  span {
    margin-left: 2.5vh;
    transition: ease-in-out 200ms;
    :hover {
      text-shadow: 0px 0px 1.5vh rgb(236, 219, 186);
    }
  }
`;

export const NavbarArea = styled.div`
  height: 100%;
  width: auto;
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0,1)")};
  background-color: rgba(25, 25, 25, 0.9);
  box-shadow: 0px 0px 1vh 0.1vh rgb(236, 219, 186);
  transform-origin: left;
  transition: transform 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
  position: fixed;

  @media (max-width: 1200px) {
    width: 100%;
    transform-origin: top;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(1,0)")};
  }
`;

export const NavbarItem = styled.div`
  width: auto;
  height: auto;
  padding: 3vh 3vh;
  font-size: 3vh;
  font-weight: 700;
  color: rgb(236, 219, 186);
  text-shadow: 0px 0px 0.3vh rgb(236, 219, 186);
  border: solid rgba(236, 219, 186, 0.8) 1px;
  border-right: 0;
  border-left: 0;
  border-top: 0;
  border-radius: 5px;
  transition: ease-in-out 100ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 100ms ease-in-out;

  :hover {
    text-shadow: 0px 0px 0.5vh rgb(236, 219, 186);
    box-shadow: inset 0px 0px 0.5vh 0.1vh rgb(236, 219, 186);
  }
`;

export const SkyBackground = styled.div`
  width: 100%;
  background-image: url(https://ak.picdn.net/shutterstock/videos/1020936652/thumb/1.jpg?ip=x480);
  overflow-y: auto;
`;

export const Content = styled.div`
  margin-top: 5vh;
  margin-bottom: 20vh;
  width: 100%;
  display: flex;
  background: transparent;
  justify-content: center;
`;
