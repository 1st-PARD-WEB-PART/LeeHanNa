// pages폴더 내 모든 파일을 한 곳에 모으는 역할 App.js
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';
import Navbar from './Navbar';
import Component from './pages/Component';
import Login from './pages/Login';


function App() {
  const isLoggedIn = true;
  //<Route path="주소규칙" element={보여줄 컴포넌트 JSX} />
  return ( //index는 path="/"와 동일한 역할 => 처음 화면으로 보이겠다.
    <Routes>
      <Route path='/login' element={<Login />} />

      <Route path='/' element={isLoggedIn ? <Navbar /> : <Navigate to = "/login" />}>
        <Route index element={<Home />} />
        <Route path='/people' element={<People />} />
        <Route path='/component' element={<Component />} />
      </Route>
    </Routes>
  );
};


//username은 Profile에 params.username와 변수 연결된 느낌
export default App;
