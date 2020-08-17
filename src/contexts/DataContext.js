import React, { memo, useState } from 'react'

const DataContext = React.createContext({})

const DataProvider = memo(({ children }) => {
  const [mainProduct, setMainProduct] = useState(0)
  const [allProduct, setAllProduct] = useState(0)
  const [allProductTaste, setAllProductTaste] = useState(0)

  return (
    <DataContext.Provider
      value={{
        mainProduct,
        setMainProduct,
        allProduct,
        setAllProduct,
        allProductTaste,
        setAllProductTaste,
      }}
    >
      {children}
    </DataContext.Provider>
  )
})

export { DataContext, DataProvider }
