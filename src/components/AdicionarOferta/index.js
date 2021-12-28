import React, { useState } from 'react'
import './styled.scss'

function ofertasReducer(listaDeOfertas, action){
    switch(action.type){
        case 'submit':
            return
    }

}

const AdicionarOferta= (props) => {
    const [listaDeOfertas, setOffer] = useState({});
    
    function handleInputChange(e) {
        setOffer({...listaDeOfertas, [e.target.name]: e.target.value })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.setOffers(props.offers.concat(listaDeOfertas));   
        console.log(props.offers)  
        props.onClose();
    }

    return(
            <div className='form-div'>
                <form className='form' onSubmit={handleSubmit} >
                    <div>
                        <label>Tipo da Oferta</label>
                        <input className='form-textbox' 
                                type= "text"
                                name='type'
                                value={listaDeOfertas.type}
                                onChange={handleInputChange} />    
                    </div>
                    <div>
                        <label>Descrição da Oferta</label>
                        <input  className='form-textbox' 
                                type = "text"
                                name='description'
                                value={listaDeOfertas.description} 
                                onChange={handleInputChange} />
                    </div>
                   
                    <button id="addOffer" type='submit' > Adicionar </button> 
                </form>
            </div>
    )
}

export default AdicionarOferta