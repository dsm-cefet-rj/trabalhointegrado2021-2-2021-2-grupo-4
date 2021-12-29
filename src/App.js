import React, { useState, useReducer } from 'react'
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
  /* const [offers, setOffers] = useState([]); */
  
  const ofertasIniciais = []

  const [ofertas, dispatch] = useReducer(ofertasReducer, ofertasIniciais)
  
  

  function ofertasReducer(ofertas, action){
    switch(action.type){
      case 'add_offer':
        let proxId = 0
        if (ofertas.length > 0)
          proxId = 1 + ofertas.map(o => o.id).reduce((x,y) => Math.max(x,y))

        else
          proxId = 1
        return ofertas.concat([{...action.payload, id: proxId}])

      case 'remove_offer':
        return ofertas.filter((o) => o.id !== action.payload)

      default:
        return ofertas
    }
  }

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" element={<ListaAlunos />}/>
          <Route exact path="/painelatividades" element={<PainelAtividade activities={activities}  setActivities={setActivities} />} />
          <Route exact path="/painelofertas" element={<PainelOfertas ofertas={ofertas} dispatch={dispatch} />} />
         {/* <Route exact path="/validacao" element={<Validacao />}/> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;