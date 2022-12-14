import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`


:root {
    --white: #FDFDFD;
    --gray-200: #8d8d99;
    --gray-600: #34343a;
    --gray-400: #202024;
    --gray-700: #121214;
    --gray-740: #121214;
    --gray-800: #0a0a0c;
    --gray-900: #000000;
    --purple: #6833E4;
    --green: #00875f;
    --green-storage: #04D361;
    --red-500: #F75A68;
}


* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    list-style: none;
}

body{
  background: var(--gray-700);

}
hr{
  border: 1px solid var(--purple);
}
.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .react-modal-content {
    width: 100%;
    max-width: 80%;
    background: var(--background);
    padding: 3rem;
    position: fixed;
    border-radius: 0.24rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .backButton{
    background: none;
    border: none;
      .uil-arrow-left{
        color: var(--gray-200);
        font-size: 3rem;

      }
  }
`

