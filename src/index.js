import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";

import Index from "views/Index.jsx";
import Book from "views/pages/Book.jsx";
import Map from "views/pages/Map.jsx";
import Rooms from "views/pages/Rooms.jsx";
import Contacts from "views/pages/Contacts.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route
        path="/Contacts"
        exact
        render={props => <Contacts {...props} />}
      />
      <Route path="/Map" exact render={props => <Map {...props} />} />
      <Route
        path="/book"
        exact
        render={props => <Book {...props} />}
      />
      <Route
        path="/rooms"
        exact
        render={props => <Rooms {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
