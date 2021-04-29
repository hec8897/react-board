import React from 'react'


const UserInfo = ({ User }) => {
    return (
        <div>
            {User === null ? "" : User.map((ele) => {
                return <div key={ele.id}>
                            <h1>{ele.name}</h1>
                            <h2>{ele.address}</h2>
                        </div>
            })}
        </div>
    )

}

export default UserInfo