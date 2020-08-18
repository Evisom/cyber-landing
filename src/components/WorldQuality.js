import styled from 'styled-components/macro'
import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Title } from './Title'
import sportPartners from '../images/sportPartners.svg'
import { isMobileQuery, isTabletQuery } from '../constants'
import { worldQualityItems } from '../data/allData'

const Container = styled.div`
  height: auto;
  min-height: 800px;
  width: 100%;
  background-color: #daf7ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isMobileQuery}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`
const Content = styled.div`
  max-width: 100%;
  display: flex;
  width: 1500px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: Gerbera;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #151524;
  margin-bottom: 80px;
  @media (${isTabletQuery}) {
    padding: 0 30px;
  }
  @media (${isMobileQuery}) {
    min-width: auto;
    padding: 0 20px;
  }
`
const StyledTitle = styled(Title)`
  @media (${isMobileQuery}) {
    text-align: start;
  }
`
const TitleRed = styled(StyledTitle)`
  color: #e30b17;
`
const TitleWrapper = styled.div`
  margin-top: 80px;
`
const LongDescription = styled.div`
  max-width: 780px;
  width: auto;
  margin: 30px 0;
  @media (${isMobileQuery}) {
    text-align: start;
  }
`
const Item = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  font-size: 16px;
`
const ItemsWrapper = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  width: 80%;
  padding-bottom: 80px;
  border-bottom: 1px solid #151524;
  @media (${isMobileQuery}) {
    flex-direction: column;
    width: 100%;
  }
`
const ItemValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 20px;
`
const ItemUnitText = styled(Title)`
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  margin-left: 10px;
`
const SmallerTitle = styled(Title)`
  font-size: 36px;
`
const LongDescriptionBottom = styled(LongDescription)`
  font-size: 16px;
`

export const WorldQuality = () => {
  const isMobile = useMediaQuery(`(${isMobileQuery})`)

  return (
    <Container id="aboutUs">
      <Content>
        <TitleWrapper>
          <StyledTitle>Международное качество</StyledTitle>
          <TitleRed>С сибирским характером!</TitleRed>
        </TitleWrapper>
        <LongDescription>
          Мы родились в Сибири и бросили себе жесткий вызов – стать ведущим производителем
          натуральных продуктов для поддержки современного человека.
        </LongDescription>
        <ItemsWrapper>
          {worldQualityItems.map((item) => (
            <Item key={item.unit}>
              <ItemValueWrapper>
                <Title> {item.value}</Title>
                <ItemUnitText> {item.unit}</ItemUnitText>
              </ItemValueWrapper>
              <div>{item.description}</div>
            </Item>
          ))}
        </ItemsWrapper>
        <SmallerTitle>Нам доверяют сильнейшие</SmallerTitle>
        <LongDescriptionBottom>
          Мы – официальный партнер Олимпийского комитета России в области инноваций и официальный
          спонсор XXIX Всемирной зимней универсиады – 2019 в г. Красноярске в категории «Обогащенные
          продукты питания».
        </LongDescriptionBottom>
        <img src={sportPartners} alt="img" height={isMobile ? 96 : 'auto'} />
      </Content>
    </Container>
  )
}
