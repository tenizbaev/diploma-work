import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home'
import Rooms from './containers/Rooms/Rooms'
import Book from './containers/Book/Book'
import Layout from './containers/Layout/Layout';
import Map from './containers/Map/Map'
import Contacts from './containers/Contacts/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Route path="/" component={Home} exact />
            <Route path="/Rooms" component={Rooms} />
            <Route path="/Book" component={Book} />
            <Route path="/Map" component={Map} />
            <Route path="/Contacts" component={Contacts} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
