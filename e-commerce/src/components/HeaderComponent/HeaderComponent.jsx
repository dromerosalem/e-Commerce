import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'


import './header-component.scss'

const HeaderComponent = () => (
  <div className="header">
    <Link clasName='logo-container' to="/">
      <Logo className='logo'/>
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to='/shop'>
        CONTACT
      </Link>
    </div>

  </div>
)

export default HeaderComponent