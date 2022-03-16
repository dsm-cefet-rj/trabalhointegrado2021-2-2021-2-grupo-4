import React, { useState, useEffect } from 'react'
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

  const userList = useSelector(state => state.users.entities.undefined);
  const loggedUserId = useSelector(state => state.logins.ids)[0];
  const [userIsProfessor, setUserIsProfessor] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    const loggedUser = userList && userList.find(u => u._id === loggedUserId);
    if(loggedUser){
      setUserIsProfessor(loggedUser.professor);
      setUserIsAdmin(loggedUser.admin);
    }
  })

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
            <ActivityList users={users[0] } isProfessor={userIsProfessor} isAdmin={userIsAdmin} loggedUserId={loggedUserId} />
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
      <label htmlFor='accordion-1'> <Link to={{pathname: `/painelatividades`, query: {props}}}> {props.user.username} </Link> </label>
    </div>
  );
}

function ActivityList(props){
  if(props.isProfessor||props.isAdmin)
    return(props.users.map((user, i) => <ActivityLine user={user} userId={i}/>));
  else
    return(props.users.filter(user => user._id === props.loggedUserId).map((u,i) => <ActivityLine user={u} userId={i}/>) )
}

export default ListaAlunos;