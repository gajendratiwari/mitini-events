import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "../../components/home/about";
import Service from "../../components/services/service";
import Contact from "../../components/contact/contact";

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Router>
    );
  }
}
export default Layout;
