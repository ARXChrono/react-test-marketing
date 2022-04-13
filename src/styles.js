import styled from 'styled-components'

export const AppWrapper = styled.main`
  margin: 0 auto;
  max-width: 1100px;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const Title404 = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 5rem;
  font-weight: 700;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 4px;
  background: white;
`
