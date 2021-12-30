import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        font-family: sans-serif;
        background-color: rgb(25, 25, 25);
        ::-webkit-scrollbar {
            width: 5px;
         
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgb(236, 219, 186);   
            border-radius: 10px;
        }
    }
`;

export default GlobalStyle;
