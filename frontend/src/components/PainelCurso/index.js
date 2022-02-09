import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import Template from './templateCurso';
import FormCurso from './formularioCurso';
import FormNovoCurso from './formularioNovoCurso';

function PainelCurso() {
  const [selected, setSelected] = useState(null);  
  const cursos = useSelector(state => state.cursos);
  
  const [editCurso, setEditCurso] = useState(null);
  const [addCurso, setAddCurso] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(null)
    setSelected(i)
  }

  const handleNovoCurso = (objNovo) => {
    if (objNovo === addCurso) {
      return setAddCurso(null);
    }
    setAddCurso(objNovo);
  }

  const handleCursoEdicao = (objEdicao) => {
    if (objEdicao === editCurso) {
      return setEditCurso(null);
    }
    setEditCurso(objEdicao);
  }
  
  return(
    <div className='wrapper'>
      <div className='accordion'>
        <div type="button" className="btn btn-success btn-block"
             onClick={() => handleNovoCurso({})} >
          Novo Curso
        </div>
        {addCurso != null ? <FormNovoCurso curso={addCurso} onClose={() => setAddCurso(null)} ></FormNovoCurso> : <></>}
        {cursos.map((item) => (
          <Card key={item.id} style={{ marginBottom: '1rem' }}>
            <CardHeader className={selected === item.id ? 'accordion-button' : 'accordion-button collapsed'} onClick={() => toggle(item.id)}>{item.name}</CardHeader>
            <Collapse className={selected === item.id ? 'content show':'content'}>  
              <CardBody>
                <button type="button" className="btn btn-success btn-block"
                        style={{ marginLeft: '10px', paddingRight: '20px', paddingLeft: '20px'  }} 
                        onClick={() => handleCursoEdicao(item)}  >
                    Editar
                </button>
              </CardBody>
              <CardBody>
                {(selected===item.id)=== true ? 
                  <>
                    <Template curso={cursos.filter(c => c.id === selected)} />                   
                    {editCurso != null && selected === editCurso.id ? 
                        <FormCurso curso={editCurso} ></FormCurso> 
                      : <></>}
                  </>
                : null}     
              </CardBody>         
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PainelCurso;