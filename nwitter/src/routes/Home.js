import React, {useState} from 'react';
import { dbService } from '../fbase';
import { addDoc, collection } from 'firebase/firestore';

const Home = () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => { //add
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(dbService, "nweets"),{
                nweet,
                createAt : Date.now(),
            });
            console.log("Document written with ID: ", docRef.id);
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
        </div>
    );
};
export default Home;