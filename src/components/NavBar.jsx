import React from "react";
import './NavBar.css';

const NavBar = () => {
    return(
<ul class="topnav">
  <li><a class="active" href="#inicio">Inicio</a></li>
  <li><a href="#nosotros">Nosotros</a></li>
  <li><a href="#productos">Productos</a></li>
  <li><a href="#contacto">Contacto</a></li>
  <li><a href="#ubicacion">Ubicación</a></li>
  <li class="right"><a href="#carrito">Carrito</a></li>
</ul>
    )
}
export default NavBar