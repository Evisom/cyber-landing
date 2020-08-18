import React, { useState } from 'react'
import styled from 'styled-components/macro'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container } from './Container'
import { Content } from './Content'
import blackBackground from '../images/blackBackground.svg'
import logo from '../images/Logo.svg'
import tagline from '../images/tagline.svg'
import { Title } from './Title'
import { isMobileQuery, isTabletQuery } from '../constants'

const BackgroundFirst = styled.div`
  background: url("${blackBackground}") center 0 no-repeat;
  background-size: cover;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (${isTabletQuery}) {
    background: none;
  }
`
const BackgroundSecond = styled(BackgroundFirst)`
  position: relative;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  margin-bottom: ${(p) => p.top && '120px'};
  height: ${(p) => p.top && '120px'};
  min-height: ${(p) => p.top && '120px'};
`
const BackgroundWrapper = styled.div`
  height: 100px;
  overflow: hidden;
  width: 100%;
  @media (${isMobileQuery}) {
    display: none;
  }
`
const StyledLogo = styled.img`
  position: absolute;
  top: -80px;
  -webkit-transform: scaleY(-1);
`
const StyledTagline = styled.img`
  margin-top: 30px;
  @media (${isMobileQuery}) {
    margin: 0;
  }
`
const BackgroundContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (${isMobileQuery}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin: 50px 0 50px;
  @media (${isMobileQuery}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const TitleRed = styled(Title)`
  color: #e30b17;
  margin: 0 5px;
`
const TitleBlue = styled(Title)`
  color: #00c0f3;
  margin: 0 5px;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
`
const StyledInput = styled.input`
  height: 30px;
  max-width: 600px;
  width: 100%;
  border-bottom: 1px solid #00c0f3;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
  color: white;
  padding: 10px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #00c0f3;
  color: white;
  outline: none;
`
const StyledTextArea = styled.textarea`
  max-width: 600px;
  width: 100%;
  border-bottom: 1px solid #00c0f3;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  outline: 1px solid #00c0f3;
  background-color: transparent;
`

const Wrapper = styled.div`
  margin-top: -100px;
  @media (${isMobileQuery}) {
    width: 100%;
  }
`
const ButtonWrapper = styled.input`
  width: fit-content;
  margin: 20px 0;
  padding: 15px 45px;
  border: 2px solid #00c0f3;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  font-family: Cervo;
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 102%;
  text-align: center;
  text-transform: uppercase;
  color: #00c0f3;
  &:focus {
    color: white;
    border-color: white;
  }
  &:hover {
    color: white;
    border-color: white;
  }
`

export const ContactForm = () => {
  const isMobile = useMediaQuery(`(${isMobileQuery})`)
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [commentsValue, seCommentsValue] = useState('')
  const text = `Имя: ${nameValue}, E-mail: ${emailValue}, Comments: ${commentsValue}`
  const sent = `mailto:alisa.maltseva18@mail.ru?subject=кибербиид&body=${text}`

  return (
    <Container color="black" id="contactForm">
      <Content>
        <BackgroundSecond top>
          <StyledLogo src={logo} height={105} />
        </BackgroundSecond>
        <BackgroundFirst>
          <BackgroundContent>
            <StyledTagline src={tagline} width={isMobile ? 361 : 'auto'} />
            <Wrapper>
              <TitleWrapper>
                <TitleRed>{isMobile ? 'Есть вопрос?' : 'Остались вопросы?'}</TitleRed>
                <TitleBlue>Задавай!</TitleBlue>
              </TitleWrapper>
              <FormWrapper action={sent} method="post" enctype="text/plain" acceptСharset="UTF-8">
                <label htmlFor="name">Имя</label>
                <StyledInput
                  type="text"
                  name="name"
                  id="name"
                  label="Имя"
                  onChange={(event) => setNameValue(event.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <StyledInput
                  type="email"
                  name="email"
                  id="name"
                  label="e-mail"
                  onChange={(event) => setEmailValue(event.target.value)}
                />
                <label htmlFor="comments">Твой Вопрос</label>
                <StyledTextArea
                  id="comments"
                  name="comments"
                  rows="6"
                  onChange={(event) => seCommentsValue(event.target.value)}
                />

                <ButtonWrapper type="submit" value="Отправить!" />
              </FormWrapper>
            </Wrapper>
          </BackgroundContent>
        </BackgroundFirst>
        <BackgroundWrapper>
          <BackgroundSecond />
        </BackgroundWrapper>
      </Content>
    </Container>
  )
}
