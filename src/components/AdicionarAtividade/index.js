import React, { useState } from 'react'
import './styled.scss'

export default function AdicionarAtividade(props) { 
  const [activity, setActivity] = useState({});

  function handleInputChange(e) {
    setActivity({...activity, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.activities);
    props.setActivities(props.activities.concat(activity));
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