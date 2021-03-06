import { css, Global } from '@emotion/react'

const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        transition: background-color 1s ease;
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
