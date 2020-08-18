import styled from 'styled-components/macro'
import React from 'react'
import blackBackground from '../images/blackBackground.svg'
import advantage1 from '../images/advantage1.svg'
import advantage2 from '../images/advantage2.svg'
import advantage3 from '../images/advantage3.svg'
import advantage4 from '../images/advantage4.svg'
import advantage5 from '../images/advantage5.svg'
import advantage6 from '../images/advantage6.svg'
import chart from '../images/chart.svg'
import chartMobile from '../images/chartMobile.svg'
import { isMobileQuery, isTabletQuery } from '../constants'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -150px;
  @media (${isTabletQuery}) {
    margin-top: -60px;
    padding-top: 0;
  }
  @media (${isMobileQuery}) {
    margin-top: -50px;
    padding-top: 50px;
  }
`
const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Gerbera;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;

  text-align: right;
  letter-spacing: -0.5px;

  color: #151524;
`
const BackgroundWrapper = styled.div`
  width: 100%;
`
const BackgroundFirstContent = styled.div`
  max-width: 1300px;
  margin-bottom: -400px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isTabletQuery}) {
    margin: 0;
  }
`
const BackgroundFirst = styled.div`
  background: url("${blackBackground}") center 0 no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  min-height: 800px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isTabletQuery}) {
    background: none;
    min-height: 600px;
  }
  @media (${isMobileQuery}) {
    min-height: 760px;
  }
`
const BackgroundSecond = styled(BackgroundFirst)`
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: auto;
  margin: 70px 0;
  @media (${isMobileQuery}) {
    margin-left: -40px;
  }
`
const TitleRedBig = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-size: 75.39px;
  line-height: 102%;
  text-align: center;
  text-transform: uppercase;
  color: #e30b17;
  @media (${isMobileQuery}) {
    font-size: 50px;
  }
`
const TitleWhite = styled(TitleRedBig)`
  font-size: 52px;
  color: white;
  margin-right: -50px;
  margin-top: -10px;
  @media (${isMobileQuery}) {
    font-size: ${(p) => (p.bottom ? '40px' : '34px')};
    margin: ${(p) => p.bottom && 0};
  }
`
const Table = styled.div`
  display: grid;
  max-width: 100vw;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  gap: 20px;
  font-family: Gerbera;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
  padding: 0 30px;

  @media (${isTabletQuery}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (${isMobileQuery}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const TableItem = styled.div`
  height: 100%;
  width: 100%;
  color: black;
  background-color: white;
  padding: 30px;
`
const TableItemTitle = styled.div`
  margin: 10px 0;
  font-family: Cervo;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
`
const BackgroundSecondContent = styled(BackgroundFirstContent)`
  width: 1190px;
  max-width: 93%;
  flex-direction: row;
  background-color: white;
  margin-bottom: 150px;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  @media (${isTabletQuery}) {
    flex-direction: column;
    padding: 30px;
  }
  @media (${isMobileQuery}) {
    top: 275px;
    right: 20%;
    font-size: 16px;
  }
`
const TitleBlack = styled.div`
  color: black;
  font-family: Cervo;
  font-style: italic;
  font-size: 52px;
  text-transform: uppercase;
  margin-left: ${(p) => p.dash && '5px'};
  line-height: 102%;
  margin-bottom: 10px;
  margin-top: -5px;
  @media (${isMobileQuery}) {
    font-size: 40px;
  }
`
const TitleRed = styled(TitleBlack)`
  color: #e30b17;
  margin: 0 5px 0 0;
`
const BackgroundSecondContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  width: 33%;
  @media (${isTabletQuery}) {
    width: 100%;
    text-align: right;
    align-items: flex-end;
    padding: 0 25px;
  }
  @media (${isMobileQuery}) {
  }
`
const TextLine = styled.div`
  display: flex;
  width: ${(p) => (p.small ? '55%' : '100 %')};
  @media (${isTabletQuery}) {
    width: ${(p) => (p.small ? '30%' : 'auto')};
    margin-right: ${(p) => (p.small ? '50px' : '-50px')};
  }
  @media (${isMobileQuery}) {
  }
`
const BottomTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 100%;
`
const BackgroundTrird = styled(BackgroundFirst)`
  height: 150px;
  min-height: 150px;
  @media (${isTabletQuery}) {
    min-height: 150px;
    height: 150px;
  }
`
const TextWrapper = styled.div`
  @media (${isTabletQuery}) {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: 50px;
  }
`

export const Advantage = () => {
  return (
    <Container>
      <Content>
        <BackgroundWrapper>
          <BackgroundFirst>
            <BackgroundFirstContent>
              <TitleWrapper>
                <TitleRedBig>ПРЕИМУЩЕСТВА</TitleRedBig>
                <TitleWhite>CYBER BUILD</TitleWhite>
              </TitleWrapper>
              <Table>
                <TableItem>
                  <img src={advantage1} alt="advantage1" />
                  <TableItemTitle>Регистрация в качестве питания для спортсменов</TableItemTitle>
                  <div>Вся продукция соответствует самым строгим стандартам качества.</div>
                </TableItem>
                <TableItem>
                  <img src={advantage2} alt="advantage2" />
                  <TableItemTitle>Эффективные дозировки</TableItemTitle>
                  <div>
                    Продукты содержат максимальное количество действующих веществ, не превышая
                    адекватный уровень потребления (АУП).
                  </div>
                </TableItem>
                <TableItem>
                  <img src={advantage3} alt="advantage3" />
                  <TableItemTitle>Низкое содержание быстрых углеводов</TableItemTitle>
                  <div>
                    Минимум сахара и фруктозы, необходимый для активации энергетического обмена,
                    работы мозга и ЦНС.
                  </div>
                </TableItem>
                <TableItem>
                  <img src={advantage4} alt="advantage4" />
                  <TableItemTitle>Безопасные компоненты</TableItemTitle>
                  <div>Никаких искусственных ароматизаторов и красителей.</div>
                </TableItem>
                <TableItem>
                  <img src={advantage5} alt="advantage5" />
                  <TableItemTitle>20 лет научного опыта Siberian Wellness</TableItemTitle>
                  <div>
                    Серия разработана Компанией, специализирующейся на создании спортивного питания
                    и продуктов для активной жизни.
                  </div>
                </TableItem>
                <TableItem>
                  <img src={advantage6} alt="advantage6" />
                  <TableItemTitle>Собственные уникальные рецептуры</TableItemTitle>
                  <div>
                    Полный цикл производства: от разработки уникальных составов до выпуска продукции
                    на собственном эко-производстве.
                  </div>
                </TableItem>
              </Table>
            </BackgroundFirstContent>
          </BackgroundFirst>
          <BackgroundSecond>
            <BackgroundSecondContent>
              <BackgroundSecondContentWrapper>
                <TextWrapper>
                  <TextLine>
                    <TitleRed>Больше энергии</TitleRed>
                    <TitleBlack dash> — </TitleBlack>
                  </TextLine>
                  <TitleBlack>Меньше сахара!</TitleBlack>
                </TextWrapper>
                <TextLine small>Сравнение содержания сахара в разных продуктах на 100 г</TextLine>
              </BackgroundSecondContentWrapper>
              <img src={isMobileQuery ? chartMobile : chart} alt="chart" />
            </BackgroundSecondContent>
          </BackgroundSecond>
          <BottomTitle>
            <TitleRed>Дополни</TitleRed>
            <TitleWhite bottom>Свой билд:</TitleWhite>
          </BottomTitle>
          <BackgroundTrird />
        </BackgroundWrapper>
      </Content>
    </Container>
  )
}
