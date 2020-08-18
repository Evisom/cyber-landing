import styled from 'styled-components/macro'
import React, { useContext, useState } from 'react'
import { keyframes } from 'styled-components'
import Dropdown from 'react-dropdown'
import { isMobileQuery, isTabletQuery } from '../constants'
import 'react-dropdown/style.css'
import shadow from '../images/shadow.png'
import { CartContext } from '../contexts/CartContext'

const blurAnimation = keyframes`
  0% { 
    opacity: 0;
    transform: translateX(50px);
    filter: blur(20px);
  }
  20% { 
    opacity: .6;
    transform: translateX(0);
    filter: blur(20px);
  }
  30% {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
`
const selectAnimation = keyframes`
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
`
const cartAnimation = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const shadowAnimation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${(p) => (p.allProducts ? '-150px' : '-80px')};
  font-family: Gerbera;
  font-weight: 500;
  height: 100%;
  text-transform: uppercase;

  @media (${isTabletQuery}) {
    margin-top: ${(p) => (p.allProducts ? '0' : '-50px')};
  }
  @media (${isMobileQuery}) {
    margin-top: ${(p) => (p.allProducts ? '30px' : '0')};
  }
`
const PriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 30px;
`
const Price = styled.div`
  font-size: 44px;
  line-height: 44px;
  letter-spacing: -1px;
  color: #1f3554;
`
const OldPrice = styled(Price)`
  font-size: 24px;
  line-height: 28px;
  text-decoration-line: line-through;
  mix-blend-mode: normal;
  opacity: 0.6;
  padding-right: 10px;
`
const AddToCartButtons = styled.div`
  display: flex;
  margin-top: 30px;
`
const Button = styled.div`
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #00c0f3;
  color: white;
  justify-content: center;
  border-radius: ${(p) => (p.left ? '10px 0 0 10px' : '0 10px 10px 0')};
  cursor: pointer;
`
const AddToCardButton = styled(Button)`
  width: 194px;
  background: #1f3554;
  border-radius: 0;
`
const StyledImg = styled.div`
  width: 350px;
  height: 400px;
  background: url("${(p) => p.src}") center center no-repeat;
  background-size: contain;
  animation: 1.3s ${blurAnimation} linear;
  @media (${isTabletQuery}) {
    height: 320px;
    animation: none;
  }
  @media (${isMobileQuery}) {
    height: 200px;
  }
`
const AnimatedSelect = styled.div`
  animation: 1.3s ${selectAnimation} linear;
  @media (${isTabletQuery}) {
    animation: none;
  }
`
const AnimatedCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  animation: 1.3s ${cartAnimation} linear;
  @media (${isTabletQuery}) {
    animation: none;
  }
`
const StyledSelect = styled(Dropdown)`
  font-family: Gerbera;
  font-weight: 500;
  .Dropdown-option.is-selected {
    background-color: #f2f9fc;
    color: #e30b17;
  }
  .Dropdown-control {
    border: 0;
    color: #e30b17;
  }
  .Dropdown-menu {
    width: 180px;
    left: -55px;
  }
`
const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`
const Shadow = styled.div`
  width: 350px;
  height: 100px;
  background: url("${(p) => p.src}") center center no-repeat;
  background-size: contain;
  animation: 1.3s ${shadowAnimation} linear;
  @media (${isTabletQuery}) {
    animation: none;
  }

`

export const Product = ({ product, isAllProductsSection, onTasteChange, tasteIndex }) => {
  const { addItem } = useContext(CartContext)
  const [itemsAmount, setItemsAmount] = useState(1)
  const item = product?.items[tasteIndex || 0]
  const options = product.items.map((x, index) => ({ label: x.taste, value: index }))
  const decreaseItem = () => {
    if (itemsAmount > 1) {
      setItemsAmount(itemsAmount - 1)
    }
  }

  return (
    <ItemWrapper allProducts={isAllProductsSection}>
      <StyledImg
        src={item.picture}
        alt="chocobar"
        allProducts={isAllProductsSection}
        key={`img${product.name}${tasteIndex}`}
      />
      {isAllProductsSection && <Shadow src={shadow} key={`shadow${product.name}${tasteIndex}`} />}
      <AnimatedSelect key={`select${product.name}${tasteIndex}`}>
        {product?.items.length > 1 ? (
          <SelectWrapper>
            Вкус
            <StyledSelect
              options={options}
              onChange={(option) => onTasteChange(option.value)}
              value={options[tasteIndex]}
              placeholder="Select an option"
            />
          </SelectWrapper>
        ) : (
          Boolean(item.taste) && <div>ВКУС {item.taste}</div>
        )}
      </AnimatedSelect>
      <AnimatedCart key={`cart${product.name}${tasteIndex}`}>
        <div>
          <PriceWrapper>
            <OldPrice>{product.oldPrice}</OldPrice>
            <Price>{product.price.toLocaleString('ru-RU')} ₽</Price>
          </PriceWrapper>
        </div>
        <AddToCartButtons>
          <Button left onClick={() => decreaseItem()}>
            -
          </Button>
          <AddToCardButton onClick={() => addItem(product, item, itemsAmount)}>
            В КОРЗИНУ: {itemsAmount} ШТ.
          </AddToCardButton>
          <Button onClick={() => setItemsAmount(itemsAmount + 1)}>+</Button>
        </AddToCartButtons>
      </AnimatedCart>
    </ItemWrapper>
  )
}
