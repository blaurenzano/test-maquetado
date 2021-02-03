import React from 'react';
import './App.scss';
import { ReactComponent as TitleIcon } from '../../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/bars-solid.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-solid.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/user-solid.svg';
import { ReactComponent as ShoppingIcon } from '../../../assets/icons/shopping-cart-solid.svg';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-web">
        <TitleIcon className="header-title" />
        <div className="header-icon-static">
          <button><SearchIcon /></button>
          <button><UserIcon /></button>
          <button><ShoppingIcon /></button>
        </div>
        <div className="header-buttons">
          <button>Sale</button>
          <button>E-shop</button>
          <button>Lookbook</button>
          <button>Campaña</button>
          <button>Locales</button>
        </div>
      </div>
      <div className="header-mobile">
        <MenuIcon className="header-icon" />
        <TitleIcon className="header-title" />
        <ShoppingIcon className="header-icon" />
      </div>

    </div>
  );
}

export default Header;