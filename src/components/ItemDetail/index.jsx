import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount'
import "./style.css"




const ItemDetail = ({ product }) => {

  const navigate = useNavigate();

  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);

  const handleAdd = (qty) => {
    setQtyAdded(qty);

    console.log("Se Agrego al Carrito " + qty);
    alert("Producto agregado al carrito")
  }
  const handleTerminate = () => {
    navigate('/cart');
  }

  return (
    <div className="ItemDetail">
      <div className='div'>
        <h1>{product.title}</h1>
        <img src={product.image} alt="foto producto" />
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        {!qtyAdded ?
          <ItemCount onConfirm={handleAdd} initialStock={product.stock}/>
          :
          <button className='btn_terminate' onClick={handleTerminate} >Finalizar Compra</button>
        }
      </div>
    </div>
  )
}

export default ItemDetail