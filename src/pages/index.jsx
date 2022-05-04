import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import theme from '../theme'
import product from '../data'
import ProductCard from '../components/ProductCard'
import { Toaster } from 'react-hot-toast'

const AppWrapper = styled.main`
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  padding: 1rem;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    padding: unset;
  }
`

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title={product.title} />
      <Toaster position="top-center" reverseOrder={false} />
      <AppWrapper>
        <ProductCard product={product} />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default IndexPage
