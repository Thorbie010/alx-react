import React from 'react';
import { shallow } from 'enzyme';
import { expect as expectChai } from 'chai'; // Corrected import statement
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('Test App.js', () => {
  let events = {};

  beforeEach(() => {
    events = {}; // Empty our events before each test case
    // Define the addEventListener method with a Jest mock function
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });

  it('App without crashing', () => {
    expectChai(shallow(<App />).exists()).to.be.true; // Corrected assertion syntax
  });

  it('check that CourseList is not displayed when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expectChai(wrapper.find(CourseList)).to.have.lengthOf(0);
  });

  it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expectChai(wrapper.find(CourseList)).to.have.lengthOf(1);
    expectChai(wrapper.find(Login)).to.have.lengthOf(0);
  });

  it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, 'alert');
    shallow(<App logOut={myLogOut} />); // Mount the component to add event listener

    // Simulate the keydown event with Ctrl + h
    events.keydown({ ctrlKey: true, key: 'h' });

    // Check if the logOut function is called
    expectChai(myLogOut.calledOnce).to.be.true;

    // Restore the spy on global alert
    myAlert.mockRestore();
  });

  it('verify that default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).to.be.false;
  });

  it('verify that calling handleDisplayDrawer updates state to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).to.be.true;
  });

  it('verify that calling handleHideDrawer updates state to false', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).to.be.false;
  });
});
