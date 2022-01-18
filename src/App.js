import React, { useState } from 'react';
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
import PainelOfertas from './components/PainelOfertas';
import Footer from './components/Footer/index';
//import Validacao from './components/TelaValidacao/index';
import './App.css';
import AdicionarAtividade from './components/AdicionarAtividade';

const App = (props) => {

  const [offers, setOffers] = useState([]);
  
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" element={<ListaAlunos />}/>
            <Route exact path="/painelatividades" element={<PainelAtividade />} />
            <Route exact path="/adicionaratividade/:id" element={<AdicionarAtividade />}></Route>
            <Route exact path="/painelofertas" element={<PainelOfertas offers={offers} setOffers={setOffers} />} />
          {/* <Route exact path="/validacao" element={<Validacao />}/> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;