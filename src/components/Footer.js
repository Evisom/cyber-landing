import React from 'react'
import styled from 'styled-components/macro'
import { Container } from './Container'
import { Content } from './Content'
import { Title } from './Title'
import vkLogo from '../images/vkLogo.svg'
import siberianWellness from '../images/siberianWellness.svg'
import { Button } from './Button'
import { isMobileQuery, isTabletQuery } from '../constants'

const StyledContainer = styled(Container)`
  min-height: 450px;
`
const StyledContent = styled(Content)`
  @media (${isTabletQuery}) {
    padding: 50px 0;
  }
`
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #d3ecfe;
  text-align: left;
  @media (${isTabletQuery}) {
    width: 90%;
    font-size: 14px;
    justify-content: ${(p) => p.first && 'space-between'};
  }
  @media (${isMobileQuery}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const WrapperSecond = styled(Wrapper)`
  align-items: flex-start;
  margin-top: 60px;
`
const TitleBlue = styled(Title)`
  color: #00c0f3;
  margin-right: 45px;
`
const Description = styled.div`
  width: 70%;
  margin-left: 135px;
  @media (${isTabletQuery}) {
    margin-left: 45px;
  }
  @media (${isMobileQuery}) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`
const ButtonText = styled(Title)`
  display: flex;
  color: #00c0f3;
  font-size: 22px;
  @media (${isMobileQuery}) {
    font-size: 22px;
  }
`
const StyledImg = styled.img`
  margin-right: 15px;
`

export const Footer = () => {
  return (
    <StyledContainer color="#14253F">
      <StyledContent>
        <Wrapper first>
          <TitleBlue>Наша группа в vk</TitleBlue>
          <a href="https://vk.com/cyberbuild">
            <Button>
              <ButtonText>
                <StyledImg src={vkLogo} alt="img" />
                <div>Посмотреть</div>
              </ButtonText>
            </Button>
          </a>
        </Wrapper>
        <WrapperSecond>
          <img src={siberianWellness} alt="img" />
          <Description>
            <div>
              ООО «Лаборатория современного здоровья», Россия, 633004, Новосибирская обл., г.
              Бердск, ул. Химзаводская, 11/20, корпус 1.
            </div>
            <div>
              © 1996–2020 ООО «Международная компания «Сибирское здоровье». Все права защищены.
              Воспроизведение материалов данного сайта возможно при условии обязательного размещения
              активной ссылки на www.siberianhealth.com. Вся бизнес-информация, представленная на
              данном сайте, является недействительной для Республики Узбекистан
            </div>
          </Description>
        </WrapperSecond>
      </StyledContent>
    </StyledContainer>
  )
}
