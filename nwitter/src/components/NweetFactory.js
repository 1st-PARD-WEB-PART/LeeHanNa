import React, {useState} from 'react';
import {ref, uploadString, getDownloadURL} from '@firebase/storage';
import { v4 as uuidv4 } from 'uuid'; //기본적으로 어떤 특별한 식별자를 랜덤으로 생성
import { addDoc, collection} from 'firebase/firestore';
import { storageService, dbService } from '../fbase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");//사진 첨부없이 텍스트만 트윗하고 싶을 때를 고려해 기본 값을 ""
    const onSubmit = async (event) => { //add
        event.preventDefault(); //사진을 먼저 업로드 한 후에 URL을 받아서 그 url을 nweet에 추가
        let attachmentUrl = "";
        if(attachment !== "") { //사진이 있는 경우
            const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`); //file에 대한 reference를 가짐 (child) (이미지의 랜덤 name - uuidv4)
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref); //url 다운로드
        }
        //사진이 없는 경우 - attachmentUrl는 ""
        const  nweetObj = {
            text : nweet,
            createdAt : Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }
        //nweetObj형태로 새로운 document생성해서 nweets collection에 저장
        await addDoc(collection(dbService, "nweets"),nweetObj);
        setNweet("");
        setAttachment("");
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
    <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
        <input value = {nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} className="factoryInput__input"/>
        <input type="submit" value="Nweet" className="factoryInput__arrow"/>
        </div>
        <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
        </label>
        <input id="attach-file" type="file" accept="image/*" onChange={onFileChange} style={{opacity: 0,}}/>
        {attachment && (
            //url이 저장된 attachment를 이용해서 이미지 보이기
            <div className="factoryForm__attachment">
                <img src = {attachment} width = "100px" height = "100px" />
                <div
                        className="factoryForm__clear"
                        onClick={onClearAttachment}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                 </div>
            </div>
        )}
    </form>
    );
}
export default NweetFactory;