import React from 'react';
import './facebook.css';
// import Typography from '@material-ui/core/Typography';


function Login() {
  // const languages = ['한국어', 'C 언어', 'English (US)', '日本語', 'Deutsch',
  //   'Português (Brasil)', 'Français (France)',
  //   'Español', 'Italiano', 'Arabic', 'lkinyarwanda'];
  // const etc = ['Sign Up', 'Log In', 'Messenger', 'Facebook Lite',
  //   'Watch', 'People', 'Pages', 'Page Categories',
  //   'Places', 'Games', 'Locations', 'Marketplace',
  //   'Facebook Pay', 'Groups', 'Jobs', 'Oculus',
  //   'Portal', 'Instagram', 'Local', 'Fundraisers',
  //   'Services', 'Voting Information Center', 'About',
  //   'Create Ad', 'Create Page', 'Developers',
  //   'Careers', 'Privacy', 'Cookies', 'Ad Choices',
  //   'Terms', 'Help', 'Settings' ];
  return (
    <div className='textbox'>
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
        <div className='footer'>
          {/* {languages.map((language, index) => (
                        <Typography className = 'f_text1' key={index} mr={3} fontSize={14}> {language} </Typography>))} */}
          한국어 C 언어 English (US) 日本語 Deutsch Português (Brasil) Français (France) Español Italiano Arabic lkinyarwanda
          <hr />
          {/* {etc.map((etc ,index) => (
                        <Typography className = 'f_text2' key = {index} mr = {3} fontSize={14}> {etc} </Typography>))} */}
          {/* Typography사용시 css문제로 아무리해도 글자가 안나옴 */}
          Sign Up Log In Messenger Facebook Lite Watch People Pages Page Categories Places Games Locations Marketplace 
          <br></br>
          Facebook Pay Groups Jobs Oculus Portal Instagram Local Fundraisers Services Voting Information Center About
          <br></br>
          Create Ad Create Page Developers Careers Privacy Cookies Ad Choices Terms Help Settings
          <br></br>
          <br></br>
          Meta © 2023
        </div>
    </div>
  );
};

export default Login;