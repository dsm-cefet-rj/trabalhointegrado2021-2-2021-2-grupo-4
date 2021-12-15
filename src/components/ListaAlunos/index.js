import React from 'react'
import './styled.scss'

const ListaAlunos = () => {
  return(
    <body>
    <div class="card-5">
      <div class="card-heading"> 
        <h2 class="title">Contabilização de horas</h2>
      </div>

      <div class="search">
        <form class="search-form">
          <input type="text" class="search-bar" placeholder="Procure por Nome ou CPF"/>
        </form>

      </div>

      <div id="forms" class="card-body modal-body">
        <div class="accordions"> 
          <div class="accordion-item">
            <label for= "accordion-1">Luiz Felipi</label>
          </div> 
          <div class="accordion-item">
            <label for= "accordion-2">Jorge Gabriel</label>
          </div> 
          <div class="accordion-item">
            <label for= "accordion-3">Julia Gratz</label>
          </div>
          <div class="accordion-item">
            <label for= "accordion-4">Baltazhar da Silva</label>
          </div>
        </div>
      </div>
    </div>
  </body>

  ); 
}

export default ListaAlunos;