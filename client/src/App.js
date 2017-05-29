import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import Main from './routes';

class Header extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to='/'>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to='/profile'>
          My Profile
        </Menu.Item>
        <Menu.Item as={Link} to='/organization'>
          Organization
        </Menu.Item>
      </Menu>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Main />
      </Container>
    );
  }
}

export default App;
