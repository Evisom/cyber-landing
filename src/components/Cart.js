import styled from 'styled-components/macro'
import React, { useContext } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import sumBy from 'lodash.sumby'
import cart from '../images/basket.svg'
import flag from '../images/flag.svg'
import { CartContext } from '../contexts/CartContext'
import { isMobileQuery } from '../constants'

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  height: auto;
  min-height: 100%;
  font-family: Gerbera;
  @media (${isMobileQuery}) {
    flex-direction: column;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => p.dark && 'space-between'};
  height: 100%;
  width: 50%;
  background: ${(p) => (p.dark ? '#28283c' : 'white')};
  padding: 50px 7%;
  align-items: ${(p) => !p.dark && 'center'};
  @media (${isMobileQuery}) {
    padding: 30px 30px;
    width: 100%;
  }
`
const LeftSideContent = styled.div`
  width: 100%;
  max-width: 450px;
`
const CartImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #00c0f3;
  border-radius: 50px;
`
const CartListInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  height: 90px;
  width: 70%;
`
const CartListWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px darkgray solid;
`
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  height: 130px;
  border-bottom: 1px darkgray solid;
`
const ProductPic = styled.div`
  width: 100px;
  height: 100px;
  background: url("${(p) => p.src}") center 0 no-repeat;
  background-size: contain;
  margin: 0 20px;
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`
const ItemLine = styled.div`
  display: flex;
  align-items: ${(p) => (p.first ? 'flex-start' : 'baseline')};
  justify-content: space-between;
  margin-bottom: 10px;
`
const StyledCloseIcon = styled(CloseIcon)`
  color: darkgray;
`
const WrapperStyledCloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 50px;
  .MuiSvgIcon-root {
    font-size: 50px;
  }
  @media (${isMobileQuery}) {
    right: 30px;
  }
`
const Amount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80px;
  border: 2px #00c0f3 solid;
  border-radius: 10px;
`
const FinalPrice = styled.div`
  font-weight: 500;
  font-size: 24px;
`
const ButtonCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 30px;
  font-weight: 500;
  font-size: 30px;
  color: #00c0f3;
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
`
const Title = styled.div`
  font-size: 32px;
  color: white;
`
const TitleSecond = styled.div`
  font-size: 20px;
  color: white;
  opacity: 0.5;
  margin-bottom: 100px;
`
const StyledInput = styled.input`
  height: 30px;
  max-width: 400px;
  width: 100%;
  border-bottom: 1px solid #00c0f3;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
  color: white;
  padding: 10px 10px 10px 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #00c0f3;
  color: white;
  outline: none;
  font-size: 16px;
`
const StyledFlagImg = styled.img`
  position: absolute;
`
const InputWrapper = styled.div`
  position: relative;
`
const OrderButtonWrapper = styled.div`
  width: fit-content;
  margin: 20px 0;
  padding: 15px 45px;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  &:focus {
    color: #00c0f3;
    border-color: #00c0f3;
  }
  &:hover {
    color: #00c0f3;
    border-color: #00c0f3;
  }
`
const OrderButtonText = styled.div`
  font-family: Cervo;
  display: flex;
  font-size: 22px;
`
const CancelButton = styled.div`
  width: fit-content;
  transition: border-color 0.2s ease;
  color: hsla(0, 0%, 100%, 0.5);
  border-bottom: 1px solid transparent;
  padding: 10px;
  margin-right: 50px;
  &:hover {
    border-bottom: 1px hsla(0, 0%, 100%, 0.5) solid;
  }
  @media (${isMobileQuery}) {
    margin-right: 30px;
  }
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`
const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const Cart = ({ setIsCartOpen }) => {
  const { removeItem, decreaseAmount, addItem, cartItems } = useContext(CartContext)
  const fullItemsPrice =
    cartItems.length > 0 ? cartItems.map((x) => x.product.price * x.amount) : []
  const fullPrice =
    fullItemsPrice.length > 0
      ? fullItemsPrice.reduce((a, b) => {
          if (b) {
            return a + b
          }
          return a
        })
      : 0
  const amountAllItems = sumBy(cartItems, 'amount')

  return (
    <Container>
      <WrapperStyledCloseIcon onClick={() => setIsCartOpen(false)}>
        <StyledCloseIcon />
      </WrapperStyledCloseIcon>
      <Content>
        <LeftSideContent>
          <CartListWrapper>
            <CartListInfo>
              <CartImgWrapper>
                <img src={cart} alt="img" width={23} />
              </CartImgWrapper>
              <div>{amountAllItems}шт. на</div>
              <FinalPrice>{fullPrice} ₽</FinalPrice>
            </CartListInfo>
          </CartListWrapper>
          {cartItems.map((x, index) => (
            <ItemWrapper key={x.item.taste}>
              <ProductPic src={x.item.picture} />
              <ItemInfo>
                <ItemLine first>
                  <div>
                    {x.item.name} ({x.item.taste})
                  </div>
                  <StyledCloseIcon onClick={() => removeItem(x.product, x.item)} />
                </ItemLine>
                <ItemLine>
                  <ButtonWrapper>
                    <ButtonCount onClick={() => decreaseAmount(x.product, x.item)}> - </ButtonCount>
                    <Amount> {x.amount} шт </Amount>
                    <ButtonCount onClick={() => addItem(x.product, x.item, 1)}> + </ButtonCount>
                  </ButtonWrapper>
                  <FinalPrice>{fullItemsPrice[index]}</FinalPrice>
                </ItemLine>
              </ItemInfo>
            </ItemWrapper>
          ))}
        </LeftSideContent>
      </Content>
      <Content dark>
        <RightSideContent>
          <Title>Куда везем заказ?</Title>
          <TitleSecond>Доставка по всей России. Выберите город</TitleSecond>
          <InputWrapper>
            <StyledFlagImg src={flag} width={25} />
            <StyledInput type="email" name="email" id="name" defaultValue="Москва" label="e-mail" />
          </InputWrapper>
        </RightSideContent>
        <ButtonsWrapper>
          <CancelButton onClick={() => setIsCartOpen(false)}>Отменить</CancelButton>
          <OrderButtonWrapper>
            <OrderButtonText>Оформить</OrderButtonText>
          </OrderButtonWrapper>
        </ButtonsWrapper>
      </Content>
    </Container>
  )
}
