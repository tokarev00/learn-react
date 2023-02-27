import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 27201;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return (
            <Profile {...this.props} profileStatus={this.props.profileStatus} updateUserStatus={this.props.updateUserStatus} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus
})
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter)(ProfileContainer);

