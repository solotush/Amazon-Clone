import React from 'react';
import './Header.css';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div className='header'>
      <img
        className='header_logo'
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt='logo'      
      />
      <div className='header_search'>
        <input className='header_searchInput' type='text' />
        <YoutubeSearchedForIcon className="header_searchIcon" />
        {/* logo */}
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello User</span>
          <span className='header_optionLineTwo'> Sign in </span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Return</span>
          <span className='header_optionLineTwo'> Oreders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'> Prime </span>
        </div>
        
       <div className="header_optionBasket">
         <ShoppingBasketIcon />
         <span className="header_optionLineTwo header_basketCount">0</span>

       </div>

      </div>
    </div>
  );
}

export default Header;
