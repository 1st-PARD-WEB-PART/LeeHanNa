import React,{useState} from 'react';
import { authService } from '../fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = () => {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [password, setPassword] = useState("");
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
    //이전 값(newAccount)을 가져와서 그 값의 반대를 return
    const toggleAccount = () => setNewAccount((prev) => !prev); 
    return(
        <>
        <form onSubmit={onSubmit} className="container">
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange} className="authInput"/> 
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange} className="authInput"/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"} className="authInput authSubmit"/>
                {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account" }</span>
        </>
    );
}

export default AuthForm;