import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes, NavLink} from 'react-router-dom';
//BrowserRouter 컴포넌트의 최상위 컴포넌트를 감싸는 래퍼 컴포넌트이다.
//래퍼 컴포넌트 :  다른 컴포넌트를 감싸서 공통 ui, 공통기능, 공통 로직을 제공하는 컴포넌트

function Home(){
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  );
}

function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App(){
  return (
    <div>
      <h1>Hello React Rouer DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={'Not Found'} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<HashRouter><App /></HashRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
