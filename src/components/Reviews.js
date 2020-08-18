import styled from 'styled-components/macro'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import blackBackground from '../images/blackBackground.svg'
import buttonPrevious from '../images/buttonPrevious.svg'
import buttonNext from '../images/buttonNext.svg'
import { isMobileQuery, isTabletQuery } from '../constants'
import { gamersReviewList, reviewsList } from '../data/allData'

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
  margin-top: -70px;
`
const Content = styled.div`
  position: relative;
  max-width: 1500px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BackgroundFirst = styled.div`
  background: url("${blackBackground}") center 0 no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isTabletQuery}) {
   background: none;
  }
`
const BackgroundSecond = styled(BackgroundFirst)`
  position: absolute;
  bottom: 0;
  z-index: -1;
`
const TitleWhite = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-size: 52px;
  color: white;
  line-height: 102%;
  text-align: center;
  text-transform: uppercase;
  @media (${isMobileQuery}) {
    font-size: 40px;
  }
`
const TitleRed = styled(TitleWhite)`
  color: #e30b17;
`
const TitleBlack = styled(TitleWhite)`
  color: #151524;
  margin-top: 80px;
  @media (${isTabletQuery}) {
    max-width: 100vw;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin-top: 50px;
`
const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 600px;
  background-color: #e20c17;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: skewY(1.5deg);
  margin-top: -50px;
  overflow-y: visible;
`
const Slider = styled.div`
  position: relative;
  max-width: 1500px;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SlideContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: Gerbera;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: white;
  letter-spacing: -0.5px;
  @media (${isTabletQuery}) {
    justify-content: center;
  }
  @media (${isMobileQuery}) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-top: -50px;
  }
`

const SlideImage = styled.div`
  clip-path: url(#myClip);
  color: bisque;
  background: url("${(p) => p.src}") center center no-repeat;
  background-size: cover;
  width: 262px;
  height: 231px;
  @media (${isMobileQuery}) {
    margin: 20px 0;
  }
`
const SlideDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: 30px;
  @media (${isTabletQuery}) {
    width: 55%;
  }
  @media (${isMobileQuery}) {
    width: auto;
    margin-left: 0;
  }
`
const SlideTextName = styled.div`
  font-family: Gerbera;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -1px;
  flex-wrap: wrap;
  display: flex;
`
const SlideTextReview = styled.div`
  font-family: Cervo;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  width: auto;
  max-width: 600px;
  padding: 30px 0;
`
const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  transform: skewY(-1.5deg);
  margin-left: -30px;

  @media (${isMobileQuery}) {
    margin-bottom: 50px;
  }
`
const Step = styled.div`
  width: 38px;
  height: 2px;
  background-color: ${(p) => (p.active ? 'white' : '#1F3554')};
  margin-right: 5px;
`
const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: -30px;
  right: 50px;
  transform: skewY(-1.5deg);
  display: flex;
  justify-content: space-between;
  width: 155px;
  @media (${isMobileQuery}) {
    display: none;
  }
`
const ReviewsBox = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 1260px;
  background-color: white;
  margin-top: -50px;
  margin-bottom: 70px;
`
const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  min-height: 550px;
  height: auto;
  padding: 50px;
`
const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  font-family: Gerbera;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
`
const ReviewName = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-top: 30px;
  margin-bottom: 15px;
`
const ReviewLink = styled.div`
  font-size: 12px;
  margin-top: 15px;
`
const SwgWrapper = styled.div`
  max-width: 0;
  max-height: 0;
`
const StuledSwipeableViews = styled(SwipeableViews)`
  transform: skewY(-1.5deg);
  max-width: 70%;
  @media (${isTabletQuery}) {
    max-width: 90%;
  }
`
const ReviewsContent = styled(Content)`
  align-items: center;
  margin-top: -50px;
  overflow: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  @media (${isTabletQuery}) {
    align-items: flex-start;
  }
`
const StyledSliderButton = styled.img`
  cursor: pointer;
`

export const Reviews = () => {
  const [slideNum, setSlideNum] = useState(0)
  const increaseCount = () => {
    if (slideNum < gamersReviewList.length - 1) {
      setSlideNum(slideNum + 1)
    }
  }
  const decreaseCount = () => {
    if (slideNum !== 0) {
      setSlideNum(slideNum - 1)
    }
  }
  const handleStepChange = (step) => {
    setSlideNum(step)
  }
  return (
    <Container id="reviews">
      <SwgWrapper>
        <svg width="0" height="0" viewBox="0 0 262 231">
          <defs>
            <clipPath id="myClip">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M154.945 1.78751L257.61 62.5241C261.468 63.9372 263.198 66.7885 261.097 72.1128L233.255 158.083C231.845 164.113 228.73 165.552 223.487 168.731L120.822 229.468C115.951 231.613 110.042 231.613 106.901 228.786L4.21154 168.378C0.378909 166.612 -0.659611 164.113 0.378909 160.202L27.8749 73.1978C28.9135 68.2016 32.7708 65.7287 37.642 62.8774L141.346 1.43424C146.217 -0.710593 151.805 -0.332093 154.945 1.78751Z"
                fill="black"
              />
            </clipPath>
          </defs>
        </svg>
      </SwgWrapper>
      <Content>
        <BackgroundFirst>
          <TitleWrapper>
            <TitleWhite>Стримеры и блогеры выбирают</TitleWhite>
            <TitleRed>Cyber Build</TitleRed>
          </TitleWrapper>
        </BackgroundFirst>
      </Content>
      <SliderBox>
        <Slider>
          <ButtonsWrapper>
            <StyledSliderButton src={buttonPrevious} alt="img" onClick={decreaseCount} />
            <StyledSliderButton src={buttonNext} alt="img" onClick={increaseCount} />
          </ButtonsWrapper>
          <StuledSwipeableViews index={slideNum} onChangeIndex={handleStepChange} enableMouseEvents>
            {gamersReviewList.map((gamer, key) => (
              <SlideContent key={gamer.picture}>
                <SlideImage src={gamer.picture} />
                <SlideDescription>
                  <SlideTextName>{gamer.name}</SlideTextName>
                  <div>{gamer.games}</div>
                  <SlideTextReview>{gamer.reviews}</SlideTextReview>
                </SlideDescription>
              </SlideContent>
            ))}
          </StuledSwipeableViews>
          <StepWrapper>
            {gamersReviewList.map((item, index) => (
              <Step
                key={item.picture}
                active={slideNum === index}
                onClick={() => handleStepChange(index)}
              />
            ))}
          </StepWrapper>
        </Slider>
      </SliderBox>
      <ReviewsContent>
        <ReviewsBox>
          <TitleBlack>Отзывы геймеров</TitleBlack>
          <ReviewsWrapper>
            {reviewsList.map((review) => (
              <Review key={review.review}>
                <img src={review.picture} alt="img" height={101} width={101} />
                <ReviewName>{review.name}</ReviewName>
                <div>{review.review}</div>
                <ReviewLink>{review.link}</ReviewLink>
              </Review>
            ))}
          </ReviewsWrapper>
        </ReviewsBox>
      </ReviewsContent>
      <BackgroundSecond />
    </Container>
  )
}
