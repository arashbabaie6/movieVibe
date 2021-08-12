import { createGlobalStyle } from 'styled-components';
import SourceSansProRegular from '../public/fonts/SourceSansPro-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'SourceSansPro-Regular';
      src: url(${SourceSansProRegular}) format("ttf");
  }

  body {
    font-family: 'SourceSansPro-Regular';
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.colors.black};
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    .get-darker {
      filter: brightness(0.8);
    }

    .pointer {
      cursor: pointer;
    }
  }

   /* scroll width */
   ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.gray3};
  }

  /* scroll Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray3};
    border-radius: 6px;
  }

  /* scroll Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray1};
    border-radius: 6px;
  }
`;

export default GlobalStyle