const ofertasIniciais = []

export default function ofertasReducer(ofertas = ofertasIniciais, action){
    switch(action.type){
      case 'add_offer':
        let proxId = 0
        if (ofertas.length > 0)
          proxId = 1 + ofertas.map(o => o.id).reduce((x,y) => Math.max(x,y));

        else
          proxId = 1
        return ofertas.concat([{...action.payload, id: proxId}]);

      case 'remove_offer':
        return ofertas.filter((o) => o.id !== action.payload);

      case 'update_offer':
        
      default:
        return ofertas
    }
  }