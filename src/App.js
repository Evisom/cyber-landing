import React, { useState } from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import styled from 'styled-components/macro'
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import { isMobileQuery } from './constants'
import Drawer from '@material-ui/core/Drawer'
import { MainProductsSection } from './components/MainProducts/MainProductsSection'
import { Advantage } from './components/Advantage'
import { AllProductsSection } from './components/AllProducts/AllProductsSection'
import { Reviews } from './components/Reviews'
import { MediaAboutUs } from './components/MediaAboutUs'
import { WorldQuality } from './components/WorldQuality'
import { QualitySafety } from './components/QualitySafety'
import { Questions } from './components/Questions'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'

import './app.css'
import { Header } from './components/Header'

addPrefetchExcludes(['dynamic'])

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledDrawer = styled(Drawer)`
  .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorBottom {
    height: 80%;
    @media (${isMobileQuery}) {
      height: 100%;
    }
  }
`

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false)
    return (
        <Wrapper>
            <StyledDrawer
                anchor="bottom"
                open={isCartOpen}
                onClose={() => {
                    setIsCartOpen(false)
                }}
            >
                <Cart setIsCartOpen={setIsCartOpen} />
            </StyledDrawer>
            <Header setIsCartOpen={setIsCartOpen} />
            <MainProductsSection />
            <Advantage />
            <AllProductsSection />
            <Reviews />
            <MediaAboutUs />
            <WorldQuality />
            <QualitySafety />
            <Questions />
            <ContactForm />
            <Footer />
        </Wrapper>
    )
}

export default App