import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

import { isMobileQuery, isTabletQuery } from '../../constants'
import { Product } from '../Product'
import { Composition } from '../Composition'
import { iconList } from '../../data/allData'

const AccordionDescriptionWrapper = styled.div`
  margin-left: 30px;
  @media (${isMobileQuery}) {
    margin: 0;
  }
`
const AccordionTitleWrapper = styled.div`
  display: ${(p) => (p.top ? 'none' : 'block')};

  @media (${isMobileQuery}) {
    display: ${(p) => (p.top ? 'block' : 'none')};
  }
`

const StyledAccordion = styled(Accordion)`
  box-shadow: none !important;
  border-top: 1px solid #1f3554;
  text-align: left;
  :last-child {
    border-bottom: 1px solid #1f3554;
  }
  .MuiAccordionDetails-root {
    @media (${isMobileQuery}) {
      padding: 0;
    }
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
const AccordionItemWrapper = styled(Container)`
  display: flex;
  margin: 0;
  width: 100%;
  @media (${isTabletQuery}) {
    width: 100%;
    margin: 0;
  }
  @media (${isMobileQuery}) {
    flex-direction: column;
    margin: 0;
  }
`
const QuestionTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #272727;
  padding: 10px 0;
  text-transform: uppercase;
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
  @media (${isTabletQuery}) {
    grid-template-columns: 1fr;
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
const DescriptionImage = styled.div`
  background: url("${(p) => p.src}") center 0 no-repeat;
  background-size: contain;
  min-width: 40px;
  height: 40px;
`
const DescriptionBoxItemValue = styled.div`
  margin-left: 20px;
`

export const AccordionItem = ({ product }) => {
  const [productTaste, setProductTaste] = useState(0)
  const currentProductTaste = product.items[productTaste]

  return (
    <StyledAccordion>
      <AccordionSummary expandIcon="+">
        <QuestionTitle>{product.name}</QuestionTitle>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionItemWrapper>
          <AccordionTitleWrapper top>
            <Title>{currentProductTaste.name}</Title>
            <TitleBlack>{product.tagline}</TitleBlack>
          </AccordionTitleWrapper>
          <Product
            product={product}
            isAllProductsSection
            onTasteChange={setProductTaste}
            tasteIndex={productTaste}
          />
          <AccordionDescriptionWrapper>
            <AccordionTitleWrapper>
              <Title>{currentProductTaste.name}</Title>
              <TitleBlack>{product.tagline}</TitleBlack>
            </AccordionTitleWrapper>
            <DescriptionBox key={product}>
              {product.details.map((item, index) => (
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
          </AccordionDescriptionWrapper>
        </AccordionItemWrapper>
      </AccordionDetails>
    </StyledAccordion>
  )
}
