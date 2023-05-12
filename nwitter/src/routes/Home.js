import React, {useEffect, useState} from 'react';
import { dbService } from '../fbase';
import { addDoc, collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import Nweet from '../components/Nweet';

const Home = ({userObj}) => { //props (userObj)는 router에서 확인
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState();
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
    const onSubmit = async (event) => { //add
        event.preventDefault();
        try{
            await addDoc(collection(dbService, "nweets"),{ //nweets collection에 저장
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
    const onFileChange = (event) => { //file선택 상황이 바뀔때마다 호출
        const {target: { files },
        } = event;
        const theFile = files[0]; //file저장
        const reader = new FileReader(); //저장한 file불러오기
        reader.onloadend = (event) =>{ //파일 읽기 작업이 끝났을 때 (event listner)
            const {currentTarget: {result}, //currentTarget에 result에 url이 있음
            } = event;
            setAttachment(result); //attachment에 넣기
        }
        reader.readAsDataURL(theFile); //url text받음
    }
    const onClearAttachment = () => setAttachment(); //setAttachment비우기
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input value = {nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
                <br></br>
                <input type="file" accept="image/*" onChange={onFileChange}/>
                <br></br>
                {attachment && (
                    //url이 저장된 attachment를 이용해서 이미지 보이기
                    <div>
                        <img src = {attachment} width = "100px" height = "100px" />
                        <button onClick={onClearAttachment}> Clear </button>
                    </div>
                )}
            </form>
            <div>
                {nweets.map((nweet)=>
                <Nweet  //nweet - component , 두개의 props (nweetObj, isOwner)
                key={nweet.id} 
                nweetObj = {nweet} //nweetObj - 전체의 object / props처럼 보냄(Nweet로)
                isOwner={nweet.creatorId === userObj.uid} /> //isOwner이 true (내가 쓴 글) / userObj.uid는 Home의 props로부터
                )}
            </div>
        </div>
    );
};
export default Home;