
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeList } from '../components/ContactList';
import AddContact from '../components/AddContact';
import App from '../App'
const NavBar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand navbar-blue bg-dark">

        <div className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to="/ContactList" className="nav-link ">
              Our Contact List
            </Link>
          </li>
        </div>
      </nav>


    </div>
  );
}

export default NavBar;