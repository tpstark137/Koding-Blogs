import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useEffect,useContext} from "react";
import {UserContext} from "./UserContext";
export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);
    // const[username,setUsername]=React.useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                // setUsername(userInfo.username);
            });
        });
    });

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
        // setUsername(null);
    }

    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className="logo"><span className='log' href="/">{"<"}</span>KomdingBlogs <span className='log' href="/">{"/>"}</span></Link>
            <nav>
                <Link to={"/"}>Blogs</Link>
                <Link to={"/resources"}>Resources</Link>
                {username && (
                    <>
                        <Link to="/contribute">Contribute Post</Link>
                        <span className='cursor' onClick={logout}>Logout ({username})</span>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}