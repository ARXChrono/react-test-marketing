import React from 'react'
import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const StyledTabs = styled(Tabs)`
  .react-tabs {
    &__tab-list {
      display: flex;
      list-style-type: none;
      padding-left: 0;
    }
    &__tab {
      text-transform: uppercase;
    }
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 3.5rem;
`

const ProductCard = styled.article`
  background: white;
  border-radius: 4px;
  width: 100%;
  max-width: 1400px;
  min-height: 900px;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px;
  display: flex;
`

const BackButton = styled.a`
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

const Details = styled.div`
  flex: 1 1 60%;
  padding: 2rem 4rem 0;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
`

const Image = styled.div`
  flex: 1 1 40%;
  padding: 1rem 4rem;
  background: pink;
`

const ProductCardComponent = ({ product }) => {
  console.log(product)
  return (
    <ProductCard>
      <Details>
        <BackButton>
          <MdKeyboardBackspace />
          All Products
        </BackButton>
        <Title>{product.title}</Title>
        <Subtitle>{product.subtitle}</Subtitle>
        <StyledTabs>
          <TabList>
            {product.tabs.map((tab) => (
              <Tab>{tab.label}</Tab>
            ))}
          </TabList>
          {product.tabs.map((tab) => (
            <TabPanel>{tab.content}</TabPanel>
          ))}
        </StyledTabs>
      </Details>
      <Image></Image>
    </ProductCard>
  )
}

export default ProductCardComponent
