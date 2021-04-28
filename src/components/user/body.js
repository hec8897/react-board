
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import UserList from './userList'

class HomeBody extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      UserList:[
        {id:0,name:'김다운', address:""},
        {id:1,name:'김대현', address:""},
        {id:2,name:'김영재', address:""},
        {id:3,name:'박진성', address:""},
      ]
    }
  }
  render() {
    const { id } = this.props.match.params
    console.log(id)
    console.log(this.props)
    return (
      <div>
        <Link to="/users/1">링크 1</Link>
        {
          <Route path="/users/:id">
            <UserList list={this.state.UserList}/>
            {id !== "main" ? <h1>id: {id}</h1> : <h1>User Main</h1>}
          </Route>
        }
      </div>
    )
  }
}


export default HomeBody;
