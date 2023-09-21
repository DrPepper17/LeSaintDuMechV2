import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Header2 from './components/Header2';

function App() {
  return (
    <div className="App">
        <Header />
        This is a test.<br/>
        <Header2 />
        another test.<br/>
        <ul>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
            <li>aaa</li>
        </ul>
    </div>
  );
}

export default App;
