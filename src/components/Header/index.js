import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './styled.scss'

const Header = () => {
  return(
    <div className="menu_navegacao">
      <Link to='/'> <img style={{ backgroundcolor: '#fff', width: '55px', marginTop: '5px', marginBottom: '10px', position: 'absolute' }} src={logo} alt='SGHC'/> </Link>
      <nav className="nav-bar">
        <Link to='/'> Painel Aluno </Link>
        <Link to='/painelofertas'> Painel de Ofertas </Link>
        {/* <Link to='/validacao'> Validação </Link> */}
      </nav>
    </div>
  ); 
}

export default Header;