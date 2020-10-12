import React from 'react';

const UserContext = React.createContext({
    user: null,
    setUser: () => { },
    addUser: () => { }
})

export default UserContext