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
//import Validacao from './components/TelaValidacao/index';
import './App.css';

const App = (props) => {
  const [activities, setActivities] = useState([]);
  const [offers, setOffers] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" element={<ListaAlunos />}/>
          <Route exact path="/painelatividades" element={<PainelAtividade activities={activities}  setActivities={setActivities} />} />
          <Route exact path="/painelofertas" element={<PainelOfertas offers={offers} setOffers={setOffers} />} />
         {/* <Route exact path="/validacao" element={<Validacao />}/> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;