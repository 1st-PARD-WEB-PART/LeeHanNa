import React, {useEffect, useState} from 'react';
import { dbService } from '../fbase';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Nweet from '../components/Nweet';

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    useEffect(()=>{
        //데이터베이스에서 뭔가를 하게 되면 알 수 있도록 listener
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot)=>{ 
            const nweetArr = snapshot.docs.map((doc)=>({ //Snapshot실시간으로 확인
                id: doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArr);
        });
    },[]);
    const onSubmit = async (event) => { //add
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(dbService, "nweets"),{
                text : nweet,
                createdAt : Date.now(),
                creatorId: userObj.uid,
            });
        }catch(error){
            console.error("Error adding document: ", error);
        }
        setNweet("");
    };
    const onChange = (event) => { //input text바뀔때마다 호출
        const {target : {value},
        } = event;
        setNweet(value);
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value = {nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet)=>
                <Nweet key={nweet.id} nweetObj = {nweet} isOwner={nweet.creatorId === userObj.uid} />
                )}
            </div>
        </div>
    );
};
export default Home;