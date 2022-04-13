import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppWrapper } from '../styles'
import Header from '../components/Header'
import theme from '../theme'
import product from '../data'
import ProductCard from '../components/ProductCard'

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
