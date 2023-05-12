import React,{useEffect, useState}  from 'react';
import AppRouter from './Router';
import { getAuth, onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { authService } from '../fbase';

function App() {
  //firebase가 초기화 되고 모든 걸 로드할 때까지 기다려 줄 시간이 없음-> currentUser는 항상 null 
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); //user의 로그인 여부 확인
    const [userObj, setUserObj] = useState(null); //최상위에 위치 후 router로 값을 보냄
    const [newName, setNewName] = useState(""); //렌더링만을 위한 state(newName)
    //초기화하는 것 기다리기 (onAuthStateChanged: event listner가 user로그인 상태를 체크)
    useEffect(()=>{ 
      const auth = getAuth();
      //listen
      onAuthStateChanged(auth, (user)=>{//로그인을 하면 호출
        if(user) {
          setIsLoggedIn(true);
          setUserObj(user); //로그인 한 user받기
          if(user.displayName === null){ //social login으로 로그인하지 않았을 경우 name이 null -> name정하기
            const name = user.email.split("@")[0];
            user.displayName = name;
          }
        }
        else {
          setIsLoggedIn(false); 
        }
        setInit(true); //언제나 ture여야함
      });
    }, []);
    
    //name update후 rendering
    const refreshUser = () => { //user를 새로고침 하는 기능
      const user = authService.currentUser;
      setNewName(user.displayName);
    };
    return (
      <>
      {init ? <AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj = {userObj} /> : "Initializing..."}
      </>
    );
}

export default App;
