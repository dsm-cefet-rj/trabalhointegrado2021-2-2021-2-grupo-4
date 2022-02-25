import React from 'react';
import { Link } from 'react-router-dom';
import "./styled.scss";

const SignupForm = (props) => {
  return(
    <div className='container d-flex justify-content-center' >  
      <div className='border border-dark align-items-center' id='homePanel'>
        <div className="link_button">
          <Link to='/login'> Login </Link>
        </div>
        <div className="link_button">
          <Link to='/signup'> Signup </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;