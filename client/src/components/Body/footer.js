import React from 'react'
import './footer.css'
import Amazonlogo from './logo.png'
function footer() {
  return (
    <>
    <div className='main_footer'>
      <div className='footer'>
        <h4>Get to know about us</h4>
        <p>about us</p>
        <p>Career</p>
        <p>Press releases</p>
        <p>Amazon care</p>
      </div>
      <div className='footer'>
        <h4>Connect with us</h4>
        <p>Facebook </p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>
      <div className='footer'>
        <h4>Get to know about us</h4>
        <p>about us</p>
        <p>Career</p>
        <p>Press releases</p>
        <p>Amazon care</p>
      </div>
      <div className='footer'>
        <h4>Get to know about us</h4>
        <p>about us</p>
        <p>Career</p>
        <p>Press releases</p>
        <p>Amazon care</p>
      </div>
    </div>
    <div className='image_log_words'>
        <div className='image_logo'>
            <img src={Amazonlogo} alt="logo" id="imag"/>
        </div>
        <div className='words_for_footer'>
        <p>Conditions of use & sale</p>
        <p>Privacy Notice</p>
        <p>Interest Based Ads</p>
        <p>© 1996-2022. Amazon.com inc. or its affilates</p>
        </div>
    </div>
    </>
  )
}
export default footer