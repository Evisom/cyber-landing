import React from 'react'
import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 20px 0;
  padding: 15px 45px;
  border: 2px solid #00c0f3;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    color: white;
    border-color: white;
  }
  &:hover {
    color: white;
    border-color: white;
  }
`

export const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>
}
