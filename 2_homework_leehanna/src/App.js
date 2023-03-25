// pages폴더 내 모든 파일을 한 곳에 모으는 역할 App.js
// 2주차 router_Training
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  //<Route path="주소규칙" element={보여줄 컴포넌트 JSX} />
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;