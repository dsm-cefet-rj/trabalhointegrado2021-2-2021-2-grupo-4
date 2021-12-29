import React, { useState } from 'react'
import './styled.scss'
import { useDispatch } from 'react-redux'



const AdicionarOferta= (props) => {
    const [novaOferta, setOffer] = useState({});

    const dispatch = useDispatch();
    
    function handleInputChange(e) {
        setOffer({...novaOferta, [e.target.name]: e.target.value })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        /* props.setOffers(props.offers.concat(novaOferta)); */
        debugger
        setOffer(novaOferta.category = props.card.id)
        dispatch({type:'add_offer', payload:novaOferta});     
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
                                value={novaOferta.type}
                                onChange={handleInputChange} />    
                    </div>
                    <div>
                        <label>Descrição da Oferta</label>
                        <input  className='form-textbox' 
                                type = "text"
                                name='description'
                                value={novaOferta.description} 
                                onChange={handleInputChange} />
                    </div>
                   
                    <button id="addOffer" type='submit' > Adicionar </button> 
                </form>
            </div>
    )
}

export default AdicionarOferta