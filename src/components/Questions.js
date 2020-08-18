import React from 'react'
import styled from 'styled-components/macro'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { Title } from './Title'
import { Container } from './Container'
import { Content } from './Content'
import { QuestionsList } from '../data/allData'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin: 50px 0 50px;
`
const TitleRed = styled(Title)`
  color: #e30b17;
  margin: 0 5px;
`
const QuestionsWrapper = styled.div`
  width: auto;
  max-width: 800px;
  margin-bottom: 50px;
`
const StyledAccordion = styled(Accordion)`
  box-shadow: none !important;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;

  text-align: left;
`
const QuestionTitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #272727;
  padding: 10px 0;
`

export const Questions = () => {
  return (
    <Container color="white" id="questions">
      <Content>
        <TitleWrapper>
          <Title>Остались</Title>
          <TitleRed>вопросы </TitleRed>
          <Title>?</Title>
        </TitleWrapper>
        <QuestionsWrapper>
          {QuestionsList.map((question) => (
            <StyledAccordion key={question.question}>
              <AccordionSummary expandIcon="+">
                <QuestionTitle>{question.question}</QuestionTitle>
              </AccordionSummary>
              <AccordionDetails>
                <div>{question.answer}</div>
              </AccordionDetails>
            </StyledAccordion>
          ))}
        </QuestionsWrapper>
      </Content>
    </Container>
  )
}
