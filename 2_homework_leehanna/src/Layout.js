import {Outlet, Link } from 'react-router-dom';
//<Outlet /> 컴포넌트는 현재 경로와 일치하는 하위 라우트를 렌더링 => 중첩된 라우트 구조를 쉽게 처리
const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24, fontWeight: 'bold'}}>
        2_HOMEWORK_LEEHANNA
      </header>
      <main>
        <table>
          <td style={{padding: 15, fontWeight: 'bold'}}><Link to="/">Home</Link></td>
          <td style={{padding: 15, fontWeight: 'bold'}}><Link to="/about">About</Link></td>
          <td style={{padding: 15, fontWeight: 'bold'}}><Link to="/profiles/Lhn">Mypage</Link></td>
        </table>
        <Outlet />
      </main>
    </div>
  );
  //header아래 사이트 바로 이동할 수 있는 링크 걸어두기
};

export default Layout;