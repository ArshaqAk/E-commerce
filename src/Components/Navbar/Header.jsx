import React, { useContext, useState } from 'react'
import './Header.css'
import cart_icon from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
function Header() {
    const [menu,setMenu]=useState('shop')
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src='https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png' width={'50px'} alt="" />
            <p className='mt-2'>Shopixir</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none',color:'black'}} to={'/mens'}>Men</Link> {menu==='men'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none',color:'black'}} to={'/womens'}>Women</Link> {menu==='women'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'black'}} to={'/kids'}>Kids</Link> {menu==='kids'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to={'/login'}> <button>Login</button></Link>
           <Link to={'/cart'}>
           <img src={cart_icon} alt="" />
           </Link>
            
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Header