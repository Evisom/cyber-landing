import styled from 'styled-components/macro'
import { isMobileQuery } from '../constants'

export const Title = styled.div`
  font-family: Cervo;
  font-style: italic;
  font-weight: 500;
  font-size: 52px;
  line-height: 102%;
  text-align: center;
  text-transform: uppercase;
  color: #151524;
  @media (${isMobileQuery}) {
    font-size: 40px;
  }
`
