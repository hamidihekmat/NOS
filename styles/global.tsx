import { Global, css } from '@emotion/react';

export const GlobalStyle = (props: {}) => (
  <Global
    {...props}
    styles={css`
      :root {
        --bg-canvas: #0d1117;
        --bg-primary: #161b22;
        --bg-secondary: #1f6feb;
        --font-color: #c9d1d9;
        --font-secondary-color: #4b5561;
        --primary-color: #f0f6fc;
        --border-color: #30363d;
        --dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
      }
      * {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      html {
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        background: var(--bg-canvas);
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        background: var(--bg-canvas);
        color: var(--primary-color);
      }
      /* Image Select Highlight */
      img {
        -khtml-user-select: none;
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }
    `}
  />
);
