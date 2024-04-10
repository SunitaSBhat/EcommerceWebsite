import React from 'react'
import Carousel from 'react-material-ui-carousel'
import electro from './electro.jpg'
import alexa from './alexa.jpg'
import electroniclTemps from './homeWOrkings.jpg'
import './Banner.css'
                
const data=[
   alexa,
   electroniclTemps,
   electro
]
function Banner() {
  return (
   <Carousel className='carasoul'
   autoPlay={true}
   animation='slide'
   indicators={false}
   navButtonsAlwaysVisible={true}
   cycleNavigation={true}
   navButtonsProps={{
    style:{
        backgroundColor:"#fff",
        color:"#494949",
        borderRadius:0,
        marginTop:-33,
        height:"104px"
    }
   }}>
   {
    data.map((imag, i)=>{
          return(
            
            <img src={imag} alt="Hai" className='banner_img'/>
        
    )
    })
   }
   </Carousel>

  )
}
export default Banner;