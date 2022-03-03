import React from 'react';
import GlobalContext from './GlobalContext';


const AppContext = (props) => {
    const [user, setUser] = React.useState(null)
   

    return (
        <GlobalContext.Provider value={{user,setUser}}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default AppContext;