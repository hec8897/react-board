import React from 'react'
import { useHistory } from "react-router-dom";

const style = {
    
    listStyle: {
        color: "blue"
    }
}



const UserList = ({ list,UpdateCtrl }) => {
    let history = useHistory();
    
    const UserList = list.map((ele) => {
        return <li style={style.listStyle} key={ele.id}>
                <a onClick={(e)=>{
                    e.preventDefault();
                    UpdateCtrl(ele.id)
                    history.push(`/users/${ele.id}`)
                }}>{ele.name}</a>
                </li>
    })
    return (
        <ul>{UserList}</ul>
    )
}

export default UserList;