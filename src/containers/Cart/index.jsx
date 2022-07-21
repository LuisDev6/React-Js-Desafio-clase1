import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import './style.css'

const Cart = () => {

  const { cart } = useContext(Shop);
  const { removeItem } = useContext(Shop);
  const { setCart } = useContext(Shop);




  return (
    <div className='div-cart'>
      <h3>Carrito de compras</h3>
      <div>
        {cart.length === 0 ? (<p>No hay productos en el carrito</p>

        ) : (

      <ul>
        {cart.map(producto => {
          return <li key={producto.id}>Producto: {producto.title} Cant: {producto.quantity} <img src={producto.image} width='50px' alt={producto.tittle} /><button className='btn-cart-remove' onClick={() => removeItem(producto.id)}>Eliminar</button> </li>
        })}
      </ul>
        )}
      </div>
      <button className='btn-cart' onClick={()=> setCart([])}>Limpiar Carrito</button>
    </div>
  )
}

export default Cart