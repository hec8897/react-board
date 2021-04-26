import React from "react";
import { Link, Route } from "react-router-dom";

const HomeBody = ({ match }) => {
  const {id} = match.params

  return (
    <div>
      <Link to="/users/1">링크 1</Link>
      {
        <Route path="/users/:id">
          {id!="main"?<h1>id: {id}</h1>:<h1>User Main</h1>}
        </Route>
      }
    </div>
  );
};

export default HomeBody;
