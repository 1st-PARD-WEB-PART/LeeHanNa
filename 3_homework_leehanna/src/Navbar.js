import {Outlet, Link} from 'react-router-dom';
import './pages/page.css';
import logo from './Facebook_logo.png';
//<Outlet /> 컴포넌트는 현재 경로와 일치하는 하위 라우트를 렌더링 => 중첩된 라우트 구조를 쉽게 처리
const Navbar = (props) => {
  return (
    <div className='search'>
      <header style={{ background: 'white', padding: 16, fontSize: 24, fontWeight: 'bold'}}>
        <img src={logo} alt='facebook logo' className='image'></img>
        <input type="text" id="search" name="search" placeholder='FaceBook 검색'/>
        <table>
          <td><Link to="/"><button className='b_home' onClick={props.onClick}>home</button></Link></td>
          <td><Link to="/people"><button className='b_people' onClick={props.onClick}>people</button></Link></td>
          <td><Link to="/component"><button className='b_play' onClick={props.onClick}>game</button></Link></td>
        </table>
      </header>
        <Outlet />
    </div>
  );
  //header아래 사이트 바로 이동할 수 있는 링크 걸어두기
};

export default Navbar;