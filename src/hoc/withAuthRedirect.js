import React from "react";
import {Redirect} from "react-router-dom";
<<<<<<< Updated upstream

export const withAuthRedirect = (Component) => {
=======
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth,
    })

>>>>>>> Stashed changes
    class RedirectComponent extends React.Component{
        render() {
            if (!this.props.isAuth){
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }
<<<<<<< Updated upstream
    return RedirectComponent;
=======

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
>>>>>>> Stashed changes
}
