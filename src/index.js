import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddContact from './components/AddContact';
import { ContactList } from './components/ContactList';
import { UserState } from "./contexts/UserState";
import Login from "./components/Login";
import Register from './components/register';
ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="App" element={<App />} />
          <Route path="Register" element={<Register />} />
          <Route path="ContactList" element={<ContactList />} />
          <Route path="AddContact" element={<AddContact />} />
        </Routes>

      </BrowserRouter>
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
