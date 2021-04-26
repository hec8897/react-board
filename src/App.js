import React, { Component } from "react";
import HomeBody from './components/home/body'
import UserBody from './components/user/body'
import BoardBody from './components/board/body'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/users/main">user</Link>
            </li>
            <li>
              <Link to="/board">board</Link>
            </li>
          </ul>
          <nav>
            <Switch>
              <Route exact path="/" component={HomeBody} />
              <Route path="/users/:id" component={UserBody} />
              <Route path="/board" component={BoardBody} />
            </Switch>
          </nav>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
