
import React, { useState } from 'react';
import UserInfo from '../../components/UserInfo'
import './styles.css';

const Home = () => {
    const [name, setName] = useState('John Doe');
    const changeName = (text) => {
        text === "" ? setName('John Doe') : setName(text)
    }
    return (
        <div className="container">
            
            <UserInfo name={name}></UserInfo>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        placeholder="Username"
                        className="input"
                        onChange={(event) => { changeName(event.target.value) }}
                    />
                </label>
            </form>
        </div>
    )
}

export default Home;
