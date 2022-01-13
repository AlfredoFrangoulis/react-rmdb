import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: .60rem;
        background-color: transparent;
        border-radius: .5rem;
    }
    
    ::-webkit-scrollbar-thumb{
        background-color: darkgrey;
        border-radius: .5rem;
    }
    
    ::-webkit-scrollbar-thumb:hover{
        background-color: #555;
        border-radius: .5rem;
    }

    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontBigS: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body{
        background-color: black;
        margin: 0;
        padding: 0;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }

        p{
            font-size: 1rem;
            color: var(--white);
        }
    }

`;