import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/index'
import ListaAlunos from './components/ListaAlunos/index'
import PainelAtividade from './components/PainelAtividade/index'
import PainelOfertas from './components/PainelOfertas'
import Footer from './components/Footer/index';
import PainelCurso from './components/PainelCurso';
import './App.css';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [offers, setOffers] = useState([]);
  const [cursos, setCursos] = useState([]);
  return (
    <Router>      
        <Header />
        <Switch>
          <Route exact path="/" element={<ListaAlunos />}/>
          <Route exact path="/painelatividades" element={<PainelAtividade activities={activities}  setActivities={setActivities} />} />
          <Route exact path="/painelofertas" element={<PainelOfertas offers={offers} setOffers={setOffers} />} />
          <Route exact path="/painelcurso" element={<PainelCurso cursos={cursos} setCursos={setCursos} />}/>
        </Switch>
        <Footer />     
    </Router>
  );
}

export default App;
