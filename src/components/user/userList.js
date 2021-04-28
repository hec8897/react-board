import React from 'react'
import { Link } from "react-router-dom";

const UserList = ({list}) =>{

    const UserList = list.map((ele)=>{
        return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>
    })
    return(
        <ul>{UserList}</ul>
    )
}

export default UserList;