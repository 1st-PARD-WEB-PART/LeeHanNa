import {Outlet, Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './pages/page.css';
import logo from './Facebook_logo.png';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  flex: 1 1;
  width: 100px;
  margin : 0;
  border-radius: 0px;
  text-align: center;
  flex-direction: row;
`;
const SearchButton = styled.button`
  padding: 3px;
  margin-right: 300px;
  background-color: #007bff;
  color: #fff;
  border-radius: 20px;
  font-size: 16px;
  border: none;
  width: 100px;
  flex: 0.04 1;
`;


//<Outlet /> 컴포넌트는 현재 경로와 일치하는 하위 라우트를 렌더링 => 중첩된 라우트 구조를 쉽게 처리
const Navbar = (props) => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveButton('home');
    } else if (location.pathname === '/people') {
      setActiveButton('people');
    } else if (location.pathname === '/component') {
      setActiveButton('component');
    }
  }, [location]);

  const handleClick = (button) => {
    setActiveButton(button);
  }
  return (
    <div className='search'>
      <header style={{ background: 'white', paddingLeft: 8, paddingRight: 8, fontSize: 24, fontWeight: 'bold'}}>
        <img src={logo} alt='facebook logo' className='image'></img>
        <input type="text" id="search" name="search" placeholder='FaceBook 검색'/>
        <SearchButton>검색</SearchButton>
          <table>
            <td>
              <Link to="/">
                <Button className={`b_home ${activeButton === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>
                <BsFillHouseDoorFill size={22}/>
                </Button>
              </Link>
              </td>
              <td>
              <Link to="/people">
                <Button className={`b_people ${activeButton === 'people' ? 'active' : ''}`} onClick={() => handleClick('people')}>
                  <MdPeopleOutline size={22}/>
                </Button>
              </Link>
            </td>
            <td>
              <Link to="/component">
                <Button className={`b_play ${activeButton === 'component' ? 'active' : ''}`} onClick={() => handleClick('component')}>
                  <CgGames size={22}/>
                </Button>
              </Link>
            </td>
          </table>
      </header>
        <Outlet />
    </div>
  );
  //header아래 사이트 바로 이동할 수 있는 링크 걸어두기
};

export default Navbar;