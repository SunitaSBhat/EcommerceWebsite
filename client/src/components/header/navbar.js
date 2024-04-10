import React from 'react'

import { useState } from 'react'; 
import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Amazonlogo from '../Body/logo.png'

import TuneIcon from '@mui/icons-material/Tune';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
 function navbar(props) {
  
 
  const handleClick =()=>{
    window.open('/login', '_blank');
  }
  return (
    <>
    <header>
      <nav className="navbar">
    <div className='leftContainer'>
        <div className='logo'>
          <img src={Amazonlogo} alt="This is image" id="imag"/>
        </div>
        <div className='searchBar'>
          <input type="text" name="search" id="search" placeholder='Search Here'></input>
          <div className='searchIcon'>
            <SearchIcon id="searchIc"/>
          </div>
        </div>
    </div>
    <div className='rightContainer'>
           <div className='signin' onClick={handleClick}>signin</div>
           <TuneIcon id="p" />
       <SettingsIcon id="p"/>
       <p id="p">Calender</p>
       <div id="p">
         <p className='p'>Queries</p>
         <QuestionMarkIcon/>
       </div>
       
    
    <div className='cart'>
      <div className='cartIcon'>
        <ShoppingCartIcon id="cartpic"/>
        <p>Cart</p>
      </div>
      
    </div>
    <div className='avatar'>
    <AccountCircleIcon id="avatarimage"/>
    </div>
    </div>
    </nav>
    </header>
    </>
 )
  }
  export default navbar;