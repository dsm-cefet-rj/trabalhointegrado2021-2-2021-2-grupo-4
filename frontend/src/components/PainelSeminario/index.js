import React, { useEffect, useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarAtividade from '../AdicionarAtividade';
import { useSelector, useDispatch } from 'react-redux';
import { deleteActivityServer, fetchActivities, selectAllActivities } from '../slices/ActivitiesSlice';
import { Link } from 'react-router-dom'


/**
 * @module components/PainelSeminario
 */

/**
 * Um painel que renderiza a lista de atividades de um determinado aluno e acopla 
 * funções de CRUD em seu escopo
 * 
 */

const PainelSeminario = (props) => {
  const activities = useSelector(selectAllActivities)
  const status = useSelector(state => state.activities.status)
  const error = useSelector(state => state.activities.error)

  const dispatch = useDispatch();
  //const categories = dispatch(fetchCategories());

  const [selected, setSelected] = useState(null)
  const [isNewSeminary, setIsNewSeminary] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const handleNewActivity = (i) => {
    if (isNewSeminary === i) {
      return setIsNewSeminary(null)
    }
    setIsNewSeminary(i)
  }

  const handleClickDeleteActivity = (id) => {
    dispatch(deleteActivityServer(id))
  }

  useEffect(() => {
    if(status ==='not_loaded' ) {
      dispatch(fetchActivities())
    }else if(status === 'failed'){
      setTimeout(() => dispatch(fetchActivities()), 2000)
    }
  }, [status, dispatch])

  let tableActivities = null
  if(status === 'loading'){
    tableActivities = <div>Carregando Atividades... </div>
  } else if(status === 'failed') {
    tableActivities = <div>Error: {error} </div>
  }

  return(
    <div className='wrapper'>
      <div className='accordion'>       
        <Card style={{ marginBottom: '1rem' }}>
          <CardHeader className={selected === 0 ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(0)}>{'Seminários'}</CardHeader>
          <Collapse className={selected === 0 ? 'content show' : 'content'}>
            <CardBody>
              Adicionar Atividade
              <button type="button" 
                      style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px'  }} 
                      className="btn btn-success btn-block" 
                      onClick={() => handleNewActivity()} >
                + 
              </button>
            </CardBody>
            
              {isNewSeminary === 0 ? 
                <CardBody className={items != null ? 'pad' : ''}>
                  <AdicionarAtividade onClose={() => setIsNewSeminary(false)} activities={activities} dispatch={dispatch} /> 
                </CardBody>
                : null
              }
            <hr />
            {status === 'loaded' || status === 'saved' || status === 'deleted' ?
              <ActivityList activities={activities} onClickDeleteActivity={handleClickDeleteActivity} />
              : tableActivities
            }
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

const ActivityLine = (props) => {
  return (    
    <div className='activity_list container row'>
      <div className='col-1'> <Link to={{pathname: `/adicionaratividade/${props.activity.id}`, query: {props}}} > <button>{props.activityId}</button> </Link></div>
      <div className='col-3'>{props.activity.type}</div>
      <div className='col-5'>{props.activity.description}</div>
      <div className='col-2'>{props.activity.hours}</div>
      {/* <div className='col-2'>{props.activity.attachment}</div> */}
      <div className='col-1'><button className="btn btn-danger btn-block" name='delete_activity' onClick={() => props.onClickDeleteActivity(props.activity.id)}>X</button></div>
    </div>    
  );
}

function ActivityList(props){
  return(
    props.activities
      .filter(
        (activity) => activity.category === props?.card?.id )
      .map(
        (activity, i) => 
          <ActivityLine 
            activity={activity} 
            onClickDeleteActivity={props.onClickDeleteActivity} 
            card={props.card} 
            activityId={i}
          />
        )            
  );
}

const items = null

export default PainelSeminario;