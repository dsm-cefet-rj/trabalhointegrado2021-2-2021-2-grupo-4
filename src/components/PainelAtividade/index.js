import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarAtividade from '../AdicionarAtividade';


function PainelAtividade(props) {
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
    props.setActivities(props.activities.filter((value) => value.id !== id ))
  }

  return(
    <div className='wrapper'>
      <div className='accordion'>
        {cards.map((item, i) => (          
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
              <CardBody className={items != null ? 'pad' : ''}>
                {isNewActivity === i ? 
                  <AdicionarAtividade onClose={() => setIsNewActivity(false)} activities={props.activities} setActivities={props.setActivities} card={item} /> 
                : null}
              </CardBody>
              <hr />
              <ActivityList activities={props.activities} onClickDeleteActivity={handleClickDeleteActivity} card={item} />
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

const ActivityLine = (props) => {
  const [selected, setSelected] = useState(null)

  const handleClickValidateActivity = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (    
    <div className='activity_list container row'>
      <div className='col-1'>{props.activity.id}</div>
      <div className='col-3'>{props.activity.type}</div>
      <div className='col-3'>{props.activity.description}</div>
      <div className='col-1'>{props.activity.hours}</div>
      <div className='col-2'>{props.activity.attachment}</div>
      <div className='col-1'><button className="btn btn-danger btn-block" name='delete_activity' onClick={() => props.onClickDeleteActivity(props.activity.id)}>X</button></div>
      <div className='col-1'><button className={selected === props.keyActivity ? "btn btn-success disabled":"btn btn-success"} name='validate_activity' onClick={() => handleClickValidateActivity(props.keyActivity)}>V</button></div>
    </div>    
  );
}

function ActivityList(props){
  return(
    props.activities.filter((activity) => activity.category === props.card.id ).map((activity, i) => <ActivityLine keyActivity={i} activity={activity} onClickDeleteActivity={props.onClickDeleteActivity} cardId={props.card.id}/>)            
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

export default PainelAtividade;