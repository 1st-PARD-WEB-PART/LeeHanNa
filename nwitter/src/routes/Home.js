import React, {useEffect, useState} from 'react';
import { dbService } from '../fbase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

import Nweet from '../components/Nweet';
import NweetFactory from '../components/NweetFactory';

const Home = ({userObj}) => { //props (userObj)는 router에서 확인
    const [nweets, setNweets] = useState([]);
    
    useEffect(()=>{
        //데이터베이스에서 뭔가를 하게 되면 알 수 있도록 listener
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot)=>{ 
            const nweetArr = snapshot.docs.map((doc)=>({ //Snapshot실시간으로 확인 (데이터베이스에 무슨 일이 있을 때 알림 받기)
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr); //새로운 snapshot을 받을 때 배열을 만들고 state에 배열 집어넣기
        });
    },[]);
    
    
    return(
        <div
            style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
        }}>
            <div className="container">
                <NweetFactory userObj={userObj} />
                <div style={{ marginTop: 30 }}>
                    {nweets.map((nweet)=>
                    <Nweet  //nweet - component , 두개의 props (nweetObj, isOwner)
                    key={nweet.id} 
                    nweetObj = {nweet} //nweetObj - 전체의 object / props처럼 보냄(Nweet로)
                    isOwner={nweet.creatorId === userObj.uid} /> //isOwner이 true (내가 쓴 글) / userObj.uid는 Home의 props로부터
                    )}
                </div>
            </div>
        </div>
    );
};
export default Home;