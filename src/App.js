import React, { useState, useReducer } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './store';
import Header from './components/Header/index';
import ListaAlunos from './components/ListaAlunos/index';
import PainelAtividade from './components/PainelAtividade/index';
import PainelValidacao from './components/PainelValidacao/index';
import PainelOfertas from './components/PainelOfertas';
import Footer from './components/Footer/index';
import './App.css';
import { store } from './store';
import { Provider } from 'react-redux'


const App = (props) => {
  const [activities, setActivities] = useState([]);
  /* const [offers, setOffers] = useState([]); */
  
  const ofertasIniciais = []
  const [ofertas, dispatch] = useReducer(ofertasReducer, ofertasIniciais)

  function ofertasReducer(ofertas = ofertasIniciais, action){
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

  const [offers, setOffers] = useState([]);
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" element={<ListaAlunos />}/>
            <Route exact path="/painelofertas" element={<PainelOfertas ofertas={ofertas} dispatch={dispatch} />} />
           {/* <Route exact path="/validacao" element={<Validacao />}/> */}
            <Route exact path="/painelatividades" element={<PainelAtividade />} />
            <Route exact path="/adicionaratividade/:id" element={<AdicionarAtividade />}></Route>
            <Route exact path="/painelvalidacao" element={<PainelValidacao />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;