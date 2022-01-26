import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" />
      <div className="header__search">
        <input type="search" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span
            className="header__optionLineOne
 "
          >
            Hello
          </span>
          <span
            className="header__optionLineOne
 "
          >
            Sign in
          </span>
        </div>
        <div className="header__option">
          <span
            className="header__optionLineOne
 "
          >
            Returns
          </span>
          <span
            className="header__optionLineOne
 "
          >
            & Orders
          </span>
        </div>
        <div className="header__option">
          <span
            className="header__optionLineOne
 "
          >
            Your
          </span>
          <span
            className="header__optionLineOne
 "
          >
            Prime
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
