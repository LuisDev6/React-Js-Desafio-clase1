import React from 'react'
import ItemCount from '../../components/ItemCount'
import "./style.css"

const handleAdd = () =>{
  console.log("Se Agrego al Carrito");
  alert("Producto agregado al carrito")
}

const ItemListContainer = ({greeting}) => {
  return (
    <div>
    <p className='p-greeting'>{greeting}</p>
    <ItemCount handleAdd={handleAdd} initialStock={10} />
    </div>
  )
}

export default ItemListContainer