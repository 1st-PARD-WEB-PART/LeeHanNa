// import { getDocs, collection, query, where } from 'firebase/firestore';
import {updateProfile} from "@firebase/auth";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../fbase';

const Profile = ({refreshUser, userObj}) => { //userObj - 로그인 한 user정보 prop으로 받기
    const navigate = useNavigate();
    const [newDisplayName, setnewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut().then(r=>navigate("/"));
    };

    // const getMyNweets = async() =>{ //내 nweets얻는 function
    //     const q = query(
    //         collection(dbService, "nweets"),
    //         where("creatorId", "==", userObj.uid), //nweet의 creatorId와 현재 userid가 같은 모든 문서를
    //     );
    //     const querySnapshot = await getDocs(q); //getDocs - 쿼리 결과 값 가져오기
    //     querySnapshot.forEach((doc)=>{
    //         console.log(doc.id, "=>", doc.data());
    //     });
    // }

    const onChange = (event) => { //input값을 변경할 때마다 호출
        const {target : {value},
        } = event;
        setnewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        //name을 수정하지 않으면 업데이트하지 않음
        if(userObj.displayName !== newDisplayName){ 
            //새로고침 시 변경 이름 적용 -> 바로 업데이트 사항 적용되도록
            //userObj에 새로운 상태를 적용시켜주면 전체에 변화를 줄 수 있음
            await updateProfile(userObj,{
                displayName: newDisplayName,
            });
            refreshUser(); //userObj렌더링 -> 전체 변화
        }
    };
    return (
        <>
        <form onSubmit={onSubmit}>
            <input value={newDisplayName} onChange={onChange} type="text" placeholder="Display name" />
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log out</button>
        </>
    );

}
export default Profile;
