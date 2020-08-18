import styled from 'styled-components/macro'
import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { isMobileQuery } from '../constants'

const CompositionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;
  margin-top: 30px;
  cursor: pointer;
  @media (${isMobileQuery}) {
    justify-content: flex-start;
  }
  &:focus {
    color: darkgray;
  }
  &:hover {
    color: darkslategray;
  }
`
const Arrow = styled.div`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  height: 1px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
`
const StyledDialogTitle = styled(DialogTitle)`
  font-family: Gerbera;
  font-weight: 500;
  font-size: 22px;
  color: #282c34;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DescriptionTitle = styled.div`
  font-family: Gerbera;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: black;
  margin-right: 5px;
`
const DescriptionText = styled(DescriptionTitle)`
  font-weight: 300;
`
const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 1000px;
    padding: 30px 50px;
  }
`
const ItemTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 30px;
  font-family: Gerbera;
  font-weight: 300;
  color: black;
`

export const Composition = ({ name, taste, composition }) => {
  const [isOpen, setIsOpen] = useState(false)
  const isCompositionArray = Array.isArray(composition)
  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <CompositionWrapper onClick={() => handleIsOpen()}>
        Полный состав
        <Arrow />
      </CompositionWrapper>
      <StyledDialog onClose={handleIsOpen} aria-labelledby="simple-dialog-title" open={isOpen}>
        <StyledDialogTitle disableTypography>
          {name}
          {taste && `(${taste})`}
          <IconButton aria-label="close" onClick={() => handleIsOpen()}>
            <CloseIcon />
          </IconButton>
        </StyledDialogTitle>
        <DialogContent>
          <DialogContentText>
            <DescriptionTitle>Полный состав:</DescriptionTitle>
            {!isCompositionArray ? (
              <DescriptionText>{composition}</DescriptionText>
            ) : (
              composition.map((item) => (
                <>
                  <ItemTitle>
                    <DescriptionTitle>{item.title}, </DescriptionTitle>
                    <div>{item.details}</div>
                  </ItemTitle>
                  <DescriptionTitle>Состав:</DescriptionTitle>{' '}
                  <DescriptionText>{item.description}</DescriptionText>
                </>
              ))
            )}
          </DialogContentText>
        </DialogContent>
      </StyledDialog>
    </>
  )
}
