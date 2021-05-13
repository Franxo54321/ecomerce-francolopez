import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
    return <>
    
    <NavBar/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
        <div class="container-fluid" id="top">
          <a class="navbar-brand" href="index.html">Inicio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"  style="margin-right: 30px;">
            <ul class="navbar-nav" id="navbar">
               <li class="nav-item">
                <a class="nav-link " href="">Quienes Somos</a>
                <li class="nav-item">
                <a class="nav-link" href="">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Donde encontrarnos</a>
              </li>
              <li class="nav-item" id="login">
                <a class="nav-link" href="">Log In</a>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>;
}




