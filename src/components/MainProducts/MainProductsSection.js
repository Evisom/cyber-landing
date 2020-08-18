import styled from 'styled-components/macro'
import React, { useContext } from 'react'
import { ProductDescription } from './ProductDescription'
import { Product } from '../Product'
import { isMobileQuery, isTabletQuery } from '../../constants'
import { mainProductData } from '../../data/productsData'
import { DataContext } from '../../contexts'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 750px;
  background-color: white;
  transform: skewY(-1.5deg);
  margin-top: -30px;
  display: flex;
  justify-content: center;
  z-index: 2;
  align-items: flex-start;
`
const Content = styled.div`
  max-width: 100%;
  transform: skewY(1.5deg);
  display: flex;
  width: auto;
  justify-content: space-around;
  padding-bottom: 50px;
  @media (${isMobileQuery}) {
    min-width: auto;
    flex-direction: column;
    align-items: center;
  }
`
const TitleWrapper = styled.div`
  display: none;
  @media (${isMobileQuery}) {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
`
const Title = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-weight: 500;
  font-size: 60px;
  line-height: 102%;
  text-transform: uppercase;
  color: #e30b17;
  @media (${isTabletQuery}) {
    font-size: 36px;
  }
`
const TitleBlack = styled(Title)`
  color: black;
  @media (${isTabletQuery}) {
    font-size: 16px;
  }
`

export const MainProductsSection = () => {
  const { mainProduct } = useContext(DataContext)
  const product = mainProductData[mainProduct]
  const currentProductTaste = mainProductData[mainProduct].items[0]

  return (
    <Container id="products">
      <Content>
        <TitleWrapper>
          <Title>{currentProductTaste.name}</Title>
          <TitleBlack>{product.tagline}</TitleBlack>
        </TitleWrapper>
        <Product product={product} />
        <ProductDescription product={product} />
      </Content>
    </Container>
  )
}
