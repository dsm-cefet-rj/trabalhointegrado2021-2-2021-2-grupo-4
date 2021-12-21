import React from 'react'
import './styled.scss'

const AdicionarOferta= ({onClose, children}) => {
    return(
        <>
            <div className='form-div'>
                <form className='form'>
                    <table>
                        <tr>
                            <th>Nome da Oferta</th>
                            <th>Descrição da Oferta</th>
                        </tr>

                        <tr>
                            <td>
                                <input className='form-textbox' type= "text"/>    
                            </td>

                            <td>
                                <input className='form-textbox' type = "text"/>
                            </td>          
                        </tr>

                        <tr>
                        <button id="addOffer" onClick={onClose}> Adicionar </button>
                        </tr>
                    </table>
                </form>
            </div>
        
        </>
    )



}

export default AdicionarOferta