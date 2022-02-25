import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { add } from '../slices/cursosSlice'
import './styled.scss'

export default function FormularioCurso(props) {     
    const [obj, setObj] = useState(props.curso);
    const dispatch = useDispatch();
    //const cursos = useSelector(state => state.cursos);
    function handleInputChange(e) {
        console.log(e.target);
        setObj({...obj, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(props.curso);
        dispatch(add(obj));
        props.onClose();
    }
    
    return ( 
        <div className='container' id="painel">        
            <form onSubmit={handleSubmit} >
            <div className='linha-form'>
                <label>Identificador:</label>
                <input  type="text" 
                        name='id'
                        value={obj.id}                         
                        onChange={handleInputChange}
                        />
            </div>
            <div className='linha-form'>
                <label>Nome:</label>
                <input  type="text" 
                        name='name'
                        value={obj.name} 
                        onChange={handleInputChange}
                        />
            </div>
            <div className='linha-form'>
                <label>Horas Totais:</label>
                <input  type="number" 
                        name="totalHours" 
                        value={obj.totalHours} 
                        onChange={handleInputChange}/>
            </div>
            <div className='linha-form'>
                <label>Categorias:</label>
                <ul >                        
                    <input type="text" 
                            name='categories' 
                            value={obj.categories} 
                            disabled />   
                </ul>                     
            </div>
            <input type='submit' value="Salvar" /> 
            </form>
        </div>
    );
}