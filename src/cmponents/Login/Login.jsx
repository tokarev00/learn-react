import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormsControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import s from '../common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return  (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="login"
                    placeholder="Login"
                    component={Input}
                    validate={[requiredField]}
                    type="text"
                />
            </div>
            <div>
                <Field
                    name="password"
                    placeholder="Password"
                    component={Input}
                    validate={[requiredField]}
                    type="password"
                />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <label htmlFor="rememberMe">remember me</label>
            </div>
            {error && <div className={s.formSummaryError} >{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth}) => {
    const onSubmitHandler = (values) => {
        login(values.login, values.password, values.rememberMe);
    };
    if (isAuth) {
        return <Navigate to={'/profile/'} />
    }
    return  <div>
        <h1>login</h1>
        <ReduxLoginForm onSubmit={onSubmitHandler} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})
export default  connect(mapStateToProps, {login})(Login)