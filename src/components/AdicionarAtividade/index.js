import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addActivity, updateActivity } from '../slices/ActivitiesSlice';
import './styled.scss'

export default function AdicionarAtividade(props) { 
  
  //const [activity, setActivity] = useState({});
  const activities = useSelector(state => state.activities)
  let { id } = useParams()
  id = parseInt(id)

  const [activity, setActivity] = useState(
    id ? activities.filter((a) => a.id === id)[0] ?? {} : {}
  )

  const [actionType, ] = useState(
    id ? activities.filter((a) => a.id === id)[0] 
       ? '../slices/ActivitiesSlice/updateActivity'
       : '../slices/ActivitiesSlice/addActivity'
      : '../slices/ActivitiesSlice/addActivity'
  )

  const dispatch = useDispatch()

  function handleInputChange(e) {
    setActivity({...activity, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(actionType === '../slices/ActivitiesSlice/addActivity') {
      setActivity(activity.id = props.activities.length+1, activity.category = props.card.id)
      dispatch(addActivity(activity))
    }else{
      dispatch(updateActivity(activity))
    }
    
    props.onClose();
  }

  return ( 
      <div className='container' id="painel">        
        <form onSubmit={handleSubmit} >
          <div className='linha-form'>
            <label>Tipo Atividade</label>
            <select name="type" style={{ width: '250px', textOverflow:'ellipsis'}} onChange={handleInputChange}>
                <option key=""></option>
                {props.card.subcategories.map(sub => (
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