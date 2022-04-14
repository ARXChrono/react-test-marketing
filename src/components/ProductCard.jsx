import React from 'react'
import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const StyledTabs = styled(Tabs)`
  .react-tabs {
    &__tab-list {
      display: flex;
      list-style-type: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.background};
      padding: 0 ${({ theme }) => theme.gutter.lg};
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 2rem;
      }
    }
    &__tab {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 1rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray};
      border-bottom: 0.2rem solid transparent;
      transition: color 0.25s ease;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.dark};
      }
      &--selected {
        color: ${({ theme }) => theme.colors.dark};
        border-bottom: 0.2rem solid ${({ theme }) => theme.colors.interact};
      }
    }
    &__tab-panel--selected {
      max-width: 750px;
      padding: 2rem 0;
      font-size: 0.8rem;
      font-weight: 200;
      letter-spacing: 0.4px;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.darkerGray};
    }
  }
`

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2.25rem;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
  }
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 3.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }
`

const ProductCard = styled.article`
  background: white;
  border-radius: 4px;
  width: 100%;
  max-width: 1400px;
  min-height: 900px;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    height: 100vh;
  }
`

const BackButton = styled.a`
  display: flex;
  font-size: 0.9rem;
  font-weight: 300;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 1.5rem 0;
  }
`

const Details = styled.div`
  flex: 1 1 60%;
  border-right: 1px solid ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 1 1 100%;
  }
`

const Pricing = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  font-weight: 500;
  font-family: 'Cabin', sans-serif;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.6rem;
  }
`
const PricingSale = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: line-through;
  margin-left: 1.5rem;
  font-family: 'Cabin', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.6rem;
  }
`

const Image = styled.div`
  flex: 1 1 40%;
  padding: 2rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem;
    flex: 1 1 100%;
  }
`

const Wrapper = styled.div`
  padding: 0 ${({ theme }) => theme.gutter.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
  }
`

const ProductCardComponent = ({ product }) => {
  const { title, subtitle, tabs = [], price } = product
  return (
    <ProductCard>
      <Details>
        <Wrapper>
          <BackButton>
            <MdKeyboardBackspace />
            All Products
          </BackButton>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
        <StyledTabs>
          <TabList>
            {tabs.map((tab) => (
              <Tab>{tab.label}</Tab>
            ))}
          </TabList>
          <Wrapper>
            {tabs.map((tab) => (
              <TabPanel>{tab.content}</TabPanel>
            ))}
          </Wrapper>
        </StyledTabs>
        <Wrapper>
          <Pricing>${price.sale}</Pricing>
          <PricingSale>${price.regular}</PricingSale>
        </Wrapper>
      </Details>
      <Image></Image>
    </ProductCard>
  )
}

export default ProductCardComponent
