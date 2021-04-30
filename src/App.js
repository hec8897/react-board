import React, { Component } from "react";
import AppNav from './components/common/nav'
import HomeBody from './components/home/body'
import UserBody from './components/user/body'
import BoardBody from './components/board/body'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNav />
            <Switch>
              <Route exact path="/" component={HomeBody} />
              <Route path="/users/:id" component={UserBody} />
              <Route path="/board" component={BoardBody} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
