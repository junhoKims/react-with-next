import { css, Global } from '@emotion/react'

const globalStyles = (
  <Global
    styles={css`
      html {
        font-size: 16px;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif, -apple-system;
        transition: background-color 1s ease;
        background-color: #11ffcc;
      }

      ::selection {
        background: #ffe69b;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)

export default globalStyles
