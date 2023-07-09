import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">KodingBlogs</Link>
            <nav>
                <Link to={"/"}>Blogs</Link>
                <Link to={"/resources"}>Resources</Link>
                <Link to={"/contribute"}>Contribute</Link>
                <Link to={"/register"}>Register</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
        </header>
    )
}