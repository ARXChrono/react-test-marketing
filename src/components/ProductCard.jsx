import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Select from 'react-select'
import { StaticImage } from 'gatsby-plugin-image'
import { MdKeyboardBackspace } from 'react-icons/md'
import toast from 'react-hot-toast'

const rotate = keyframes`
  0% { transform: rotate(90deg) }
  100% { transform: rotate(449deg) }
`

const Spinner = styled.span`
  margin-left: 0.5rem;
  display: flex;
  animation: ${rotate} 1.3s infinite cubic-bezier(0.63, 0.09, 0.32, 0.9);
  border-radius: 50%;
  position: relative;
  will-change: transform;
  height: 1rem;
  width: 1rem;
  border-top: 0.225rem solid rgba(255, 255, 255, 1);
  border-right: 0.225rem solid rgba(255, 255, 255, 1);
  border-bottom: 0.225rem solid rgba(255, 255, 255, 1);
  border-left: 0.225rem solid rgba(255, 255, 255, 0.5);
`

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
      font-size: 0.75rem;
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
      min-height: 210px;
      padding: 2rem 0;
      font-size: 0.8rem;
      font-weight: 200;
      letter-spacing: 0.4px;
      line-height: 1.9;
      color: ${({ theme }) => theme.colors.darkerGray};
      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        min-height: unset;
      }
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
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.9rem;
  }
`

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 0.75rem;
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
    box-shadow: unset;
  }
`

const BackButton = styled.a`
  display: flex;
  font-size: 0.8rem;
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
  font-size: 1.8rem;
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
  font-size: 1.8rem;
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
  padding: 2rem 0;
  align-items: center;
  user-select: none;
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
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1.25rem 5rem;
  font-weight: 500;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.interact};
  cursor: pointer;
  transition: background 0.2s ease;
  min-width: 246px;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    width: 100%;
  }
  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.interactHover};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`

const ProductCardComponent = ({ product }) => {
  const { title, subtitle, tabs = [], price, colors } = product
  const [activeColor, setActiveColor] = useState('black')
  const [isloading, setisLoading] = useState(false)
  const handleChange = (e) => {
    setActiveColor(e.value)
  }
  const handleCartClick = () => {
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
      toast.success('Item added to cart!')
    }, 2000)
  }

  return (
    <ProductCard>
      <Details>
        <Container>
          <BackButton>
            <MdKeyboardBackspace />
            All products
          </BackButton>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Container>
        <StyledTabs>
          <TabList>
            {tabs.map(({ label }, index) => (
              <Tab key={`tab__label_${index}`}>{label}</Tab>
            ))}
          </TabList>
          <Container>
            {tabs.map(({ content }, index) => (
              <TabPanel key={`tab__content_${index}`}>{content}</TabPanel>
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
            />
          ) : (
            <StaticImage
              src={'../images/brown.jpg'}
              alt={title}
              height={256}
              breakpoints={[750, 1080, 1366, 1920]}
              placeholder="blurred"
              layout="constrained"
            />
          )}
        </ImageMobile>
        <BuyWrapper>
          <Container>
            <AddToCart onClick={handleCartClick} disabled={isloading}>
              {isloading ? (
                <>
                  {'Loading'} <Spinner />
                </>
              ) : (
                'Add to cart'
              )}
            </AddToCart>
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
          />
        ) : (
          <StaticImage
            src={'../images/brown.jpg'}
            alt={title}
            breakpoints={[750, 1080, 1366, 1920]}
            placeholder="blurred"
            layout="constrained"
          />
        )}
      </Image>
    </ProductCard>
  )
}

export default ProductCardComponent
