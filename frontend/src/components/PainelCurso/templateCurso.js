function TemplateCurso(props) {
    return (    
        <div className='activity_list container row'>
          <div className='col-6'>{props.curso[0].id} - {props.curso[0].totalHours} horas totais</div>
   
          {props.curso[0].categories == null ? 'Não há categorias' : props.curso[0].categories.map(cat => 
              <li className='col-10' key={cat.id}>
                  {cat.name} 
              </li>) 
          }
        </div>    
    );
}

export default TemplateCurso;