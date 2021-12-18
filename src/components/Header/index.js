import React from 'react'
import { Link } from 'react-router-dom';
import './styled.scss'

const Header = () => {
  return(
    <div className="menu_navegacao">
      <nav className="nav-bar">
        <Link to='/'> Painel Aluno </Link>
        <Link to='/painelofertas'> Painel de Ofertas </Link>
      </nav>
    </div>
  ); 
}

export default Header;