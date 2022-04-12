import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import User from './component/user';

function App() {
  return (
	  <Router>
		  <Routes>
			  <Route path = "/home" element = { <Home /> }>
		</Route>
			  <Route path = "/user" element = { <User /> }>
		</Route>
			  <Route path = "/" element = { <Home /> }>
		</Route>
	</Routes>
	  </Router>
  );
}

export default App;
