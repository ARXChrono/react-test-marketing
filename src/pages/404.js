import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Header from '../components/Header'

const Title404 = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 5rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 4px;
  background: white;
`

const AppWrapper = styled.main`
  margin: 0 auto;
  max-width: 1400px;
  height: 100vh;
  display: flex;
  align-items: center;
`

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header title={'404 Not Found'} />
      <AppWrapper>
        <Title404>💀 404 Not Found 💀 </Title404>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default NotFoundPage
