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

  return(
    <>
    <div className='wrapper'>
      <div className='accordion'>
        {cards.map((item, i) => (
          <>
          <Card style={{ marginBottom: '1rem' }}>
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
                  <AdicionarAtividade onClose={() => setIsNewActivity(false)} activities={props.activities} setActivities={props.setActivities} /> 
                : null}
              </CardBody>
              <hr />
              <ActivityList activities={props.activities} />
            </Collapse>
          </Card>
          </> 
        ))}
      </div>
    </div>
    </>
  );
}

const ActivityLine = (props) => {
  return (
    <>
    <div class="activity_list container row">
      <div class="col-4">{props.activity.type}</div>
      <div class="col-4">{props.activity.description}</div>
      <div class="col-2">{props.activity.hours}</div>
      <div class="col-2">{props.activity.attachment}</div>
    </div>
      
    </>
  );
}

function ActivityList(props){
  return(
    props.activities.map((activity, i) => <ActivityLine key={i} activity={activity} />)
  );
}

const cards = [
  {
    id: 1, 
    name: 'Pesquisa',
  }, 
  {
    id: 2, 
    name: 'Extensão',
  }, 
  {
    id: 3, 
    name: 'Ensino',
  }, 
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
  }
]

const items = null

export default PainelAtividade;