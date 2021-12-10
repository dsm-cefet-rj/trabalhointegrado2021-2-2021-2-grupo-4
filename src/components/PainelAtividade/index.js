import React, { Component, useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";

class PainelAtividade extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {  collapse: 0, 
                    cards: [[1, 'Pesquisa'], [2, 'Extensão'], [3, 'Ensino'], [4, 'AC HC ou Ambiental']]
                  };
  }

  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
  }

  render () {
    const {cards, collapse} = this.state;
    return(
      <>
      <div className="menu_navegacao">
        <nav className="nav-bar">
          <a>Painel Aluno</a>
        </nav>
      </div>
      <div style={{ marginTop: '1rem' }} className="container">
        
        {cards.map(index => {
          return (
            <Card style={{ marginBottom: '1rem' }} key={index[0]}>
              <CardHeader className= {this.state.collapse ? 'accordion-button': 'accordion-button collapsed'} onClick={this.toggle} data-event={index[0]}>{index[1]}</CardHeader>
              <Collapse isOpen={collapse === index[0]}>
              <CardBody>
                Adicionar Atividade 
                <button style={{ marginLeft: '10px' }} className="btn btn-success btn-block">
                    +
                </button>
              </CardBody>
              </Collapse>
            </Card>
          )
        })}     

      </div>
      </>
    );
  }
}

export default PainelAtividade;