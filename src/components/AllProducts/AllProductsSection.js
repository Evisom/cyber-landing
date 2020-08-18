import styled from 'styled-components/macro'
import React, { useContext } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Product } from '../Product'
import { ProductDescription } from './ProductDescription'
import { allProductsData } from '../../data/productsData'
import { isMobileQuery, isTabletQuery } from '../../constants'
import { DataContext } from '../../contexts'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 750px;
  background-color: white;
  transform: skewY(1.5deg);
  margin-top: -30px;
  display: flex;
  justify-content: center;
  z-index: 2;
  padding-bottom: 50px;

  @media (${isTabletQuery}) {
    min-height: auto;
  }
`
const Content = styled.div`
  max-width: 100%;
  transform: skewY(-1.5deg);
  display: flex;
  width: auto;
  justify-content: space-between;
  margin-top: -80px;
  @media (${isMobileQuery}) {
    justify-content: center;
    padding-bottom: 50px;
  }
`

export const AllProductsSection = () => {
    const isTablet = useMediaQuery(`(${isTabletQuery})`)
    const { setAllProductTaste, allProductTaste, allProduct } = useContext(DataContext)
    const currentProduct = allProductsData[allProduct || 0]

    return (
        <Container>
            <Content>
                {!isTablet && (
                    <Product
                        product={currentProduct}
                        isAllProductsSection
                        onTasteChange={setAllProductTaste}
                        tasteIndex={allProductTaste}
                    />
                )}
                {/*<ProductDescription />*/}
            </Content>
        </Container>
    )
}
