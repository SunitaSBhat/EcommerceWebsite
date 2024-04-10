import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Divider} from "@mui/material";
import data from "./productData"
import './product.css'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 function Product(props) {
  return (
    <>
    <div className='prod'>
      <div className='upper_one'>
        <h2>{props.title}</h2>
        <button className='buton'>View More</button>
      </div>
      <Divider/>
      <div className='Down_one'>
      <Carousel
      responsive={responsive}
      infinite={true}
      draggable={false}
      swipeable={true}
      showDots={false}
      centerMode={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      removeArrowOnDeviceType={['mobile', 'tablet']}
      dotListClass='custom-dot-list-style'
      itemClass='carouse-item-padding-40-px'
      containerClass='carousel-container'>
        {
         data.map((e) => {
            return (
               
                    <div className="products_items">
                        <div className="product_img">
                            <img src={e.url} alt="product" />
                        </div>
                        <p className="products_name">{e.title.shortTitle}</p>
                        <p className="products_offer" style={{ color: "#  007185" }}>{e.discount}</p>
                        <p className="products_explore">{e.tagline}</p>
                    </div>
            )
           
            
        })
        }
        </Carousel>
        </div>
        </div>
        </>
       
  )
}
export default Product