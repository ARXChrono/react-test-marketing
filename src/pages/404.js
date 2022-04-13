import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppWrapper, Title404 } from '../styles'
import theme from '../theme'
import Header from '../components/Header'

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
