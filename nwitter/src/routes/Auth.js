/*
local - 브라우저를 닫더라도 user기억
*/
import React from 'react';
import { authService } from '../fbase';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import AuthForm from '../components/AuthForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGoogle,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
    //구글과 깃허브로 팝업창에서 로그인하기
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
            <div className="authContainer">
                <FontAwesomeIcon
                    icon={faTwitter}
                    color={"#04AAFF"}
                    size="3x"
                    style={{ marginBottom: 30 }}
                />
                <AuthForm />
                <div lassName="authBtns">
                    <button onClick={onSocialClick} name="google" className="authBtn">Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
                    <button onClick={onSocialClick} name="github" className="authBtn">Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
                </div>
            </div>
    );
}
export default Auth;