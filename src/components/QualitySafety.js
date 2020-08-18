import React from 'react'
import styled from 'styled-components/macro'
import lines from '../images/linesSecond.svg'
import { Title } from './Title'
import safetyLogo1 from '../images/safetyLogo1.svg'
import safetyLogo2 from '../images/safetyLogo2.svg'
import safetyLogo3 from '../images/safetyLogo3.svg'
import safetyLogo4 from '../images/safetyLogo4.svg'
import { isMobileQuery, isTabletQuery } from '../constants'

const Container = styled.div`
  position: relative;
  height: auto;
  min-height: 800px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isTabletQuery}) {
    min-height: 600px;
  }
`
const Content = styled.div`
  position: relative;
  max-width: 1500px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: Gerbera;
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.3px;
  z-index: 0;
  overflow: visible;
  color: white;
  @media (${isMobileQuery}) {
    padding: 0 20px;
  }
`
const Lines = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("${lines}") center 20% no-repeat;
  background-size: cover;
    pointer-events: none;

`
const TitleWhite = styled(Title)`
  color: white;
  margin-right: 10px;
`
const TitleRed = styled(Title)`
  color: #e30b17;
`
const TitleBlue = styled(Title)`
  color: #00c0f3;
  font-size: 24px;
  margin-right: 10px;
  @media (${isMobileQuery}) {
    font-size: 24px;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin: 50px 0 30px;
  @media (${isMobileQuery}) {
    flex-direction: column;
  }
`
const LogosWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin: 100px 0;
  @media (${isMobileQuery}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 30px;
    margin: 50px 0;
    width: 90%;
  }
`
const More = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  padding-bottom: 50px;
`

export const QualitySafety = () => {
  return (
    <Container>
      <Lines />

      <Content>
        <TitleWrapper>
          <TitleWhite>Гарантируем</TitleWhite>
          <TitleRed>безопасность</TitleRed>
        </TitleWrapper>
        <div>Наша продукция соответствует самым строгим стандартам качества</div>
        <LogosWrapper>
          <img alt="img" src={safetyLogo1} />
          <img alt="img" src={safetyLogo2} />
          <img alt="img" src={safetyLogo3} />
          <img alt="img" src={safetyLogo4} />
        </LogosWrapper>
        <More href="https://valeolab.com">
          <TitleBlue>Узнать больше о производстве ⟶</TitleBlue>
        </More>
      </Content>
    </Container>
  )
}
