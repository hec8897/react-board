import React from 'react'
import { useHistory } from "react-router-dom";

const style = {

    listStyle: {
        cursor:"pointer"
    }
}



const UserList = ({ list, UpdateCtrl }) => {
    const history = useHistory();

    const UserList = list.map((ele) => {
        return <li style={style.listStyle} key={ele.id}>
            <p onClick={(e) => {
                e.preventDefault();
                UpdateCtrl(ele.id)
                history.push(`/users/${ele.id}`)
            }}>{ele.name}</p>
        </li>
    })
    return (
        <ul>{UserList}</ul>
    )
}

export default UserList;