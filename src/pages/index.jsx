import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import theme from '../theme'
import product from '../data'
import ProductCard from '../components/ProductCard'

const AppWrapper = styled.main`
  margin: 0 auto;
  max-width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    height: 100%;
  }
`

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title={product.title} />
      <AppWrapper>
        <ProductCard product={product} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default IndexPage
