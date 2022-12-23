import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><img className='Logo' src='/static/logo.png' alt="MB-Fashion" width={100} height={65} />
        <style jsx>{`
        .Logo {
          margin: 50px;
          round
        }
      `}</style></Link>
      </p>
      
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
