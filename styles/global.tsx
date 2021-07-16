import { Global, css } from '@emotion/react';

export const GlobalStyle = (props: {}) => (
  <Global
    {...props}
    styles={css`
      :root {
        --bg-canvas: #121827;
        --bg-canvas-opacity: rgb(18, 24, 39, 0.5);
        --bg-primary: #1f2837;
        --bg-secondary: #818cf8;
        --hover: #6b7280;
        --button-1: -webkit-linear-gradient(#809df5, #9a80d0);
        --badge-1: #3b82f6;
        --badge-2: #7c3aed;
        --font-color: #c9d1d9;
        --font-secondary-color: #4b5561;
        --primary-color: #f0f6fc;
        --border-color: #6b7280;
        --dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
      }
      * {
        box-sizing: border-box;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        -webkit-font-smoothing: antialiased;
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
        min-height: -webkit-fill-available;
      }
      /* Image Select Highlight */
      img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
    `}
  />
);
