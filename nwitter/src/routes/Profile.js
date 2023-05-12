import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../fbase';

const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClick = () => {
        authService.signOut().then(r=>navigate("/"));
    };
    return (
        <>
        <button onClick={onLogOutClick}>Log out</button>
        </>
    );

}
export default Profile;
