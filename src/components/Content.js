import styled from 'styled-components/macro'
import { isMobileQuery } from '../constants'

export const Content = styled.div`
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
  overflow: hidden;
  color: white;

  @media (${isMobileQuery}) {
    padding: 0 20px;
  }
`
