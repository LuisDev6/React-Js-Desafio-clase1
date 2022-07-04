import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList';
import "./style.css"

/* const handleAdd = () =>{
  console.log("Se Agrego al Carrito");
  alert("Producto agregado al carrito")
} */

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null)

  useEffect(()=>{
    const getProductos = async() => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);

      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

    setTimeout(getProductos,2000);

  }, [])

  console.log(productos)

  return (
    <div>
    <p className='p-greeting'>{greeting}</p>
  {/*   <ItemCount handleAdd={handleAdd} initialStock={10} /> */}
    
    {productos ? 
    <ItemList products={productos}/>
    :
    null
    }
    </div>
  )
}

export default ItemListContainer