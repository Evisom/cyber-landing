import React, { useState } from 'react'
import styled from 'styled-components/macro'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ModalVideo from 'react-modal-video'
import headerShadow from '../images/header_shadow.svg'
import lines from '../images/lines.svg'
import linesMobile from '../images/linesMobile.svg'
import { Navigation } from './Navigation'
import youtube from '../images/youtube.svg'
import { ProductsChoose } from './ProductsChoose'
import { Container } from './Container'
import { isDesktopQuery, isMobileQuery, isTabletQuery } from '../constants'
import 'react-modal-video/css/modal-video.min.css'


const Content = styled.div`
  position: relative;
  height: 900px;
  width: 100%;
  max-width: 1500px;
  background: url("${headerShadow}") center 0 no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 0;
  font-family: Gerbera;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  @media (${isTabletQuery}) {
    height: 650px;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 60px;
  }
`
const Lines = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("${(p) => p.src}") center 0 no-repeat;
  background-size: cover;
  pointer-events: none;
`

const TextFirst = styled.div`
  width: 272px;
  margin-bottom: 15px;

  @media (${isTabletQuery}) {
    margin-bottom: 10px;
  }
`
const TextSecond = styled(TextFirst)`
  width: 396px;
  margin-bottom: 0;
  @media (${isTabletQuery}) {
    width: 272px;
    margin-bottom: 10px;
  }
`

const TextWrapper = styled.div`
  position: absolute;
  top: 450px;
  right: 420px;
  @media (${isTabletQuery}) {
    top: 275px;
    right: 200px;
  }
  @media (${isMobileQuery}) {
    top: 275px;
    right: 20%;
    font-size: 16px;
  }
`
const PictureWrapper = styled.div`
  position: absolute;
  top: 450px;
  right: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  @media (${isTabletQuery}) {
    top: 275px;
    right: 90px;
  }
  @media (${isMobileQuery}) {
    top: 275px;
    right: 40px;
  }
`

export const Header = ({ setIsCartOpen }) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const isDesktop = useMediaQuery(`(${isDesktopQuery})`)
    const isMobile = useMediaQuery(`(${isMobileQuery})`)

    return (
        <Container color="black">
            <Content>
                <Lines src={isMobile ? linesMobile : lines} />
                <Navigation setIsCartOpen={setIsCartOpen} />
                <TextWrapper>
                    <TextFirst>Для геймеров, стримеров и киберспортсменов</TextFirst>
                    <TextSecond>Быстрая победа над усталость, голодом и плохой концентрацией</TextSecond>
                </TextWrapper>
                <PictureWrapper onClick={() => setIsVideoOpen(true)}>
                    <img src={youtube} alt="youtube" width={!isDesktop ? 60 : 'auto'} />
                    {isDesktop && <div>Смотри видео</div>}
                </PictureWrapper>
                <ModalVideo
                    channel="youtube"
                    isOpen={isVideoOpen}
                    videoId="QqCklnW_5r4"
                    onClose={() => setIsVideoOpen(false)}
                />
                <ProductsChoose />
            </Content>
        </Container>
    )
}