import React from 'react'
import './styled.scss'

export default function EdicaoAtividade(props) {

    return (
      <>
            <div class="menu_navegacao">
                <nav class="nav-bar">
                    <a onclick="mostraTela('painel-aluno')">Painel Aluno</a>
                </nav>
            </div>
            <h3 style={{textAlign: 'center'}}>Bem Vindo! Seu curso cadastrado é <b>BCC</b> </h3> 
            <div className='container' id="painel">
                <h2>Registro de Atividade de <b style={{color: 'crimson'}}>Pesquisa</b>:</h2> 
            
                <table>
                    <tr>
                        <th>Tipo Atividade</th>
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
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Descrição</th>
                    </tr>
                    <tr>                   
                        <td>
                            <input type="text"/>
                        </td>                   
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Horas</th>
                    </tr>
                    <tr>                   
                        <td>
                            <input type="number" name="horas" id="horas"/>
                        </td>                   
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>Anexo</th>
                    </tr>
                    <tr>                   
                        <td>
                            <input type="file"/>
                        </td>
                    </tr>
                </table>
                <button id="comeco" onclick="salvar()">Submit</button>            
            </div>
      </>
    );
}