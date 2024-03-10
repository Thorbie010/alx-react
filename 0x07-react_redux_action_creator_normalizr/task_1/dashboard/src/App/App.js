import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
/* Components */
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';
/* Utils */
import { getLatestNotification, getLatestNotificationa, getLatestNotifications } from '../utils/utils';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      listNotifications: [
        { id: 1, type: 'default', html: { __html: getLatestNotificationa()} },
        { id: 2, type: 'urgent', html: { __html: getLatestNotifications()} },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
      ]
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleClick);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
    console.log(this.state)
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
    console.log(this.state)
  }

  handleClick(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.context.logOut(); // Use context to call logout function
    }
  }

  // Define login and logout functions
  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true
      }
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      }
    });
  }

  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    const { displayDrawer, user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}  
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead} 
        />
        <div className={css(styles.app)}>
          <Header />
          { user.isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> :
            <BodySectionWithMarginBottom title='Log in to continue'>
              {/* Pass the login function to the Login component */}
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          }
          <BodySection title='News from the School'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut odio a arcu pretium consequat. Sed ac enim vitae tellus ultricies aliquam. Integer suscipit massa sit amet mauris feugiat, id aliquet mi commodo. Morbi volutpat aliquam metus ac vestibulum. Quisque tristique convallis ligula, non tincidunt nulla sollicitudin et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a consectetur odio. Phasellus efficitur dolor sit amet erat mattis, quis dictum est ullamcorper. Nullam varius justo quis libero auctor, ut tristique ligula ultricies. Phasellus mattis risus vitae augue suscipit feugiat. Vivamus posuere eros eu magna consequat varius.</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

// Set context type to access context in the class component
App.contextType = AppContext;

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

export default App;
