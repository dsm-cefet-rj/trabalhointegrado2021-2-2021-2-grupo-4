import { useEffect, useState } from 'react';
import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Header from '../Header';
import { addCategoryServer } from '../slices/CategoriesSlice';
import './styles.scss';

export const AdicionarCategoria = () => {

    const [categoria, setCategoria] = useState({name: '', categoryCode: '', subcategories: []});
    const [subcategoria, setSubcategoria] = useState('');

    const users = useSelector(state => state.users.entities)['undefined'];
    const loggedUserId = useSelector(state => state.logins.ids)[0];

    const history = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const loggedUser = users && users.find(u => u._id === loggedUserId);
        if(!users || !loggedUser.professor){
            history('/login');
        }
    }, [])

    function handleNameChange(ev) {
        setCategoria({...categoria, name: ev.target.value});
    }
    
    function handleCodeChange(ev) {
        setCategoria({...categoria, categoryCode: ev.target.value});
    }

    function handleSubcategoryChange(ev) {
        setSubcategoria(ev.target.value);
    }

    function addSubcategory(e) {
        e.preventDefault();
        setSubcategoria('');
        const sub = [...categoria.subcategories, subcategoria];
        setCategoria({...categoria, subcategories: sub});
    }
    
    function delSubcategory(id) {
        categoria.subcategories.splice(id, 1);
        console.log(categoria.subcategories);
        setCategoria({...categoria, subcategories: categoria.subcategories});
    }

    function salvar(e){
        e.preventDefault();
        console.log(categoria);
        dispatch(addCategoryServer(categoria));
    }

    return (
        <>
            <Header />
            <div className="containerC">
                <form>
                    <input type="text" placeholder="Nome" 
                        onChange={handleNameChange} value={categoria.name}></input>
                    <input type="text" placeholder="Código da Categoria"
                        onChange={handleCodeChange} value={categoria.categoryCode}></input>

                    <div className="subcategoria">
                        <div>
                            <input type="text" placeholder="Nome da subcategoria" 
                                onChange={handleSubcategoryChange} value={subcategoria} />
                            <button className="add" onClick={addSubcategory}>+</button>
                        </div>

                        <ul>
                            {categoria.subcategories && categoria.subcategories.map((a, id) => {
                                return (
                                    <li key={id}>
                                        {a}
                                        <button className="del" onClick={() => delSubcategory(id)}>-</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                <button className="salvar" onClick={salvar}>Salvar</button>
                </form>
            </div>
        </>
    )

}