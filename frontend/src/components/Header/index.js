import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './styled.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../slices/UsersSlice';

const Header = () => {

  const dispatch = useDispatch();

  const users = useSelector(state => state.users.entities)['undefined'];
  const status = useSelector(state => state.users.status);
  const loggedUserId = useSelector(state => state.logins.ids)[0];
  const [userIsProfessor, setUserIsProfessor] = useState(false);

  useEffect(() => {
    const loggedUser = users && users.find(u => u._id === loggedUserId);
    if(loggedUser)
      setUserIsProfessor(loggedUser.professor);
  })

  return(
    <div className="menu_navegacao">
      <Link to='/'> <img style={{ backgroundcolor: '#fff', width: '55px', marginTop: '5px', marginBottom: '10px', position: 'absolute' }} src={logo} alt='SGHC'/> </Link>
      <nav className="nav-bar">
        <Link to='/listaalunos'> Painel Aluno </Link>
        <Link to='/painelofertas'> Painel de Ofertas </Link>
        <Link to='/painelcurso'> Cursos </Link>
        <Link to='/painelvalidacao'> Painel Validação </Link>
        { userIsProfessor ? <Link to='/categorias'> Categorias </Link> : null }
      </nav>
    </div>
  ); 
}

export default Header;