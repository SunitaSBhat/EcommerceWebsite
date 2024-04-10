import React from 'react'
import Banner from './Banner';
import Product from './product';
import BoxProducts from './boxProducts';
 function MainComp() {
  return (
    <div>
      <Banner/>
      <BoxProducts/>
      <Product title={"Best Seller"}/>
    </div>
  )
}
export default MainComp