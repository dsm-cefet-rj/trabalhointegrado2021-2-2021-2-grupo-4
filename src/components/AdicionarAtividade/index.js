import React from 'react'
import './styled.scss'

const AdicionarAtividade = ({ onClose, children }) => {

    return (
      <>
        <h3 style={{textAlign: 'center'}}>Bem Vindo! Seu curso cadastrado é <b>BCC</b> </h3> 
        <div className='container' id="painel">
            <h2>Registro de Atividade de <b style={{color: 'crimson'}}>Pesquisa</b>:</h2> 
        
            <table>
                <tr>
                    <th>Tipo Atividade</th>
                    <th>Descrição</th>
                    <th>Horas</th>
                    <th>Anexo</th>
                </tr>
                <tr>
                    <td>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">Iniciação Científica</option>
                            <option value="">Publicações</option>
                            <option value="">Participação em Pesquisa</option>
                            <option value="">Ass. a monografia, teses...</option>
                        </select>
                    </td>    
                    <td>
                        <input type="text"/>
                    </td>    
                    <td>
                        <input type="number" name="horas" id="horas"/>
                    </td> 
                    <td>
                        <input type="file"/>
                    </td>         
                </tr>
            </table>
            <br />
            <button id="comeco" onClick={onClose} >Submit</button>            
        </div>
      </>
    );
}

export default AdicionarAtividade;