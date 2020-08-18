import styled from 'styled-components/macro'
import React from 'react'
import { isMobileQuery, isTabletQuery } from '../../constants'
import { Composition } from '../Composition'

const Container = styled.div`
  height: 70%;
  width: 780px;
  margin-top: 90px;
  font-family: Gerbera;
  font-style: normal;
  font-size: 16px;
  margin-left: 50px;
  @media (${isTabletQuery}) {
    width: 50%;
    margin-left: 0;
  }
  @media (${isMobileQuery}) {
    width: 90%;
    margin-top: 50px;
    margin-left: 0;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  @media (${isMobileQuery}) {
    display: none;
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

const Text = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 102%;
  text-transform: uppercase;
  color: #151524;
  margin-left: 25px;
  @media (${isTabletQuery}) {
    font-size: 12px;
    margin-left: 5px;
  }
`
const Text2 = styled.div`
  font-family: Cervo;
  font-style: normal;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #999999;
  width: 120px;
`
const RegularText = styled.div`
  margin: 10px 0;
`
const Divider = styled.div`
  height: 1px;
  background-color: #999999;
  flex: 1;
  margin: 20px 0;
`
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
`
const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
`
const InfoBoxItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const InfoBoxName = styled.div`
  font-family: Cervo;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 0.002em;
  text-transform: uppercase;
  color: #151524;
`
const InfoBoxValue = styled(Title)`
  font-style: normal;
  font-size: 40px;
  text-transform: none;
  display: flex;
  align-items: baseline;
`
const InfoBoxValueWord = styled(InfoBoxValue)`
  font-size: 25px;
  text-transform: none;
`
const DescriptionBox = styled(InfoBox)`
  width: auto;
  @media (${isTabletQuery}) {
    flex-direction: column;
  }
`
const DescriptionBoxItem = styled(InfoBoxItem)`
  width: 30%;
  @media (${isTabletQuery}) {
    width: 100%;
  }
`

export const ProductDescription = ({ product }) => {
    const currentProductTaste = product.items[0]

    return (
        <Container>
            <TitleWrapper>
                <Title>{currentProductTaste.name}</Title>
                <Text>{product.shortDescription}</Text>
            </TitleWrapper>
            <TitleBlack>{product.tagline}</TitleBlack>
            <RegularText>{product.description}</RegularText>
            <Wrapper2>
                <Text2>{product.form}</Text2>
                <Divider />
            </Wrapper2>
            <InfoBox>
                {product.components.map((item) => (
                    <InfoBoxItem key={item.name}>
                        <InfoBoxName>{item.name}</InfoBoxName>
                        <InfoBoxValue>
                            {item.value} <InfoBoxValueWord>{item.unit}</InfoBoxValueWord>
                        </InfoBoxValue>
                    </InfoBoxItem>
                ))}
            </InfoBox>
            <Divider />
            <DescriptionBox>
                {product.details.map((item) => (
                    <DescriptionBoxItem key={item.title}>
                        <InfoBoxName>{item.title}</InfoBoxName>
                        <RegularText>{item.description}</RegularText>
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
