import styled from 'styled-components/macro'
import React from 'react'
import cybersport from '../images/cybersport.svg'
import { isMobileQuery } from '../constants'

const Container = styled.div`
  height: auto;
  min-height: 480px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  max-width: 1300px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  @media (${isMobileQuery}) {
    overflow-x: auto;
  }
`

const TitleBlack = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-size: 52px;
  line-height: 102%;
  text-align: center;
  text-transform: uppercase;
  color: #151524;
`
const TitleRed = styled(TitleBlack)`
  color: #e30b17;
  margin-right: 8px;
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin-top: 80px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 50px 0;
  height: auto;
  @media (${isMobileQuery}) {
    justify-content: flex-start;
  }
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  width: 43%;
  min-width: 250px;
  font-family: Gerbera;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
  color: #151524;
  @media (${isMobileQuery}) {
    margin: 0 30px;
  }
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  width: 100%;
`
const Divider = styled.div`
  width: 2px;
  height: auto;
  background-color: #151524;
`
const StyledIcon = styled.img`
  margin-bottom: 20px;
`
const StyledDescription = styled.div`
  margin-bottom: 20px;
`

export const MediaAboutUs = () => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <TitleRed>Сми</TitleRed>
          <TitleBlack>О нас</TitleBlack>
        </TitleWrapper>
        <Wrapper>
          <Item>
            <ItemInfo>
              <StyledIcon src={cybersport} />
              <StyledDescription>
                «Сегодня все больше игроков стремятся следить за питанием и поддерживать хорошую
                физическую форму. И дело тут не только в стремлении лучше выглядеть — состояние
                здоровья действительно может напрямую влиять на внутриигровые показатели. Давайте
                разбираться, как можно не только повысить рейтинг, но и резко поменять свой образ
                жизни. »
              </StyledDescription>
            </ItemInfo>
            <div>cybersport.ru</div>
          </Item>
          <Divider />
          <Item>
            <ItemInfo>
              <StyledIcon src={cybersport} />
              <StyledDescription>
                «Важнейшие «рабочие инструменты» киберспортсмена и геймера — это не только компьютер
                с девайсами, но и хорошее зрение, скорость реакции и концентрация внимания. Мы
                собрали несколько советов, которые помогут поддержать и сохранить эти возможности
                организма. »
              </StyledDescription>
            </ItemInfo>
            <div>cyber.sports.ru</div>
          </Item>
        </Wrapper>
      </Content>
    </Container>
  )
}
