import React, { useEffect } from 'react'
import "./styled.scss";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { signupServer } from '../slices/SignupSlice';

const SignupForm = (props) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector(state => state.signups.status)

    const { register, handleSubmit } = useForm(
        //
    );

    function onSubmit(signup) {
        dispatch(signupServer(signup));
        //history('/painelatividades');
    }

    useEffect(() => {
        if(status === 'registered'){
            history('/login');
        }
    }, [status, history])
    return(
        <div className='container' id='signupPanel'>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='linha-form'>
                    <label>Username</label>
                    <input type="text" name='username' id='username' {...register("username", { required: true })} placeholder="Username"/>
                </div>
                <div className='linha-form'>
                    <label>Senha</label>
                    <input type="password" name='password' id='password' {...register("password", { required: true })} placeholder="Senha"/>
                </div>
                <br />
                <br />
                <button type='submit' id='Sign' name='btn_sign' variant="contained" value="Salvar" >Sign</button>
            </form>
        </div>
    );
}

export default SignupForm;