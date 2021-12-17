import React from 'react'
import { Link } from 'react-router-dom';
import './styled.scss'

const ListaAlunos = () => {
  return(
    <body>
    <div class="card-5">

      <div class="search">
        <form class="search-form">
          <input type="text" class="search-bar" placeholder="Procure por Nome ou CPF"/>
        </form>

      </div>

      <div id="forms" class="card-body modal-body">
        <div class="accordions"> 
          <div class="accordion-item">
            <label for= "accordion-1"> <Link to='/painelatividades'> Luiz Felipi </Link> </label>
          </div> 
          <div class="accordion-item">
            <label for= "accordion-2"> <Link to='/painelatividades'> Jorge Gabriel</Link></label>
          </div> 
          <div class="accordion-item">
            
            <label for= "accordion-3"><Link to='/painelatividades'>  Julia Gratz </Link></label>
          </div>
          <div class="accordion-item">
            <label for= "accordion-4"> <Link to='/painelatividades'> Baltazhar da Silva</Link></label>
          </div>
        </div>
      </div>
    </div>
  </body>

  ); 
}

export default ListaAlunos;