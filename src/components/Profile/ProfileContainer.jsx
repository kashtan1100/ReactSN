import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
<<<<<<< Updated upstream
import {Redirect, withRouter} from "react-router-dom";
=======
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
>>>>>>> Stashed changes

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

<<<<<<< Updated upstream
        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

=======
>>>>>>> Stashed changes
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
<<<<<<< Updated upstream
    isAuth: state.auth.isAuth,
=======
>>>>>>> Stashed changes
})

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);