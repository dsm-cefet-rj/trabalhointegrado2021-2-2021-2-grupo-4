import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addActivity, updateActivityServer } from '../slices/ActivitiesSlice';
import './styled.scss'

const AdicionarAtividade = (props) => { 
  
  const activities = useSelector(state => state.activities.activities)
  const history = useNavigate()
  const dispatch = useDispatch()
  let { id } = useParams()
  id = id ? Number.parseInt(id) : null

  const [activity, setActivity] = useState(
    id ? activities.filter((a) => a.id === id)[0] ?? {} : {}
  )

  const [actionType, ] = useState(
    id ? activities.filter((a) => a.id === id)[0] 
       ? '../slices/ActivitiesSlice/updateActivity'
       : '../slices/ActivitiesSlice/addActivity'
      : '../slices/ActivitiesSlice/addActivity'
  )

  function handleInputChange(e) {
    setActivity({...activity, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(actionType === '../slices/ActivitiesSlice/addActivity') {
      setActivity(activity.id = props.activities.length+1, activity.category = props.card.id)
      dispatch(addActivity(activity))
      props.onClose();
    }else{
      dispatch(updateActivityServer(activity))
      history('/painelatividades')
    }
  }

  const card = props.card ? props.card : cards.filter((c) => c.id === activity.category)[0]
  
  return ( 
      <div className='container' id="painel">        
        <form onSubmit={handleSubmit} >
          <div className='linha-form'>
            <label>Tipo Atividade</label>
            <select name="type" style={{ width: '250px', textOverflow:'ellipsis'}} onChange={handleInputChange}>
                <option key=""></option>
                {card.subcategories.map(sub => (
                  <option key={sub.id} style={{ width: '250px', textOverflow:'ellipsis'}} value={activity.type}>
                      {sub.name}</option>               
                ))}
            </select>            
          </div>
          <div className='linha-form'>
            <label>Descrição</label>
            <input  type="text" 
                    name='description' 
                    value={activity.description} 
                    onChange={handleInputChange}/>
          </div>
          <div className='linha-form'>
            <label>Horas</label>
            <input  type="number" 
                    name="hours" 
                    value={activity.hours} 
                    onChange={handleInputChange}/>
          </div>
          <div className='linha-form'>
            <label>Anexo</label>
            <input type="file" 
                   name='attachment' 
                   value={activity.attachment} 
                   onChange={handleInputChange}/>
          </div>
          <button id="comeco" type='submit' value="Salvar" >Salvar</button>   
        </form>
      </div>
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

export default AdicionarAtividade;