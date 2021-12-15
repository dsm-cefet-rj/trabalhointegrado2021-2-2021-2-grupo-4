import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer/index'
import Header from './components/Header';
import App from './App';
import EdicaoAtividade from './components/EdicaoAtividade';
import PainelAtividade from './components/PainelAtividade/index'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <EdicaoAtividade />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
