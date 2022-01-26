import React, { useState } from 'react'
//import './styled.scss'

export default function FormularioCurso(props) { 
    const [obj, setObj] = useState(props.curso[0]);

    function handleInputChange(e) {
        console.log(e.target.value);
        setObj({...obj, [e.target.name]: e.target.value });
        console.log(obj)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.set(obj);
        //props.onClose();
    }

    return ( 
        <div className='container' id="painel">        
            <form onSubmit={handleSubmit} >
            <div className='linha-form'>
                <label>Identificador:</label>
                <input  type="text" 
                        name='sigla'
                        value={obj.id} 
                        disabled/>
            </div>
            <div className='linha-form'>
                <label>Nome:</label>
                <input  type="text" 
                        name='description'
                        value={obj.name} 
                        disabled/>
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
                <select name="type" style={{ width: '250px', textOverflow:'ellipsis'}} onChange={handleInputChange}>
                    <option key=""></option>
                    {obj.categories.map(sub => (
                    <option key={sub.id} style={{ width: '250px', textOverflow:'ellipsis'}} value={obj.categories.name}>
                        {sub.name}</option>               
                    ))}
                </select> 
            </div>
            <button id="updateCurso" type='submit' value="Salvar" >Salvar</button>   
            </form>
        </div>
    );
}