import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
class HeaderContainer extends React.Component {
    componentDidMount() {
        axios({method: 'GET', url:`https://social-network.samuraijs.com/api/1.1/auth/me`, withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return(
        <Header isAuth={this.props.isAuth} login={this.props.login} />
    )}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);