import React from 'react';
import home from '../../Assets/home.jpg'
import './Home.css'

const HomePage = () => {
  return (
    <>
    <h1>
      Pagina principal
    </h1>
    <hr />
    <div className='contenedores'>
      <div className='contenedor1'>
        <p>Frase de bienvenida</p>
      </div>
      <figure >
      <img src={ home } alt="imagenhome" className='imagen' />
      </figure>
    </div>
    </>
  )
}

export default HomePage
