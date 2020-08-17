import React from 'react'
import ReactDOM from 'react-dom'
import { DataProvider } from './contexts'
import { CartProvider } from './contexts/CartContext'
import { createGlobalStyle } from 'styled-components'
import { AppContainer } from 'react-hot-loader'
import './index.css'
import App from './App'

export default App


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }

  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  @font-face {
    font-family: "Cervo";
    src: url("fonts/CervoItalic.otf");
    font-style: italic;
  } 
  @font-face {
    font-family: "Cervo";
    src: url("fonts/CervoRegular.otf");
    font-style: normal;
  }  
  @font-face {
    font-family: "Gerbera";
    src: url("fonts/Gerbera.ttf");
    font-style: normal;
  }  
  @font-face {
    font-family: "Gerbera";
    src: url("fonts/GerberaMedium.ttf");
    font-weight: 500;
  }
  
`

if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
      ? ReactDOM.hydrate
      : ReactDOM.render

  const render = Comp => {
    renderMethod(
        <DataProvider>
            <CartProvider>
                <GlobalStyle />
                <App />
            </CartProvider>
        </DataProvider>,
        target
    )
  }

  render(App)

  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}