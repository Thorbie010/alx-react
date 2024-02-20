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
/* Utils */
import { getLatestNotification, getLatestNotificationa, getLatestNotifications } from '../utils/utils';

/* Proptypes */
import PropTypes from 'prop-types';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', html: { __html: getLatestNotificationa()} },
  { id: 2, type: 'urgent', html: { __html: getLatestNotifications()} },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
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
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state;
    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}  
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer} 
        />
        <div className={css(styles.app)}>
          {/* Header */}
          <Header />
          {/* Body */}
          { isLoggedIn ?
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom> :
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          }
          <BodySection title='News from the School'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut odio a arcu pretium consequat. Sed ac enim vitae tellus ultricies aliquam. Integer suscipit massa sit amet mauris feugiat, id aliquet mi commodo. Morbi volutpat aliquam metus ac vestibulum. Quisque tristique convallis ligula, non tincidunt nulla sollicitudin et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a consectetur odio. Phasellus efficitur dolor sit amet erat mattis, quis dictum est ullamcorper. Nullam varius justo quis libero auctor, ut tristique ligula ultricies. Phasellus mattis risus vitae augue suscipit feugiat. Vivamus posuere eros eu magna consequat varius.</p>
          </BodySection>
          {/* Footer */}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void(0),
};

const styles = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
});

export default App;
