import React from 'react';
import './facebook.css';


function Login() {
  return (
    <div className={StyleSheet.textbox}>
        <h1> Facebook </h1>
        <h2> Connect with friends and the world around you on Facebook. </h2>
        <div className='container'>
          <div className='form'>
            <input type="text" id="name" name="name" placeholder='Email or phone number'/>
            <input type="password" id="password" name="password" placeholder='Password'/>
            <button name='b_login' id="b_login">Login</button>
            <button name='b_password' id="b_password">Forgot Password?</button>
            <hr />
            <button name='b_new' id='b_new'>Create new account</button>
          </div>
        </div>
        <p><b>Create a Page</b> for a celebrity, brand or business.</p>

        <footer className='footer'>
          <hr />
          <p>Meta © 2023</p> 
          {/* 글자가 안보이는데 이유가 뭘까... */}
        </footer>
    </div>
  );
};

export default Login;