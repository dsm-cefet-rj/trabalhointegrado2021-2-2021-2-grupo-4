import React, { useEffect, useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarAtividade from '../AdicionarAtividade';
import { useSelector, useDispatch } from 'react-redux';
import { deleteActivityServer, fetchActivities, selectAllActivities } from '../slices/ActivitiesSlice';
import { selectAllCategories } from '../slices/CategoriesSlice';
import { Link } from 'react-router-dom'


/**
 * @module components/PainelAtividade
 */

/**
 * Um painel que renderiza a lista de atividades de um determinado aluno e acopla 
 * funções de CRUD em seu escopo
 * 
 */

const PainelAtividade = (props) => {
  const activities = useSelector(selectAllActivities)
  const categories = useSelector(selectAllCategories)
  const status = useSelector(state => state.activities.status)
  const error = useSelector(state => state.activities.error)

  const dispatch = useDispatch()

  const [selected, setSelected] = useState(null)
  const [isNewActivity, setIsNewActivity] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const handleNewActivity = (i) => {
    if (isNewActivity === i) {
      return setIsNewActivity(null)
    }
    setIsNewActivity(i)
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
        {categories.map((item, i) => (          
          <Card style={{ marginBottom: '1rem' }} key={i}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>
              <CardBody>
                Adicionar Atividade
                <button type="button" 
                        style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px'  }} 
                        className="btn btn-success btn-block" 
                        onClick={() => handleNewActivity(i)} >
                  + 
                </button>
              </CardBody>
              
                {isNewActivity === i ? 
                  <CardBody className={items != null ? 'pad' : ''}>
                    <AdicionarAtividade onClose={() => setIsNewActivity(false)} activities={activities} dispatch={dispatch} card={item} /> 
                  </CardBody>
                  : null
                }
              <hr />
              {status === 'loaded' || status === 'saved' || status === 'deleted' ?
                <ActivityList activities={activities} onClickDeleteActivity={handleClickDeleteActivity} card={item} />
                : tableActivities
              }
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

const ActivityLine = (props) => {
  return (    
    <div className='activity_list container row'>
      <div className='col-1'> <Link to={{pathname: `/adicionaratividade/${props.activity.id}`, query: {props}}} > <button>{props.activityId}</button> </Link></div>
      <div className='col-3'>{props.activity.type}</div>
      <div className='col-3'>{props.activity.description}</div>
      <div className='col-2'>{props.activity.hours}</div>
      {/* <div className='col-2'>{props.activity.attachment}</div> */}
      <div className='col-1'><button className="btn btn-danger btn-block" name='delete_activity' onClick={() => props.onClickDeleteActivity(props.activity.id)}>X</button></div>
    </div>    
  );
}

function ActivityList(props){
  return(
    props.activities.filter((activity) => activity.category === props.card.id ).map((activity, i) => <ActivityLine activity={activity} onClickDeleteActivity={props.onClickDeleteActivity} card={props.card} activityId={i}/>)            
  );
}

const items = null

export default PainelAtividade;