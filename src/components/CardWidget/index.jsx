import React, { useContext } from 'react'
import {HiShoppingCart} from 'react-icons/hi';
import { Shop } from '../../context/ShopContext';
import "./style.css"


export const CardWidget = () => {

  const {cart} = useContext(Shop);



  return (
    <div>
    {cart.length && <span>({cart.length})</span>}
    <HiShoppingCart/>
    </div>
  )
}

export default CardWidget