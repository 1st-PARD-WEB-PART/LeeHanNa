import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

//렌더링을 해줌 => Routers가 BrowserRouter한테 적절한 path찾아서 전달하면 BrowserRouter가 렌더링 진행
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
