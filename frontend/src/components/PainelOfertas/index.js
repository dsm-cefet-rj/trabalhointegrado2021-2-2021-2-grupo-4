import React, { useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarOferta from '../AdicionarOferta';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'



const check = null



function PainelOfertas(props) {
  const [selected, setSelected] = useState(null)
  const [isNewOffer, setIsNewOffer] = useState(null)
  const dispatch = useDispatch();


  const ofertas = useSelector(state => state.ofertas)


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  function handleOfferDeletion(e) {
    console.log("teste");
    e.preventDefault();
    dispatch({type:'remove_offer', payload: parseInt(e.target.value)});     
}

  const handleNewOffer = (i) => {
    if (isNewOffer === i) {
      return setIsNewOffer(null)
    }
    setIsNewOffer(i)
  }

  return(
    <div className='wrapper'>
      {/* {console.log(props.ofertas.type)} */}
      <div className='accordion'>
        {cards.map((item, i) => (
          <Card key={item.id} style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>
              <CardBody>  
                <button type="button" style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px'  }} className="btn btn-success btn-block" onClick={() => handleNewOffer(i)}>
                      + 
                </button> 
              </CardBody>
              <CardBody className={check != null ? '' : 'pad'}>
                  {isNewOffer === i ? <AdicionarOferta onClose={() => setIsNewOffer(false)} card={item} /> : null}
              </CardBody>
              <CardBody className={check != null ? '' : 'pad'}>
                  {}
              </CardBody>
                {ofertas.filter((oferta) => oferta.category === item.id).map(o =>
                    <CardBody key={i}>
                      <tr> Tipo: {o.type} </tr> 
                      <tr> Descrição: {o.description} 
                      <td> 
                        <Button type="button" value= {o.id} onClick={handleOfferDeletion} style={{ marginLeft: '10px', paddingRight: '15px', paddingLeft: '15px', borderRadius:'20px'  }} variant="danger"  >
                          X
                        </Button>
                        <Button type="button" style={{ marginLeft: '10px', paddingRight: '15px', paddingLeft: '15px', borderRadius:'20px'  }} variant="warning"  >
                          Editar
                        </Button>
                      </td>
                      
                      </tr>
                      
                    </CardBody>
                )}
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1, 
    name: 'Pesquisa',
    content:  [{id: 1, oferta:'Iniciação Cientifica [120 horas]'},
               {id: 2 ,oferta:'Assistencia de TCC [8 horas]'}],
  }, 
  {
    id: 2, 
    name: 'Extensão',
    content: [{id: 1, oferta:'Fazer apresentação em evento [10 horas]'},
              {id: 2,oferta:'Projeto de Extensão [100 horas]'},
              {id: 3,oferta: 'Assistir apresentação de TCC [1 hora]'}],
  }, 
  {
    id: 3, 
    name: 'Ensino',
    content: [{id: 1,oferta:'Vaga de Monitor [100 horas]'},
              {id: 2,oferta:'Disciplina não prevista Y [72 horas]'}],
  }, 
  {
    id: 4, 
    name: 'AC HC ou Ambiental',
    content: [{oferta:'Cineminha [1 hora]'}],
  }
]

export default PainelOfertas;