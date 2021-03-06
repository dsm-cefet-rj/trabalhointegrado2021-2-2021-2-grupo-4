import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addActivityServer, selectActivitiesById, updateActivityServer } from '../slices/ActivitiesSlice';
import './styled.scss'
import { activitySchema } from '../../schemas/ActivitySchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

/**
 * @module components/AdicionarAtividade
 */

/**
 * @typedef Atividade 
 * @type {object}
 * @property {number} id - identificador
 * @property {string} type - tipo de atividade
 * @property {string} description - descrição da atividade
 * @property {number} hours - quantidade de horas concluídas
 * @property {file} attachment - comprovante ou certificado de conclusão de atividade
 * @param {*} props 
 */

/**
 * Renderiza uma modal para adição de atividade no PainelAtividade 
 * @params {Atividade} props.atividade - Atividade que será criada no painel
 */

const AdicionarAtividade = (props) => { 
  
  const history = useNavigate()
  const dispatch = useDispatch()
  //const categories = dispatch(fetchCategories());
  let { id } = useParams()
  id = id ? id : null
  const activityFound = useSelector(state => selectActivitiesById(state, id))

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(activitySchema)
  });

  const [activityOnLoad] = useState(
    id ? activityFound ?? activitySchema.cast({}): activitySchema.cast({}));
  

  const [actionType, ] = useState(
    id ? activityFound 
       ? '../slices/ActivitiesSlice/updateActivityServer'
       : '../slices/ActivitiesSlice/addActivityServer'
      : '../slices/ActivitiesSlice/addActivityServer'
  )

  // function handleInputChange(e) {
  //   setActivity({...activity, [e.target.name]: e.target.value })
  // }

  function onSubmit(activity) {
    if(actionType === '../slices/ActivitiesSlice/addActivityServer') {
      const auxActivity = {
        id: props.activities.length+1,
        description: activity.description,
        type: activity.type,
        category: props.card.id,
        hours: activity.hours,
        validated: false
      }
      dispatch(addActivityServer(auxActivity))
      props.onClose();
    }else{
      dispatch(updateActivityServer({ ...activity, id: activityFound.id }))
      history('/painelatividades')
    }
  }
  debugger;
  const card = props.card ? props.card : cards.filter((c) => c.categoryCode === activityFound.category)[0]
  
  return ( 
    <>
    <div className='container' id="painel">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='linha-form'>
          <label>Tipo Atividade</label>
          <select name="type" style={{ width: '250px', textOverflow: 'ellipsis' }} {...register("type", { required: true })} >
            <option key=""></option>
            {card.subcategories.map(sub => (
              <option key={sub.id + '_' + card.id}
                style={{ width: '250px', textOverflow: 'ellipsis' }}
                value={sub.name}>
                {sub.name}</option>
            ))}
          </select>
          &nbsp;<br /><span>{errors.type?.message}</span>
        </div>
        <div className='linha-form'>
          <label>Descrição</label>
          <input type="text"
            name="description"
            defaultValue={activityOnLoad.description}
            {...register("description", { required: true })} />
            &nbsp;<br /><span>{errors.description?.message}</span>
        </div>
        <div className='linha-form'>
          <label>Horas</label>
          <input type="number"
            name="hours"
            defaultValue={activityOnLoad.hours}
            {...register("hours", { required: true })} />
            &nbsp;<br /><span>{errors.hours?.message}</span>
        </div>
        {/* <div className='linha-form'>
      <label>Anexo</label>
      <input type="file"
             name='attachment'
             value={activity.attachment}
             onChange={handleInputChange}/>
    </div> */}
        <button id="comeco" type='submit' value="Salvar">Salvar</button>
      </form>
    </div></>
  );
}

const cards = [
  {
    categoryCode: 1, 
    name: 'Pesquisa',
    subcategories: [{id: 1, name: 'Iniciação científica'},
                    {id: 2, name: 'Publicações'},
                    {id: 3, name: 'Participação em projetos de pesquisa'},
                    {id: 4, name: 'Assistência a monografias, teses e dissertações'}]
  },
  {
    categoryCode: 2, 
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
    categoryCode: 3, 
    name: 'Ensino',
    subcategories: [{id: 1, name: 'Disciplinas não previstas'},
                    {id: 2, name: 'Monitoria'}]
  },
  {
    categoryCode: 4, 
    name: 'AC HC ou Ambiental',
    subcategories: [{id: 1, name: 'Conscientização de questões histórico-culturais'},
                    {id: 2, name: 'Ambientais'}]
  }
]

export default AdicionarAtividade;