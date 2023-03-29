// pages폴더 내 모든 파일을 한 곳에 모으는 역할 App.js
// 2주차 router_Training
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/Mypage';
import Login from './pages/Login';

function App() {
  //<Route path="주소규칙" element={보여줄 컴포넌트 JSX} />
  return ( //index는 path="/"와 동일한 역할 => 처음 화면으로 보이겠다.
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
    </Route>
    <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
    </Route>
    <Route path="*" element={<NotFound />} />
    {/* path="*" : 모든 URL 경로와 일치하도록 지정 => 어떤 페이지도 찾을 수 없는 경우에 NotFound 컴포넌트를 렌더링 */}
    <Route path="/login" element={<Login />}></Route>
    <Route path="/mypage" element={<MyPage />}></Route>
  </Routes>
  );
};


//username은 Profile에 params.username와 변수 연결된 느낌
export default App;