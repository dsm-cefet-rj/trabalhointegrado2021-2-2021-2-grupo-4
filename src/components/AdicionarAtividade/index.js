import React, {useState } from 'react'
import './styled.scss'

export default function AdicionarAtividade(props) {

  const [activity, setActivity] = useState({});

  function handleInputChange(e) {
    setActivity({...activity, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setActivities(props.activities.concat(activity))
    props.onClose()
  }

  return (
    <>
    <hr />
      <div className='container' id="painel">        
        <form onSubmit={handleSubmit}>
          <tr>
            <th>Tipo Atividade</th>
            <th>Descrição</th>
            <th>Horas</th>
            <th>Anexo</th>
          </tr>
          <tr>
            <td>
              <select name="type" onChange={handleInputChange} >
                <option value={activity.type}></option>
                <option value={activity.type}>Iniciação Científica</option>
                <option value={activity.type}>Publicações</option>
                <option value={activity.type}>Participação em Pesquisa</option>
                <option value={activity.type}>Ass. a monografia, teses...</option>
              </select>
            </td>    
            <td>
              <input type="text" name='description' value={activity.description} onChange={handleInputChange}/>
            </td>    
            <td>
              <input type="number" name="hours" value={activity.hours} onChange={handleInputChange}/>
            </td> 
            <td>
              <input type="file" name='attachment' value={activity.attachment} onChange={handleInputChange}/>
            </td>         
          </tr>
          <button id="comeco" type='submit' value="Salvar" >Submit</button>   
        </form>
      </div>
    </>
  );
}