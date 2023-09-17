import React from 'react'
import Foodie from './img/FOODIE.svg'
import Cart from './img/material-symbols_shopping-cart-outline-rounded (1).svg'
import './Company.css' 


const Navbar = () => {
  return (
   <nav>
    <div className='textlink'> 
    <a className='textlink2' href="#ini">Início</a>
    <a className='textlink2' href="#sobre">Sobre</a>
    <a className='textlink2' href="#dep">Depoimentos</a>
    <a className='textlink2' href="#cont" >Contato</a>
    </div>
    <div className='foodie'>
        <img id="ini" src={Foodie}/>
    </div>
    <div className='divbutt0n'>
      <button className='button'>Compre agora</button>
    </div>
    <div className='divcart'>
        <img className='cart'src={Cart}/>
    </div>
   </nav>
  )
}

export default Navbar
