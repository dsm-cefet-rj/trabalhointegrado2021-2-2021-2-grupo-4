import React from 'react';
import { Link } from 'react-router-dom';
import "./styled.scss";

const SignupForm = (props) => {
  return(
    <div className='container' id='signupPanel'>  
      <div className="link_button align-middle">
        <Link to='/login'> Login </Link>
      </div>
      <div className="link_button align-middle">
        <Link to='/signup'> Signup </Link>
      </div>
    </div>
  );
}

export default SignupForm;