import React from 'react';
import {  bool } from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        {/* Header */}
        <Header />
        {/* Body */}
        {isLoggedIn ? <CourseList /> : <Login />}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
