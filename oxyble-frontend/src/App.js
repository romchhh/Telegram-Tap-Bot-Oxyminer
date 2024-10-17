import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
    return ( <
        Router >
        <
        div className = "container" >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        /Routes> <
        Footer / >
        <
        /div> <
        /Router>
    );
}

export default App;