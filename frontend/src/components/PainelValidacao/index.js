import React, { useEffect, useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarAtividade from '../AdicionarAtividade';
import { useSelector, useDispatch } from 'react-redux';
import { deleteActivityServer, fetchActivities, selectAllActivities, selectActivitiesById } from '../slices/ActivitiesSlice';
import { Link } from 'react-router-dom'



/**
 * @module components/PainelValidacao
 */

/**
 * Painel voltado para o professor responsável pelas atividades complementares validar
 * as ativdades de cada aluno
 */



const PainelValidacao = (props) => {
  const activities = useSelector(selectAllActivities)
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

  const handleClickValidateActivity = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
    setActivity(activity.validated = true)
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
        {cards.map((item, i) => (          
          <Card style={{ marginBottom: '1rem' }} key={i}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>
              <CardBody>
              </CardBody>
              
                {isNewActivity === i ? 
                  <CardBody className={items != null ? 'pad' : ''}>
                    <AdicionarAtividade onClose={() => setIsNewActivity(false)} activities={activities} dispatch={dispatch} card={item} /> 
                  </CardBody>
                  : null
                }
              <hr />
              {status === 'loaded' || status === 'saved' || status === 'deleted' ?
                <ActivityList activities={activities} onClickValidateActivity={handleClickValidateActivity} card={item} />
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
  const activityFound = useSelector(state => selectActivitiesById(state, props.activity.id))
  const [selected, setSelected] = useState(null)
  const [activity, setActivity] = useState(
    props.activity.id ? activityFound ?? {} : {}
  )

/*const handleClickValidateActivity = (i) => {
    if (selected === i) {
//      console.log("entrou no if");
      return setSelected(null)
    }
//    console.log("entrou no else")
    setSelected(i)
    setActivity(activity.validated = true)
  }
*/
  
  return (    
    <div className='activity_list container row'>
      <div className='col-1'> <Link to={{pathname: `/adicionaratividade/${props.activity.id}`, query: {props}}} > <button>{props.activityId}</button> </Link></div>
      <div className='col-3'>{props.activity.type}</div>
      <div className='col-3'>{props.activity.description}</div>
      <div className='col-2'>{props.activity.hours}</div>
      <div className='col-1'><button className={selected === props.activity.id ? "btn btn-success disabled":"btn btn-success"} name='validate_activity' onClick={() => handleClickValidateActivity(props.keyActivity)}>V</button></div>
    </div>
  );
}

function ActivityList(props){
  return(
    props.activities.filter((activity) => activity.category === props.card.id ).map((activity, i) => <ActivityLine activity={activity} onClickValidateActivity={props.onClickValidateActivity} card={props.card}/>)            
  );
}

const cards = [
  {
    id: 1, 
    name: 'Pesquisa',
    subcategories: [{id: 1, name: 'Iniciação científica'},
                    {id: 2, name: 'Publicações'},
                    {id: 3, name: 'Participação em projetos de pesquisa'},
                    {id: 4, name: 'Assistência a monografias, teses e dissertações'}]
  },
  {
    id: 2, 
    name: 'Extensão',
    subcategories: [{id: 1, name: 'Organização e/ou colaboração em eventos e atividades institucionais'},
                    {id: 2, name: 'Seminários, conferências, palestras, oficinas e visitas técnicas'},
                    {id: 3, name: 'Participação em projetos de extensão'},
                    {id: 4, name: 'Presença em bancas de projeto final de curso'},
                    {id: 5, name: 'Cursos de atualização, qualificação e certificação tecnológica'},
                    {id: 6, name: 'Cursos de língua estrangeira'},
                    {id: 7, name: 'Assistência, assessoria e consultoria técnica'}]
  },
  {
    id: 3, 
    name: 'Ensino',
    subcategories: [{id: 1, name: 'Disciplinas não previstas'},
                    {id: 2, name: 'Monitoria'}]
  },
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
    subcategories: [{id: 1, name: 'Conscientização de questões histórico-culturais'},
                    {id: 2, name: 'Ambientais'}]
  }
]

const items = null

export default PainelValidacao;