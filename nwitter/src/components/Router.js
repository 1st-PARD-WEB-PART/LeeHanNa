import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';


const AppRouter = ({refreshUser, isLoggedIn, userObj}) => { //App에서 
    return(
        <Router>
            {//로그인이 되었을 때 <Navigation />
            isLoggedIn && <Navigation userObj={userObj}/>}
            <Routes>
                {isLoggedIn ? (
                    //Fragment: 부모가 없을 때 많은 요소들을 render하고 싶을 때
                    <>
                    <Route path="/" element={<Home userObj={userObj}/>}  //props(userObj)전달
                    />
                    <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>} />
                    </>
                ) : (
                    <Route exact path="/" element={<Auth />}/>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;