import React, { useState } from 'react'
import "./styled.scss";



function PainelAtividade() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return(
    <>
    <div className="menu_navegacao">
      <nav className="nav-bar">
        <a>Painel Aluno</a>
      </nav>
    </div>
    
    <div className='wrapper'>
      <div className='accordion'>
        {cards.map((item, i) => (
          <div className='item'> 
            <div className='title' onClick={() => toggle(i)}>
              <h3>{item.name}</h3>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              <hr/>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>   

   
    </>
  );
}

const cards = [
  {
    id: 1, 
    name: 'Pesquisa',
    content: 'Adicionar Atividade',
  }, 
  {
    id: 2, 
    name: 'Extensão',
    content: 'Adicionar Atividade',
  }, 
  {
    id: 3, 
    name: 'Ensino',
    content: 'Adicionar Atividade',
  }, 
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
    content: 'Adicionar Atividade',
  }
]

export default PainelAtividade;