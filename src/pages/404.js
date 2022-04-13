import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppWrapper, Heading } from './styles'
import Helmet from 'react-helmet'
import theme from '../theme'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }
`
const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Helmet title="Not Found"></Helmet>
      <AppWrapper>
        <Heading>💀 404 Not Found 💀 </Heading>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default NotFoundPage
