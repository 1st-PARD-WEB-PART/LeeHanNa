/*
local - 브라우저를 닫더라도 user기억
*/
import React,{useState} from 'react';
import { authService, firebaseInstance } from '../fbase';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { async } from '@firebase/util';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) =>{ //input 값이 변경될때마다 호출됨
        const{
            target: {name, value},
        } = event; //event를 통해 target 정보를 얻음
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) =>{
        event.preventDefault(); //기본 행위가 실행되지 않도록
        try{
            if(newAccount){
                await createUserWithEmailAndPassword(authService, email, password);
            }else{
                await signInWithEmailAndPassword(authService, email, password);
            }
        }catch(error){
            setError(error.message);
        }
    };
    //이전 값(newAccount)을 가져와서 그 값의 반대를 return
    const toggleAccount = () => setNewAccount((prev) => !prev); 
    const onSocialClick = async (event) =>{
        const {target:{name},
        } = event;
        let provider;
        if(name === "google"){
            provider = new GoogleAuthProvider();
        }else if(name === "github"){
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(authService, provider);
    };
    //input의value는 state에 저장 -> value가 바뀔 때 마다 state가 바뀌게 됨
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/> 
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account" }</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div>
    );
}
export default Auth;