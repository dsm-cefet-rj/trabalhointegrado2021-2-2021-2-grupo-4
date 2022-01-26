import React from 'react'
import { Link } from 'react-router-dom';
import './styled.scss'

/**
 * @module components/ListaAlunos
 */

/**
 * Renderiza a lista de alunos presentes no banco de dados que possuem
 * atividades em seu painel 
 */

const ListaAlunos = () => {

  const students = [
    {
      id: 1, 
      name: 'Luiz Felipi',
    }, 
    {
      id: 2, 
      name: 'Jorge Gabriel',
    }, 
    {
      id: 3, 
      name: 'Julia Gratz',
    },
    {
      id: 4,
      name: 'Balthazar Paixao',
    }
  ]
  return(
    <div className="card-5">

      <div className="search-div">
        <form className="search-form">
          <input type="text" className="search-bar" placeholder="Procure por Nome ou CPF"/>
        </form>
      </div>

      <div id="forms" className="card-body modal-body">
        <div className="accordions"> 
          {students.map((item, i) => (
            <div className="accordion-item" key={i}>
              <label htmlFor='accordion-1'> <Link to='/painelatividades'> {item.name} </Link> </label>
            </div> 
          ))}
        </div>
      </div>
    </div>
  ); 
}

export default ListaAlunos;