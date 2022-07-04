import React from 'react'
import "./style.css"
import 'materialize-css/dist/css/materialize.min.css'
import ItemCount from '../ItemCount'

const handleAdd = () =>{
    console.log("Se Agrego al Carrito");
    alert("Producto agregado al carrito")
  }


const Item = ({ product }) => {
    return (
        <div className='items'>
            <div className="row">
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <img src={product.image} alt="foto producto"/>
                                {/* <span className="card-title"></span> */}
                        </div>
                        <div className="card-content">
                            <p className='title'>{product.title}</p>
                            <p>Descripcion:</p> 
                            <p>{product.description}</p>
                            <p>Precio: ${product.price}</p>
                            <ItemCount handleAdd={handleAdd} initialStock={10} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item