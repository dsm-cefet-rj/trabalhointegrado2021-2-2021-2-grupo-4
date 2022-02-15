import React, { useEffect, useState } from 'react'
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import "./styled.scss";
import AdicionarAtividade from '../AdicionarAtividade';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { loginServer } from '../slices/LoginSlice';

const LoginForm = (props) => {
    //const history = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit, errors } = useForm(
        //
    );

    function onSubmit(login) {
        dispatch(loginServer(login));
    }

    return(
        <div className='container' id='loginPanel'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='linha-form'>
                    <label>Login</label>
                    <input type="text" name='login' id='login' {...register("login", { required: true })} placeholder="Login"/>
                </div>
                <div className='linha-form'>
                    <label>Senha</label>
                    <input type="password" name='senha' id='senha' {...register("senha", { required: true })} placeholder="Senha"/>
                </div>
                <br />
                <br />
                <button type='submit' id='Login' name='btn_login' variant="contained" value="Salvar" >Login</button>
            </form>
        </div>
    );
}

export default LoginForm;