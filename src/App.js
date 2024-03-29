import './App.css';
import HeaderContainer from "./cmponents/Header/HeaderContainer";
import NavBar from "./cmponents/NavBar/NavBar";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import Login from "./cmponents/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./cmponents/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {Navigate} from "react-router-dom";
import Profile from "./cmponents/Profile/ProfileContainer";
import UsersContainer from "./cmponents/Users/UsersContainer";
const DialogsContainer = lazy(()=> import("./cmponents/Dialogs/DialogsContainer"));

class App extends React.Component {
    catchAllUnhandledErrors () {
        alert("Some error occurred")
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (this.props.initialized) {
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/" element={<Suspense fallback={<div><Preloader/></div>}><DialogsContainer/></Suspense>}/>
                            <Route path="/users/" element={<UsersContainer/>}/>
                            <Route path={'/profile/'} element={<Profile/>}>
                                <Route path=":userId" element={<Profile/>}/>
                            </Route>
                            <Route path={'/login/'} element={<Login>Login</Login>}/>
                            <Route path="/" element={<Navigate to="/profile" />} />
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
        initialized: state.app.initialized,
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

let WholeApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
}
export default WholeApp