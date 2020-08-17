import styled from 'styled-components/macro'
import { isTabletQuery } from '../constants'

export const Container = styled.div`
  height: auto;
  min-height: 800px;
  width: 100%;
  background-color: ${(p) => p.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${isTabletQuery}) {
    min-height: auto;
  }
`
