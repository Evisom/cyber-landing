import styled from 'styled-components/macro'
import React, { useContext, useState } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { keyframes } from 'styled-components'
import { ReactComponent as Path } from '../../images/pathRed.svg'
import { isMobileQuery, isTabletQuery } from '../../constants'
import { allProductsData } from '../../data/productsData'
import { Composition } from '../Composition'
import { DataContext } from '../../contexts'
import { AccordionItem } from './AccordionItem'
import { iconList, productCategoryList } from '../../data/allData'

const headerTextAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  25% {
    opacity: 0;
    transform: translateY(40px);
  }
  40% {
    opacity: 1;
    transform: translateY(0);
  }
`
const descriptionTextAnimation = keyframes`
 0% {
    opacity: 0;
    transform: translateY(40px);
  }
  40% {
    opacity: 0;
    transform: translateY(40px);
  }
  60% {
    opacity: 1;
    transform: translateY(0);
  }
`
const Container = styled.div`
  height: 70%;
  width: 900px;
  margin-top: 90px;
  font-family: Gerbera;
  font-style: normal;
  margin-left: 50px;
  @media (${isTabletQuery}) {
    width: 90%;
    margin-top: 120px;
  }
  @media (${isMobileQuery}) {
    margin-left: 0;
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
  color: #151524;
  @media (${isTabletQuery}) {
    font-size: 16px;
  }
  @media (${isMobileQuery}) {
    margin: 10px 0;
  }
`

const DescriptionBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 40px;
  animation: 1.3s ${descriptionTextAnimation} linear;
  @media (${isTabletQuery}) {
    grid-template-columns: 1fr;
    animation: none;
  }
`
const DescriptionBoxItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
  @media (${isTabletQuery}) {
    width: auto;
  }
`
const DescriptionBoxItemValue = styled.div`
  margin-left: 20px;
`

const StyledPath = styled(({ active, ...props }) => <Path {...props} />)`
  color: ${(p) => (p.active ? '#FF2727' : '#00C0F3')};
  transition: 300ms color cubic-bezier(0, 0, 0.2, 1);
`
const ItemChooseWrapper = styled.div`
  display: flex;
  font-family: Cervo, Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  padding-bottom: 40px;
  flex-wrap: wrap;
  @media (${isTabletQuery}) {
    display: none;
  }
`
const ItemChoose = styled.div`
  position: relative;
  width: 150px;
`
const ProductImage = styled.div`
  position: absolute;
  background: url("${(p) => p.src}") center center no-repeat;
  background-size: contain;
  width: 135px;
  height: 135px;
  top: ${(p) => p.top}px;
  left: ${(p) => p.left}px;
`
const ItemChooseValue = styled.div`
  margin-top: 10px;
  margin-left: -17px;
  margin-right: 17px;
  color: ${(p) => p.active && '#E30B17'};
  transition: 300ms color cubic-bezier(0, 0, 0.2, 1);
`
const DescriptionImage = styled.div`
  background: url("${(p) => p.src}") center 0 no-repeat;
  background-size: contain;
  min-width: 40px;
  height: 40px;
`

const AnimatedTitle = styled.div`
  animation: 1.3s ${headerTextAnimation} linear;
  @media (${isMobileQuery}) {
    animation: none;
  }
`

export const ProductDescription = ({ product }) => {
  const [activeProduct, setActiveProduct] = useState(0)
  const { allProduct, setAllProduct, setAllProductTaste, allProductTaste } = useContext(DataContext)
  const currentProduct = allProductsData[allProduct || 0]
  const currentProductTaste = currentProduct.items[allProductTaste || 0]
  const isTablet = useMediaQuery(`(${isTabletQuery})`)

  const chooseProductType = (index) => {
    setActiveProduct(index)
    setAllProduct(index)
    setAllProductTaste(0)
  }
  if (isTablet) {
    return (
      <Container>
        {allProductsData.map((x, index) => (
          <AccordionItem product={x} index={index} key={x.name} />
        ))}
      </Container>
    )
  }
  return (
    <Container>

      <ItemChooseWrapper>
        {productCategoryList.map((item, index) => (
          <ItemChoose key={item.image} onClick={() => chooseProductType(index)}>
            <ProductImage src={item.image} left={item.leftOffset} top={item.topOffset} />
            {/*<StyledPath active={activeProduct === index} />*/}
            <ItemChooseValue active={activeProduct === index}>{item.name}</ItemChooseValue>
          </ItemChoose>
        ))}
      </ItemChooseWrapper>

      <AnimatedTitle key={currentProductTaste.name}>
        <Title>{currentProductTaste.name}</Title>
        <TitleBlack> {currentProduct.tagline}</TitleBlack>
      </AnimatedTitle>
      <DescriptionBox key={allProduct}>
        {currentProduct.details.map((item, index) => (
          <DescriptionBoxItem key={item.description}>
            <DescriptionImage src={iconList[index]} />
            <DescriptionBoxItemValue>{item.description}</DescriptionBoxItemValue>
          </DescriptionBoxItem>
        ))}
      </DescriptionBox>
      <Composition
        name={currentProductTaste.name}
        taste={currentProductTaste.taste}
        composition={currentProductTaste.composition}
      />
    </Container>
  )
}
