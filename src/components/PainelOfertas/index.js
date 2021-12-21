import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";


function PainelOfertas() {
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
        <>
        <Card style={{ marginBottom: '1rem' }}>
        <CardHeader className={selected === 0 ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(0)}>Ofertas</CardHeader>
        <Collapse className={selected === 0 ? 'content show' : 'content'}>
            <CardBody>
            Ofertar Atividade
            <button style={{ marginLeft: '10px' }} className="btn btn-success btn-block" type="submit">
                +
            </button>
            </CardBody>
        </Collapse>
        </Card>
        </> 
      </div>
    </div>
    </>
  );
}


export default PainelOfertas;