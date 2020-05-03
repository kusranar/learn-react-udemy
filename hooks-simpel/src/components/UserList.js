import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');

    return (
        <div>
            {users.map(user => <h5>{user.name}</h5>)}
        </div>
    )
}

export default UserList;