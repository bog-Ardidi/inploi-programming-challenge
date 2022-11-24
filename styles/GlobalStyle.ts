import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    
    * {
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }

    body {
        font-size: 1.15em;
        margin: 0;
        padding: 0;

        @media(max-width: ${theme.mobile}) {
            font-size: small;
        }
    }

    p {
        opacity: 0.5;
        line-height: 1.5;
    }
`;

export default GlobalStyle;
