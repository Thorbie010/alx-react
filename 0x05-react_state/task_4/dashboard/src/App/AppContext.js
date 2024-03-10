import { createContext } from 'react';

// Define default values for user object and logout function
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

const defaultLogout = () => {};

// Create the context
const AppContext = createContext({
  user: defaultUser,
  logOut: defaultLogout
});

export default AppContext;
