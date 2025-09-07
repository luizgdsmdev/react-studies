import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
      *, body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        list-style: none;
        text-style: none;
      }
        body {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        list-style: none;
        text-style: none;
      }

    `;