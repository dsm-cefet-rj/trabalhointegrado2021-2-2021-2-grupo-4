import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarOferta from '../AdicionarOferta';

const check = null

function PainelOfertas() {
  const [selected, setSelected] = useState(null)
  const [isNewOffer, setIsNewOffer] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const handleNewOffer = (i) => {
    if (isNewOffer === i) {
      return setIsNewOffer(null)
    }
    setIsNewOffer(i)
  }

  return(
    <>
    <div className='wrapper'>
      <div className='accordion'>
        {/* {console.log(typeof cards)} */}
        {cards.map((item, i) => (
          <>
          <Card style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>

            <CardBody>  
              <button type="button" style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px'  }} className="btn btn-success btn-block" onClick={() => handleNewOffer(i)}>
                    + 
              </button> 
            </CardBody>

            <CardBody className={check != null ? '' : 'pad'}>
                {isNewOffer === i ? <AdicionarOferta onClose={() => setIsNewOffer(false)}/> : null}
                   
                
            </CardBody>
            <CardBody className={check != null ? '' : 'pad'}>
                {}
            </CardBody>

            {item.content.map((cont) => (
                <>
                <CardBody>
                  {cont.oferta}
                </CardBody>
                </>
              ))}

            
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
    content:  [{oferta:'Iniciação Cientifica [120 horas]'},
               {oferta:'Assistencia de TCC [8 horas]'}],
  }, 
  {
    id: 2, 
    name: 'Extensão',
    content: [{oferta:'Fazer apresentação em evento [10 horas]'},
              {oferta:'Projeto de Extensão [100 horas]'},
              {oferta: 'Assistir apresentação de TCC [1 hora]'}],
  }, 
  {
    id: 3, 
    name: 'Ensino',
    content: [{oferta:'Vaga de Monitor [100 horas]'},
              {oferta:'Disciplina não prevista Y [72 horas]'}],
  }, 
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
    content: [{oferta:'Cineminha [1 hora]'}],
  }
]

export default PainelOfertas;