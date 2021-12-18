import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
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
    <div className='wrapper'>
      <div className='accordion'>
        {cards.map((item, i) => (
          <>
          <Card style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>
              <CardBody>
                Adicionar Atividade
                <Link type="button" to="/adicionaratividade" style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px'  }} className="btn btn-success btn-block" type="submit">
                  + 
                </Link>
              </CardBody>
              <CardBody className={items != null ? '' : 'pad'}>
                { }
              </CardBody>
            </Collapse>
          </Card>
          </> 
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
  }, 
  {
    id: 2, 
    name: 'Extensão',
  }, 
  {
    id: 3, 
    name: 'Ensino',
  }, 
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
  }
]

const items = null

export default PainelAtividade;