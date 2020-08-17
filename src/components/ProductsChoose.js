import styled from 'styled-components'
import React, { useContext } from 'react'
import { DataContext } from '../contexts'

const productList = ['Батончик', 'Мармелад', 'Напиток']
const Container = styled.div`
  height: 70%;
  width: 70%;
  display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    height: 80%;
  }
`
const Item = styled.div`
  width: auto;
  height: 31px;
  background: #e30b17;
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &.active {
    background: transparent;
  }
  @media (max-width: 600px) {
    height: 25px;
    padding: 0 13px;
  }
`
const Triangle = styled.div`
  &.active {
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #f00;
    margin-top: 10px;
  }
`
const TextItem = styled.div`
  font-style: italic;
  font-weight: 500;
  font-size: 52px;
  line-height: 102%;
  font-family: Cervo;
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-style: italic;
  margin-top: -30px;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-top: -20px;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    margin-top: -10px;
  }
`

export const ProductsChoose = () => {
    const { mainProduct, setMainProduct } = useContext(DataContext)
    return (
        <Container>
            {productList.map((item, index) => (
                <Item
                    className={mainProduct === index && 'active'}
                    onClick={() => setMainProduct(index)}
                    key={item}
                >
                    <TextItem>{item}</TextItem>
                    <Triangle className={mainProduct === index && 'active'} />
                </Item>
            ))}
        </Container>
    )
}
