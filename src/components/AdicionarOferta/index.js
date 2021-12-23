import React, { useState } from 'react'
import './styled.scss'

const AdicionarOferta= (props) => {
    const [offer, setOffer] = useState({});
    
    function handleInputChange(e) {
        setOffer({...offer, [e.target.name]: e.target.value })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.setOffers(props.offers.concat(offer));   
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
                                value={offer.type}
                                onChange={handleInputChange} />    
                    </div>
                    <div>
                        <label>Descrição da Oferta</label>
                        <input  className='form-textbox' 
                                type = "text"
                                name='description'
                                value={offer.description} 
                                onChange={handleInputChange} />
                    </div>
                   
                    <button id="addOffer" type='submit' > Adicionar </button> 
                </form>
            </div>
    )
}

export default AdicionarOferta