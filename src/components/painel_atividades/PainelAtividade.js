import React, { Component } from 'react'
import "./styled.scss";

class PainelAtividade extends Component {
  render () {
      return(
        
        <>
        <div className="menu_navegacao">
          <nav className="nav-bar">
            <a onclick="mostraTela('painel-aluno')">Painel Aluno</a>
          </nav>
        </div>
        <div className="card-5">
          <div id="forms" className="card-body modal-body">
            <div className="accordions">
              <div className="accordion-item">
                <input type="radio" name="accordion" checked="checked" id="accordion-1" />
                <label for="accordion-1">Pesquisa</label>
                <div className="accordion-content text-center">Atividade <button><strong>+</strong></button></div>
              </div>
              <div className="accordion-item">
                <input type="radio" name="accordion" id="accordion-2" />
                <label for="accordion-2">Extensão</label>
                <div className="accordion-content text-center">Atividade <button><strong>+</strong></button></div>
                <div className="accordion-content text-center">Seminários, conferências, palestras - 1h - #ANEXO#</div>
              </div>
              <div className="accordion-item">
                <input type="radio" name="accordion" id="accordion-3" />
                <label for="accordion-3">Ensino</label>
                <div className="accordion-content text-center">Atividade <button><strong>+</strong></button> </div>
              </div>
              <div className="accordion-item">
                <input type="radio" name="accordion" id="accordion-4" />
                <label for="accordion-4">AC, HC ou Ambiental</label>
                <div className="accordion-content text-center">Atividade <button><strong>+</strong></button></div>
              </div>
            </div>
          </div>
          <div className="text-center"> @Copyright Group 4 PSW - 2021.2</div>
        </div>
        
      </>
    );
  }
}

export default PainelAtividade;