import React, { useReducer } from 'react'
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
import PainelCurso from './components/PainelCurso/index';
import PainelOfertas from './components/PainelOfertas';
import AdicionarAtividade from './components/AdicionarAtividade'
import Footer from './components/Footer/index';
import './App.css';


const App = (props) => {
 
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
  
  return (
    <Provider store={store}>
      <Router>        
          <Header />
          <Switch>
            <Route exact path="/" element={<ListaAlunos />}/>
            <Route exact path="/painelofertas" element={<PainelOfertas ofertas={ofertas} dispatch={dispatch} />} />
            <Route exact path="/painelatividades" element={<PainelAtividade />} />
            <Route exact path="/adicionaratividade/:id" element={<AdicionarAtividade />}></Route>
            <Route exact path="/painelcurso" element={<PainelCurso />} />
            <Route exact path="/painelvalidacao" element={<PainelValidacao />} />
          </Switch>
          <Footer />        
      </Router>
    </Provider>
  );
}

export default App;