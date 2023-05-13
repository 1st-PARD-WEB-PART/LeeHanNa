import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { dbService, storageService } from "../fbase";
import React, {useState} from "react";
import { deleteObject, ref } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({nweetObj, isOwner}) => { //nweetObj받아서 id확인
    const [editing, setEditing] = useState(false); //수정 모드인지 아닌지 T/F
    const [newNweet, setNewNweet] = useState(nweetObj.text); //input에 입력된 text
    const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`); //현재 정보
    const onDeleteClick = async() => { //확인 창 뜨도록 (확인)-> ok = ture
        const ok = window.confirm("Are you sure you want to delete this nweet?");
        if(ok) {
            await deleteDoc(NweetTextRef); //delete nweet
            if(nweetObj.attachmentUrl !==""){
                const ulrRef = ref(storageService, nweetObj.attachmentUrl); //url 가져오기
                await deleteObject(ulrRef); //url을 찾아 파일도 삭제
            }
        }
    };
    const toggleEditing = () => setEditing((prev) => !prev); //수정 버튼 누르면 editing변수 t/f
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(NweetTextRef,{ //text를 수정
            text: newNweet, //수정된 input값
        }); //update
        setEditing(false); //수정 후 더이상 editing모드 아님
    }
    const onChange = (event) => { //edit input
        const {target: {value},
        } = event;
    setNewNweet(value);
    }

    return(
        <div className="nweet">
            {editing ? ( //수정 -> 이전 메시지 빈칸에 등록 + 취소 버튼 / Cancle -> toggleEditing 호출에 의해 editing변수 = f
                <>
                <form onSubmit={onSubmit} className="container nweetEdit">
                    <input type = "text" placeholder="Edit your nweet" value={newNweet} required onChange={onChange}/>
                    <input className="formBtn" type = "submit" value="Update Nweet" />
                </form> 
                <button onClick={toggleEditing} className="formBtn cancelBtn">Cancle</button>
                </>
                ) : (<>
                        <h4>{nweetObj.text}</h4>
                        {nweetObj.attachmentUrl && <img src = {nweetObj.attachmentUrl} width = "100px" height = "100px"/>}
                        <br></br>
                        {isOwner && ( //넘겨받은 isOwner이 true이면 삭제, 수정 가능
                        <>
                        <div className="nweet__actions">
                            <span onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>
                            <span onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </span>
                        </div>
                        </>
                        )}
                    </>
                )}
        </div>
    );
};

export default Nweet;