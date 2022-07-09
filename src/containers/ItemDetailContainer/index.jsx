import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';
import "./style.css"

//obtener los datos de un producto especifico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [error, setError] = useState("");
    

    useEffect( ()=> {
        const getProductos = async () =>{
            try {
                const response = await fetch('/mocks/data.json');
                const data = await response.json();
                console.log(data);
                const result = data.find(data => data.id === 1);
                console.log(result);
                setProductDetail(result);
            } catch (error) {
                console.log(error);
                setError(error.message);
            }

        }
        getProductos();
    }, []);

  return (
    <ItemDetail product={productDetail}/>
  )
}


export default ItemDetailContainer