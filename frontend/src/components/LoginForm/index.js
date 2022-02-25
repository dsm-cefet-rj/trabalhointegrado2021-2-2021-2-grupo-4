import React, { useEffect } from 'react'
import "./styled.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { loginServer } from '../slices/LoginSlice';

const LoginForm = (props) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(state => state.logins.status)

    const { register, handleSubmit } = useForm(
        //
    );

    function onSubmit(login) {
        dispatch(loginServer(login));
        //history('/painelatividades');
    }

    useEffect(() => {
        if(status === 'logged_in'){
            history('/listaalunos');
        }
    }, [status, history])
    return(
        <div className='container' id='loginPanel'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='linha-form'>
                    <label>Login</label>
                    <input type="text" name='username' id='username' {...register("username", { required: true })} placeholder="Login"/>
                </div>
                <div className='linha-form'>
                    <label>Senha</label>
                    <input type="password" name='password' id='password' {...register("password", { required: true })} placeholder="Senha"/>
                </div>
                <br />
                <br />
                <button type='submit' id='Login' name='btn_login' variant="contained" value="Salvar" >Login</button>
            </form>
        </div>
    );
}

export default LoginForm;