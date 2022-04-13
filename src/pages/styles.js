import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
`

export const AppWrapper = styled.main`
  margin: 0 auto;
  max-width: 1100px;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const ProductCard = styled.article`
  background: white;
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
  max-width: 960px;
`
