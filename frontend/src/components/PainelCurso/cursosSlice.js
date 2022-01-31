import {createSlice} from '@reduxjs/toolkit'

const cursosIniciais = [{
  id: "BCC", 
  name: 'Bacharelado em Ciência da Computação',
  totalHours: 300,
  categories: [{id: 1, name: 'Ensino'},
              {id: 2, name: 'Extensão'},
              {id: 3, name: 'Pesquisa'},
              {id: 4, name: 'Conscientização HC ou Ambiental'}]
},
{
  id: "ADM", 
  name: 'Administração',
  totalHours: 250,
  categories: [{id: 1, name: 'Ensino'},
              {id: 2, name: 'Extensão'},
              {id: 3, name: 'Pesquisa'},
              {id: 4, name: 'Conscientização HC ou Ambiental'}]
},
{
id: "ENG", 
name: 'Engenharia',
totalHours: 350,
categories: [{id: 1, name: 'Ensino'},
            {id: 2, name: 'Extensão'},
            {id: 3, name: 'Pesquisa'},
            {id: 4, name: 'Conscientização HC ou Ambiental'}]
}];

function cursoJaExiste(id) {
  let obj = cursosSlice.getInitialState().filter(c => c.id === id);
  return obj != null;
}

function addCursoReducer(cursos, payload) {
  if (cursos.length > 0) //já existem registros dessa entidade cadastrados
    if(cursoJaExiste(payload.id))
      return 'Este curso já existe';
    else
      return cursos.concat([{...payload}]);

  //não há registros cadastrados, primeira insercao:
  return cursos.concat([{...payload}]); 
}

function editCursoReducer(cursos, payload) {}

export const cursosSlice = createSlice({
  name:'cursos',
  initialState: cursosIniciais,
  reducers:{
    add:(state, action) => addCursoReducer(state, action.payload),
    edit:(state, action) => editCursoReducer(state, action.payload)
  }
})
export const {add, edit} = cursosSlice.actions;
export default cursosSlice.reducer;
