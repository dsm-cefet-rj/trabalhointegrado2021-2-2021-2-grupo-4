import React, { useState, useEffect } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarOferta from '../AdicionarOferta';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove_offer, selectAllOfertas, fetchOfertas } from './ofertasSlice';
import { removeOfertasServer } from './ofertasSlice';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../Header/index';


const check = null



function PainelOfertas(props) {
  const [selected, setSelected] = useState(null)
  const [isNewOffer, setIsNewOffer] = useState(null)
  const [updateTarget, setUpdateTarget] = useState(null)

  const dispatch = useDispatch();


  const ofertas = useSelector(selectAllOfertas)
  const status = useSelector(state => state.ofertas.status)
  const error = useSelector(state => state.ofertas.error)

  const users = useSelector(state => state.users.entities.undefined);
  const loggedUserId = useSelector(state => state.logins.ids)[0];
  const [userIsProfessor, setUserIsProfessor] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  useEffect(() => {
    const loggedUser = users && users.find(u => u._id === loggedUserId);
    if(loggedUser){
      setUserIsProfessor(loggedUser.professor);
      setUserIsAdmin(loggedUser.admin);
    }
  })


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  function handleOfferDeletion(e) {
    console.log("teste handleOfferDeletion");
    e.preventDefault();
    dispatch(removeOfertasServer(e.target.value));     
}

const handleOfferUpdate = (updateTargetOffer) => {
  if (updateTargetOffer === updateTarget) {
    return setUpdateTarget(null);
  }
  setUpdateTarget(updateTargetOffer);
}

  const handleNewOffer = (i) => {
    if (isNewOffer === i) {
      return setIsNewOffer(null)
    }
    setIsNewOffer(i)
  }

  useEffect(() => {
    if(status ==='not_loaded' ) {
      dispatch(fetchOfertas())
    }else if(status === 'failed'){
      setTimeout(() => dispatch(fetchOfertas()), 2000)
    }
  }, [status, dispatch])

  return(
    <><Header />
    <div className='wrapper'>
      {/* {console.log(props.ofertas.type)} */}
      <div className='accordion'>
        {cards.map((item, i) => (
          <Card key={item.id} style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === i ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(i)}>{item.name}</CardHeader>
            <Collapse className={selected === i ? 'content show' : 'content'}>
            {userIsAdmin || userIsProfessor ? 
              <CardBody>
                <button type="button" style={{ marginLeft: '10px', paddingRight: '40px', paddingLeft: '40px' }} className="btn btn-success btn-block" onClick={() => handleNewOffer(i)}>
                  +
                </button>
              </CardBody>:null}
              <CardBody className={check != null ? '' : 'pad'}>
                  {isNewOffer === i ? <AdicionarOferta onClose={() => setIsNewOffer(false)} card={item} update={false} updateTarget={null} /> : null}
              </CardBody>
              <CardBody className={check != null ? '' : 'pad'}>

              </CardBody>
                {ofertas.filter((oferta) => oferta.category === item.id).map(o =>

                    <CardBody key={i}>
                      {updateTarget != null && o.id == updateTarget.id ? <AdicionarOferta onClose={() => handleOfferUpdate(o)} card={item} updateTarget={o}  update={true} /> :
                    <text>
                      <tr> <b>Tipo: </b> {o.type} </tr> 
                      <tr> <b>Descri????o: </b> {o.description} 
                      <td> 
                        {userIsAdmin || userIsProfessor ? 
                        <Button type="button" value= {o.id} onClick={handleOfferDeletion} style={{ marginLeft: '10px', paddingRight: '15px', paddingLeft: '15px', borderRadius:'20px'  }} variant="danger"  >
                          X
                        </Button>:null}
                        
                        {userIsAdmin || userIsProfessor ? 
                        <Button onClick={() => handleOfferUpdate(o)} type="button" style={{ marginLeft: '10px', paddingRight: '15px', paddingLeft: '15px', borderRadius:'20px'  }} variant="warning"  >
                            Editar
                        </Button>:null}

                      </td>  
                      </tr>
                    </text>
                    } 
                    </CardBody>
                )}
            </Collapse>
          </Card>
        ))}
      </div>
    </div></>
  );
}

const cards = [
  {
    id: 1, 
    name: 'Pesquisa',
    
  }, 
  {
    id: 2, 
    name: 'Extens??o',
    
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

export default PainelOfertas;