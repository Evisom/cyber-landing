import React, { memo, useState } from 'react'

const CartContext = React.createContext({})

const CartProvider = memo(({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const addItem = (product, item, amount) => {
    const itemInCart = cartItems.find(
      (x) => x.product.name === product.name && x.item.taste === item.taste,
    )
    if (itemInCart) {
      const newCart = cartItems.map((x) => {
        if (x === itemInCart) {
          return { ...x, amount: x.amount + amount }
        }
        return x
      })
      setCartItems(newCart)
      return
    }
    setCartItems([...cartItems, { product, item, amount }])
  }

  const decreaseAmount = (product, item) => {
    let newAmount = 0
    const newCart = cartItems.map((x) => {
      if (x.product.name === product.name && x.item.taste === item.taste) {
        newAmount = x.amount - 1
        return { ...x, amount: newAmount }
      }
      return x
    })
    if (newAmount < 1) {
      removeItem(product, item)
      return
    }
    setCartItems(newCart)
  }
  const removeItem = (product, item) => {
    const newCart = cartItems.filter(
      (x) => x.product.name !== product.name && x.item.taste !== item.taste,
    )
    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        removeItem,
        decreaseAmount,
        addItem,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
})

export { CartContext, CartProvider }
