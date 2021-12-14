import React, { Component } from 'react'
import "./styled.scss";

function TelaValidacao(props){

    return(
      <>
      <div className="menu_navegacao">
        <nav className="nav-bar">
          <a>Painel Aluno</a>
        </nav>
      </div>
      <div style={{ marginTop: '1rem' }} className="container">
      <h2>Tabela de Validação</h2>

        <table>
        <tr>
            <th>Nome</th>
            <th>Quantidade de horas</th>
            <th>Anexo de certificado</th>
            <th>Valido?</th>
        </tr>
        <tr>
            <td>Introdução a Ciencia de dados</td>
            <td>4</td>
            <td><img src="https://cdn-icons.flaticon.com/png/512/1979/premium/1979212.png?token=exp=1638839376~hmac=6f1fe9d3406b1ceffb883a25ab330430" alt=""/></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>Curso de web design</td>
            <td>12</td>
            <td><img src="https://cdn-icons.flaticon.com/png/512/1979/premium/1979212.png?token=exp=1638839376~hmac=6f1fe9d3406b1ceffb883a25ab330430" alt=""/></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>Curso de java</td>
            <td>32</td>
            <td><img src="https://cdn-icons.flaticon.com/png/512/1979/premium/1979212.png?token=exp=1638839376~hmac=6f1fe9d3406b1ceffb883a25ab330430" alt=""/></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>Curso de influencer</td>
            <td>2</td>
            <td><img src="https://cdn-icons.flaticon.com/png/512/1979/premium/1979212.png?token=exp=1638839376~hmac=6f1fe9d3406b1ceffb883a25ab330430" alt=""/></td>
            <td><input type="checkbox" /></td>
        </tr>
        <tr>
            <td>Curso de youtuber</td>
            <td>8</td>
            <td><img src="https://cdn-icons.flaticon.com/png/512/1979/premium/1979212.png?token=exp=1638839376~hmac=6f1fe9d3406b1ceffb883a25ab330430" alt=""/></td>
            <td><input type="checkbox" /></td>
        </tr>
        </table>
        <button className="button button1">Enviar</button>

      </div>
      </>
    );
  }


export default TelaValidacao;