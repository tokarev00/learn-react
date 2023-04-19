import './App.css';
import HeaderContainer from "./cmponents/Header/HeaderContainer";
import NavBar from "./cmponents/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./cmponents/Profile/ProfileContainer";
import DialogsContainer from "./cmponents/Dialogs/DialogsContainer";
import UsersContainer from "./cmponents/Users/UsersContainer";
import React from "react";
import Login from "./cmponents/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./cmponents/common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (this.props.initialized) {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/" element={<DialogsContainer/>}/>
                            <Route path="/users/" element={<UsersContainer/>}/>
                            <Route path={'/profile/'} element={<Profile/>}>
                                <Route path=":userId" element={<Profile/>}/>
                            </Route>
                            <Route path={'/login/'} element={<Login>Login</Login>}/>
                        </Routes>
                    </div>
                </div>
            );
        } else {
            return <Preloader/>
        }
    }
}
function mapStateToProps(state) {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
