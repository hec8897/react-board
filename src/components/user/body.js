
import React, { Component } from "react";
import { Route } from "react-router-dom";
import UserList from './userList'
import UserInfo from './userInfo'

class HomeBody extends Component {


  constructor(...props) {
    super(...props);
    this.state = {
      RouteData: null,
      UserData: [
        { id: 0, name: '김다운', address: "인천" },
        { id: 1, name: '김대현', address: "강동" },
        { id: 2, name: '김영재', address: "응암" },
        { id: 3, name: '박진성', address: "광진" },
      ]
    }
  };

  id = this.props.match.params.id


  updateRouter = async (id) => {
    const { UserData } = this.state
    await this.setState({
      RouteData: UserData.filter((ele) => {
        return ele.id === id
      })
    })
  }

  render() {
    const { id } = this.props.match.params
    const { UserData, RouteData } = this.state
    return (
      <div>
        {
          <Route path="/users/:id">
            <UserList list={UserData} UpdateCtrl={this.updateRouter} />
            {id !== "main" ? <UserInfo User={RouteData}/>: ""}
          </Route>
        }
      </div>
    )
  }
}


export default HomeBody;
