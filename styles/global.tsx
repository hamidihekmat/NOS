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
        --primary-color: #f0f6fc;
        --border-color: #30363d;
        --dropdown-shadow: 0 16px 32px rgba(1, 4, 9, 0.85);
      }

      html {
        font-family: sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
        background: var(--bg-canvas);
        color: var(--primary-color);
      }
    `}
  />
);
