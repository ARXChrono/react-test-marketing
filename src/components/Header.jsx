import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

const ResetCSS = createGlobalStyle`
  body {
    *, *::before, *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
    }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
  
`

const GlobalCSS = createGlobalStyle`
  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }
  
`

const Header = ({ title = '' }) => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Helmet title={title}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  )
}

export default Header
