import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery'
import Badge from '@material-ui/core/Badge'
import sumBy from 'lodash.sumby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../images/Logo.svg'
import cart from '../images/basket.svg'
import { isDesktopQuery, isMobileQuery, isTabletQuery } from '../constants'
import { CartContext } from '../contexts/CartContext'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  padding: 20px;
  background-color: transparent;
  z-index: 100;
  @media (${isMobileQuery}) {
    padding: 10px;
  }
`
const Wrapper = styled(Container)`
  width: 60%;
  @media (${isTabletQuery}) {
    width: 70%;
  }
  @media (${isMobileQuery}) {
    width: 80%;
  }
`
const WrapperSecond = styled(Container)`
  align-content: end;
  justify-content: space-around;
  width: 30%;
  @media (${isMobileQuery}) {
    width: 20%;
  }
`

const MenuItem = styled.div`
  font-family: Cervo;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  text-transform: uppercase;
  color: #ffffff;
  @media (${isTabletQuery}) {
    font-size: 24px;
  }
  @media (${isMobileQuery}) {
    font-size: 16px;
  }
`
const BasketWrapper = styled.div`
  width: 110px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  font-family: sans-serif;
  font-size: 20px;
  text-align: right;
  letter-spacing: -0.3px;
  font-weight: 500;
  cursor: pointer;
`
const CityWrapper = styled.div`
  width: 120px;
  display: flex;
  align-items: baseline;
  color: white;
  justify-content: space-between;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
  cursor: pointer;
`
export const Navigation = ({ setIsCartOpen }) => {
    const { cartItems } = useContext(CartContext)
    const isDesktop = useMediaQuery(`(${isDesktopQuery})`)
    const isMobile = useMediaQuery(`(${isMobileQuery})`)
    const amountAllItems = sumBy(cartItems, 'amount')
    const fullPrice = sumBy(cartItems, (item) => item.amount * item.product.price)

    return (
        <Container>
            <Wrapper>
                {!isMobile && <img src={logo} alt="logo" width={!isDesktop ? 99 : 'auto'} />}
                <AnchorLink href="#products">
                    <MenuItem>ПРОДУКТЫ</MenuItem>
                </AnchorLink>
                <AnchorLink href="#aboutUs">
                    <MenuItem>О НАС</MenuItem>
                </AnchorLink>
                <AnchorLink href="#reviews">
                    <MenuItem>ОТЗЫВЫ</MenuItem>
                </AnchorLink>
                <AnchorLink href="#questions">
                    <MenuItem>FAQ</MenuItem>
                </AnchorLink>
                <AnchorLink href="#contactForm">
                    <MenuItem>СВЯЗЬ</MenuItem>
                </AnchorLink>
            </Wrapper>
            <WrapperSecond>
                {isDesktop && (
                    <CityWrapper onClick={() => setIsCartOpen(true)}>
                        <div>Новосибирск</div>
                    </CityWrapper>
                )}
                <BasketWrapper onClick={() => setIsCartOpen(true)}>
                    {!isMobile && <div>{fullPrice} ₽</div>}
                    <Badge badgeContent={amountAllItems} color="error">
                        <img src={cart} alt="cart" />
                    </Badge>
                </BasketWrapper>
            </WrapperSecond>
        </Container>
    )
}
