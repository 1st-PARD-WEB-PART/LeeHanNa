import React from 'react';
import './facebook.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const LanguageLink = styled.a`
  background: white;
  color: #65676B;
  font-family: ‘Roboto’;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: none;
  margin-left : 10px;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;
const EtcLink = styled.a`
  background: white;
  color: #65676B;
  font-family: ‘Roboto’;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: none;
  margin-left : 10px;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Language = styled.div`
  background: white;
  display: flex;
  -webkit-box-pack: justify;
  flex-wrap: wrap;
`;

function Login({ onLogin }) {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직
    // 인증 처리를 할 필요가 없으므로, 일단은 단순히 로그인 상태로 간주합니다.
    // 이후에는 이 부분을 수정하여 실제 인증 처리를 구현할 수 있습니다.

    // 홈페이지로 이동
    navigate('/');
    onLogin(); // 로그인 상태 업데이트
  };

  const languages = ['English (US)', 'Ikinyarwanda', 'Francais (France)', 'Kiswahili', 'Espagnol',
    'Deutsch', 'Japanese', 'Portugues (Brazil)', 'Italiano', 'Arabic'];

  const etc = ['Sign Up', 'Log In', 'Messenger', 'Facebook Lite',
    'Watch', 'People', 'Pages', 'Page Categories',
    'Places', 'Games', 'Locations', 'Marketplace',
    'Facebook Pay', 'Groups', 'Jobs', 'Oculus',
    'Portal', 'Instagram', 'Local', 'Fundraisers',
    'Services', 'Voting Information Center', 'About',
    'Create Ad', 'Create Page', 'Developers',
    'Careers', 'Privacy', 'Cookies', 'Ad Choices',
    'Terms', 'Help', 'Settings'];
  return (
    <div>
      <div className='textbox'>
        <h1> Facebook </h1>
        <h2> Connect with friends and the world around you on Facebook. </h2>
        <div className='container'>
          <div className='form'>
            <input type="text" id="name" name="name" placeholder='Email or phone number' />
            <input type="password" id="password" name="password" placeholder='Password' />
            <button name='b_login' id="b_login" onClick={handleLogin}>Login</button>
            <button name='b_password' id="b_password">Forgot Password?</button>
            <hr />
            <button name='b_new' id='b_new'>Create new account</button>
          </div>
        </div>
        <p><b>Create a Page</b> for a celebrity, brand or business.</p>
      </div>
      <div className='footer'>
        <Language>
        {languages.map((language) => (
          <LanguageLink href='#'>{language}</LanguageLink>))}
        </Language>
        <hr />
        <Language>
          {etc.map((etc) => (
            <EtcLink href='#'>{etc}</EtcLink>))}
        </Language>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Meta © 2023
      </div>
    </div>
  );
};

export default Login;