import React from 'react';
import './styles.css';

const UserInfo = (props) => {
    return <p className="username-text">Username: {props.name}</p>;
}

export default UserInfo;