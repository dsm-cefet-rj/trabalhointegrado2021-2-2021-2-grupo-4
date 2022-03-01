import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';
import { fetchUsers, selectAllUsers } from '../slices/UsersSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/index';
import './styled.scss'

/**
 * @module components/ListaAlunos
 */

/**
 * Renderiza a lista de alunos presentes no banco de dados que possuem
 * atividades em seu painel 
 */

const ListaAlunos = () => {
  const users = useSelector(selectAllUsers)
  const status = useSelector(state => state.users.status)
  const error = useSelector(state => state.users.error)

  const dispatch = useDispatch();

  useEffect(() => {
    if(status ==='not_loaded' ) {
      dispatch(fetchUsers())
    }else if(status === 'failed'){
      setTimeout(() => dispatch(fetchUsers()), 2000)
    }
  }, [status, dispatch])

  let tableActivities = null
  if(status === 'loading_users'){
    tableActivities = <div>Carregando Atividades... </div>
  } else if(status === 'failed') {
    tableActivities = <div>Error: {error} </div>
  }
  return(
    console.log(users),
    <><Header />

    <div className="card-5">

      <div className="search-div">
        <form className="search-form">
          <input type="text" className="search-bar" placeholder="Procure por Nome ou CPF" />
        </form>
      </div>

      <div id="forms" className="card-body modal-body">
        <div className="accordions">
          {status === 'loaded' || status === 'saved' || status === 'deleted' ?
            <ActivityList users={users[0]} />
            : tableActivities}
        </div>
      </div>
    </div>
    
    </>
  ); 
}

const ActivityLine = (props) => {
  return (  
    console.log(props.user),
    <div className="accordion-item" key={props.userId}>
      <label htmlFor='accordion-1'> <Link to={{pathname: `/painelatividades/${props.user.id}`, query: {props}}}> {props.user.username} </Link> </label>
    </div>
  );
}

function ActivityList(props){
  return(
    props.users.map((user, i) => <ActivityLine user={user} userId={i}/>)            
  );
}

export default ListaAlunos;