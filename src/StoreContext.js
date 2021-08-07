import React from 'react'

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext value={props.store}>
        {props.children}
    </StoreContext>
}

export default StoreContext;