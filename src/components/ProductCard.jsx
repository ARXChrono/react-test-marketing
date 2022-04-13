import React from 'react'
import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  font-weight: 500;
`

export const ProductCard = styled.article`
  background: white;
  border-radius: 4px;
  width: 100%;
  max-width: 1100px;
  display: flex;
`

export const BackButton = styled.a`
  display: flex;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.dark};
  align-items: center;
  margin: 3rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
  > svg {
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.colors.gray};
    margin-right: 0.5rem;
  }
  &:hover {
    svg {
      transform: translateX(-0.25rem);
    }
    filter: brightness(1.1);
  }
`

export const Details = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 2rem 4rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Image = styled.div`
  height: 100%;
  width: 30%;
  flex-grow: 1;
  padding: 1rem 4rem;
  background: pink;
`

const ProductCardComponent = ({ product }) => (
  <ProductCard>
    <Details>
      <BackButton>
        <MdKeyboardBackspace />
        All Products
      </BackButton>
      <Title>{product.title}</Title>
      <Subtitle>{product.subtitle}</Subtitle>
    </Details>
    <Image></Image>
  </ProductCard>
)

export default ProductCardComponent
