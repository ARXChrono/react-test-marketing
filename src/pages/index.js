import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppWrapper, ProductCard, Heading } from '../styles'
import Helmet from 'react-helmet'
import theme from '../theme'
import product from '../data'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: ${({ theme }) => theme.colors.background};
  }
`

const IndexPage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Helmet title={'hi'}></Helmet>
      <AppWrapper>
        <ProductCard>
          <Heading>{product.title}</Heading>
        </ProductCard>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default IndexPage
