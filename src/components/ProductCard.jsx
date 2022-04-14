import React, { useState } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Select from 'react-select'
import { StaticImage } from 'gatsby-plugin-image'
import { MdKeyboardBackspace } from 'react-icons/md'

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
      padding: 0.75rem 1.25rem;
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
      min-height: 200px;
      padding: 2rem 0;
      font-size: 0.8rem;
      font-weight: 200;
      letter-spacing: 0.4px;
      line-height: 1.7;
      color: ${({ theme }) => theme.colors.darkerGray};
    }
  }
`

const StyledSelect = styled(Select)`
  max-width: 160px;
  font-size: 0.85rem;
  font-weight: 300;
  text-transform: capitalize;
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
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
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
  min-height: 700px;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 10px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    height: 100%;
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
  flex: 1 1 55%;
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

const ImageMobile = styled.div`
  display: flex;
  max-height: 256px;
  justify-content: center;
  margin: 1rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const Image = styled.div`
  flex: 1 1 45%;
  padding: 2.5rem 0;
  align-items: center;
  .gatsby-image-wrapper {
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`

const Container = styled.div`
  padding: 0 ${({ theme }) => theme.gutter.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 2rem;
  }
`

const ColorsHeading = styled.h4`
  margin-top: 3rem;
  font-weight: 500;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darkerGray};
  text-transform: uppercase;
  padding-bottom: 0.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 1.5rem;
  }
`

const BuyWrapper = styled.div`
  margin-top: 3rem;
  padding: 3rem 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.background};
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 1.5rem;
  }
`

const AddToCart = styled.a`
  display: inline-flex;
  color: white;
  padding: 1.5rem 6rem;
  font-weight: 500;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.interact};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`

const ProductCardComponent = ({ product }) => {
  const { title, subtitle, tabs = [], price, colors } = product
  const [activeColor, setActiveColor] = useState('black')
  const handleChange = (e) => {
    setActiveColor(e.value)
  }

  return (
    <ProductCard>
      <Details>
        <Container>
          <BackButton>
            <MdKeyboardBackspace />
            All Products
          </BackButton>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Container>
        <StyledTabs>
          <TabList>
            {tabs.map((tab) => (
              <Tab>{tab.label}</Tab>
            ))}
          </TabList>
          <Container>
            {tabs.map((tab) => (
              <TabPanel>{tab.content}</TabPanel>
            ))}
          </Container>
        </StyledTabs>
        <Container>
          <Pricing>${price.sale}</Pricing>
          <PricingSale>${price.regular}</PricingSale>
          <ColorsHeading>Colors</ColorsHeading>
          <StyledSelect
            options={colors}
            noOptionsMessage={'No options available'}
            isSearchable={false}
            placeholder={activeColor}
            components={{
              IndicatorSeparator: () => null,
            }}
            onChange={handleChange}
          />
        </Container>
        <ImageMobile>
          {activeColor === 'black' ? (
            <StaticImage
              src={'../images/black.jpg'}
              alt={title}
              height={256}
              breakpoints={[750, 1080, 1366, 1920]}
              placeholder="blurred"
              layout="constrained"
              cropFocus="attention"
            />
          ) : (
            <StaticImage
              src={'../images/brown.jpg'}
              alt={title}
              height={256}
              breakpoints={[750, 1080, 1366, 1920]}
              placeholder="blurred"
              layout="constrained"
              cropFocus="attention"
            />
          )}
        </ImageMobile>
        <BuyWrapper>
          <Container>
            <AddToCart>Add To Cart</AddToCart>
          </Container>
        </BuyWrapper>
      </Details>
      <Image>
        {activeColor === 'black' ? (
          <StaticImage
            src={'../images/black.jpg'}
            alt={title}
            breakpoints={[750, 1080, 1366, 1920]}
            placeholder="blurred"
            layout="constrained"
            cropFocus="attention"
          />
        ) : (
          <StaticImage
            src={'../images/brown.jpg'}
            alt={title}
            breakpoints={[750, 1080, 1366, 1920]}
            placeholder="blurred"
            layout="constrained"
            cropFocus="attention"
          />
        )}
      </Image>
    </ProductCard>
  )
}

export default ProductCardComponent
