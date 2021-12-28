import React, { useState } from 'react';
import { Collapse, Card, CardHeader } from 'reactstrap';
import Template from './templateCurso';

function PainelCurso(props) {
  const [selected, setSelected] = useState(null);
  const [cursos, setCursos] = useState(mock);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(null)
    setSelected(i)
  }

  return(
    <div className='wrapper'>
      <div className='accordion'>
        {cursos.map((item) => (
          <Card key={item.id} style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === item.id ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(item.id)}>{item.name}</CardHeader>
            <Collapse className={selected === item.id ? 'content show':'content'}>  
              {(selected===item.id)=== true ? <Template curso={cursos.filter(c => c.id === selected)} /> : null}
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

const mock = [
  {
    id: "BCC", 
    name: 'Bacharelado em Ciência da Computação',
    totalHours: 300,
    categories: [{id: 1, name: 'Ensino'},
                {id: 2, name: 'Extensão'},
                {id: 3, name: 'Pesquisa'},
                {id: 4, name: 'Conscientização HC ou Ambiental'}]
  },
  {
    id: "ADM", 
    name: 'Administração',
    totalHours: 250,
    categories: [{id: 1, name: 'Ensino'},
                {id: 2, name: 'Extensão'},
                {id: 3, name: 'Pesquisa'},
                {id: 4, name: 'Conscientização HC ou Ambiental'}]
  },
  {
    id: "ENG", 
    name: 'Engenharia',
    totalHours: 350,
    categories: [{id: 1, name: 'Ensino'},
                {id: 2, name: 'Extensão'},
                {id: 3, name: 'Pesquisa'},
                {id: 4, name: 'Conscientização HC ou Ambiental'}]
  }
]

export default PainelCurso;