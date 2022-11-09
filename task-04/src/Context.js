import {useContext} from 'react'
    function Context() {

    const context = useContext(contextValue)

    const contextValue = {name: 'Chris', location: 'Munich'}
    return ( 
        <Context.Provider value={contextValue}>
            {}
        </Context.Provider>
     );
}

export default Context;