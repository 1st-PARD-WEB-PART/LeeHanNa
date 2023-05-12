import React,{useEffect, useState}  from 'react';
import AppRouter from './Router';
import {authService} from "../fbase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  //firebase가 초기화 되고 모든 걸 로드할 때까지 기다려 줄 시간이 없음-> currentUser는 항상 null 
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); //user의 로그인 여부 확인
    //초기화하는 것 기다리기 (onAuthStateChanged: event listner가 user로그인 상태를 체크)
    useEffect(()=>{ 
      const auth = getAuth();
      //listen
      onAuthStateChanged(auth, (user)=>{
        if(user) setIsLoggedIn(true);
        else setIsLoggedIn(false);
        setInit(true);
      });
    }, []);
    return (
      <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer> &copy; {new Date().getFullYear()} Nwitter</footer>
      </>
    );
}

export default App;
