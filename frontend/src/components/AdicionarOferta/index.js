import React, { useState, useEffect } from 'react'
import './styled.scss'
import { useDispatch, useSelector } from 'react-redux'
import { add_offer, update_offer } from '../PainelOfertas/ofertasSlice'
import { useNavigate, useParams } from 'react-router-dom'



const AdicionarOferta= (props) => {
    console.log(props.updateTarget)
    const [novaOferta, setOffer] = useState(props.update ? props.updateTarget:{});
    const history = useNavigate()
    

    /* useEffect(() => {
        props.update == true ? getUpdateTarget() : {}
    })

    let {id} = useParams()
    id = id ? parseInt(id) : null */

    
    /* const [actionType, ] = useState(
    id ? activityFound 
       ? '../PainelOfertas/ofertasSlice/update_offer'
       : '../PainelOfertas/ofertasSlice/add_offer'
      : '../PainelOfertas/ofertasSlice/add_offer'
    ); */

    const dispatch = useDispatch();
    
    
    function handleInputChange(e) {
        setOffer({...novaOferta, [e.target.name]: e.target.value })
    }

    /* function getUpdateTarget(){
        let auxOferta = {id:null,
                        type: null,
                        description:null}
        ofertas.filter((oferta) => oferta.id === props.updateTarget).map(o =>
            auxOferta = {
                id: o.id,
                type: o.type,
                description: o.description
            },
            setOffer(auxOferta),
            props.update=false
            
        )} */
    
    function handleSubmit(e) {
        console.log('teste')
        e.preventDefault();
        if(props.update == false){
            setOffer(novaOferta.category = props.card.id)
            dispatch(add_offer(novaOferta));     
            props.onClose();
        }

        else if(props.update == true){
            setOffer(novaOferta.category = props.card.id)
            dispatch(update_offer(novaOferta))
            props.onClose();
        }

        /* props.setOffers(props.offers.concat(novaOferta)); */
        
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
                   
                    <button id="addOffer" type='submit' > Salvar </button> 
                </form>
            </div>
    )
}

export default AdicionarOferta