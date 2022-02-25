import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import Header from '../Header/index';
import { edit } from '../slices/cursosSlice'
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
        dispatch(edit(obj));
    }
    
    return ( 
        <><Header />
        <div className='container' id="painel">
            <form onSubmit={handleSubmit}>
                <div className='linha-form'>
                    <label>Identificador:</label>
                    <input type="text"
                        name='id'
                        value={obj.id}
                        disabled />
                </div>
                <div className='linha-form'>
                    <label>Nome:</label>
                    <input type="text"
                        name='name'
                        value={obj.name}
                        disabled />
                </div>
                <div className='linha-form'>
                    <label>Horas Totais:</label>
                    <input type="number"
                        name="totalHours"
                        value={obj.totalHours}
                        onChange={handleInputChange} />
                </div>
                <div className='linha-form'>
                    <label>Categorias:</label>
                    {obj.categories != null ? obj.categories.map(sub => (
                        <ul key={sub.id}>
                            <input type="text"
                                name='categories'
                                value={sub.name}
                                title={sub.name}
                                onChange={handleInputChange} />
                        </ul>
                    )) : <></>}
                </div>
                <input type='submit' value="Salvar" />
            </form>
        </div></>
    );
}