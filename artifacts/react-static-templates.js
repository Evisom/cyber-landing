

import React from 'react'
import universal, { setHasBabelPlugin } from 'react-universal-component'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('__react_static_root__/node_modules/react-static/lib/browser/components/Default404'), universalOptions)
      t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'
      
const t_1 = universal(import('__react_static_root__/src/App.js'), universalOptions)
      t_1.template = '__react_static_root__/src/App.js'
      
const t_2 = universal(import('__react_static_root__/src/components/Advantage.js'), universalOptions)
      t_2.template = '__react_static_root__/src/components/Advantage.js'
      
const t_3 = universal(import('__react_static_root__/src/components/AllProducts/AccordionItem.js'), universalOptions)
      t_3.template = '__react_static_root__/src/components/AllProducts/AccordionItem.js'
      
const t_4 = universal(import('__react_static_root__/src/components/AllProducts/AllProductsSection.js'), universalOptions)
      t_4.template = '__react_static_root__/src/components/AllProducts/AllProductsSection.js'
      
const t_5 = universal(import('__react_static_root__/src/components/AllProducts/ProductDescription.js'), universalOptions)
      t_5.template = '__react_static_root__/src/components/AllProducts/ProductDescription.js'
      
const t_6 = universal(import('__react_static_root__/src/components/Button.js'), universalOptions)
      t_6.template = '__react_static_root__/src/components/Button.js'
      
const t_7 = universal(import('__react_static_root__/src/components/Cart.js'), universalOptions)
      t_7.template = '__react_static_root__/src/components/Cart.js'
      
const t_8 = universal(import('__react_static_root__/src/components/Composition.js'), universalOptions)
      t_8.template = '__react_static_root__/src/components/Composition.js'
      
const t_9 = universal(import('__react_static_root__/src/components/ContactForm.js'), universalOptions)
      t_9.template = '__react_static_root__/src/components/ContactForm.js'
      
const t_10 = universal(import('__react_static_root__/src/components/Container.js'), universalOptions)
      t_10.template = '__react_static_root__/src/components/Container.js'
      
const t_11 = universal(import('__react_static_root__/src/components/Content.js'), universalOptions)
      t_11.template = '__react_static_root__/src/components/Content.js'
      
const t_12 = universal(import('__react_static_root__/src/components/Footer.js'), universalOptions)
      t_12.template = '__react_static_root__/src/components/Footer.js'
      
const t_13 = universal(import('__react_static_root__/src/components/Header.js'), universalOptions)
      t_13.template = '__react_static_root__/src/components/Header.js'
      
const t_14 = universal(import('__react_static_root__/src/components/MainProducts/MainProductsSection.js'), universalOptions)
      t_14.template = '__react_static_root__/src/components/MainProducts/MainProductsSection.js'
      
const t_15 = universal(import('__react_static_root__/src/components/MainProducts/ProductDescription.js'), universalOptions)
      t_15.template = '__react_static_root__/src/components/MainProducts/ProductDescription.js'
      
const t_16 = universal(import('__react_static_root__/src/components/MediaAboutUs.js'), universalOptions)
      t_16.template = '__react_static_root__/src/components/MediaAboutUs.js'
      
const t_17 = universal(import('__react_static_root__/src/components/Navigation.js'), universalOptions)
      t_17.template = '__react_static_root__/src/components/Navigation.js'
      
const t_18 = universal(import('__react_static_root__/src/components/Product.js'), universalOptions)
      t_18.template = '__react_static_root__/src/components/Product.js'
      
const t_19 = universal(import('__react_static_root__/src/components/ProductsChoose.js'), universalOptions)
      t_19.template = '__react_static_root__/src/components/ProductsChoose.js'
      
const t_20 = universal(import('__react_static_root__/src/components/QualitySafety.js'), universalOptions)
      t_20.template = '__react_static_root__/src/components/QualitySafety.js'
      
const t_21 = universal(import('__react_static_root__/src/components/Questions.js'), universalOptions)
      t_21.template = '__react_static_root__/src/components/Questions.js'
      
const t_22 = universal(import('__react_static_root__/src/components/Reviews.js'), universalOptions)
      t_22.template = '__react_static_root__/src/components/Reviews.js'
      
const t_23 = universal(import('__react_static_root__/src/components/Router.js'), universalOptions)
      t_23.template = '__react_static_root__/src/components/Router.js'
      
const t_24 = universal(import('__react_static_root__/src/components/Title.js'), universalOptions)
      t_24.template = '__react_static_root__/src/components/Title.js'
      
const t_25 = universal(import('__react_static_root__/src/components/WorldQuality.js'), universalOptions)
      t_25.template = '__react_static_root__/src/components/WorldQuality.js'
      
const t_26 = universal(import('__react_static_root__/src/constants.js'), universalOptions)
      t_26.template = '__react_static_root__/src/constants.js'
      
const t_27 = universal(import('__react_static_root__/src/containers/Dynamic.js'), universalOptions)
      t_27.template = '__react_static_root__/src/containers/Dynamic.js'
      
const t_28 = universal(import('__react_static_root__/src/containers/Post.js'), universalOptions)
      t_28.template = '__react_static_root__/src/containers/Post.js'
      
const t_29 = universal(import('__react_static_root__/src/contexts/CartContext.js'), universalOptions)
      t_29.template = '__react_static_root__/src/contexts/CartContext.js'
      
const t_30 = universal(import('__react_static_root__/src/contexts/DataContext.js'), universalOptions)
      t_30.template = '__react_static_root__/src/contexts/DataContext.js'
      
const t_31 = universal(import('__react_static_root__/src/contexts/index.js'), universalOptions)
      t_31.template = '__react_static_root__/src/contexts/index.js'
      
const t_32 = universal(import('__react_static_root__/src/data/allData.js'), universalOptions)
      t_32.template = '__react_static_root__/src/data/allData.js'
      
const t_33 = universal(import('__react_static_root__/src/data/productsData.js'), universalOptions)
      t_33.template = '__react_static_root__/src/data/productsData.js'
      
const t_34 = universal(import('__react_static_root__/src/index.js'), universalOptions)
      t_34.template = '__react_static_root__/src/index.js'
      
const t_35 = universal(import('__react_static_root__/src/containers/Post'), universalOptions)
      t_35.template = '__react_static_root__/src/containers/Post'
      

// Template Map
export default {
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0,
'__react_static_root__/src/App.js': t_1,
'__react_static_root__/src/components/Advantage.js': t_2,
'__react_static_root__/src/components/AllProducts/AccordionItem.js': t_3,
'__react_static_root__/src/components/AllProducts/AllProductsSection.js': t_4,
'__react_static_root__/src/components/AllProducts/ProductDescription.js': t_5,
'__react_static_root__/src/components/Button.js': t_6,
'__react_static_root__/src/components/Cart.js': t_7,
'__react_static_root__/src/components/Composition.js': t_8,
'__react_static_root__/src/components/ContactForm.js': t_9,
'__react_static_root__/src/components/Container.js': t_10,
'__react_static_root__/src/components/Content.js': t_11,
'__react_static_root__/src/components/Footer.js': t_12,
'__react_static_root__/src/components/Header.js': t_13,
'__react_static_root__/src/components/MainProducts/MainProductsSection.js': t_14,
'__react_static_root__/src/components/MainProducts/ProductDescription.js': t_15,
'__react_static_root__/src/components/MediaAboutUs.js': t_16,
'__react_static_root__/src/components/Navigation.js': t_17,
'__react_static_root__/src/components/Product.js': t_18,
'__react_static_root__/src/components/ProductsChoose.js': t_19,
'__react_static_root__/src/components/QualitySafety.js': t_20,
'__react_static_root__/src/components/Questions.js': t_21,
'__react_static_root__/src/components/Reviews.js': t_22,
'__react_static_root__/src/components/Router.js': t_23,
'__react_static_root__/src/components/Title.js': t_24,
'__react_static_root__/src/components/WorldQuality.js': t_25,
'__react_static_root__/src/constants.js': t_26,
'__react_static_root__/src/containers/Dynamic.js': t_27,
'__react_static_root__/src/containers/Post.js': t_28,
'__react_static_root__/src/contexts/CartContext.js': t_29,
'__react_static_root__/src/contexts/DataContext.js': t_30,
'__react_static_root__/src/contexts/index.js': t_31,
'__react_static_root__/src/data/allData.js': t_32,
'__react_static_root__/src/data/productsData.js': t_33,
'__react_static_root__/src/index.js': t_34,
'__react_static_root__/src/containers/Post': t_35
}
// Not Found Template
export const notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404"

