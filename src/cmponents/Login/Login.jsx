import React from "react";
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    const { handleSubmit } = props
    return  (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" placeholder="Login" component="input" type="text" />
            </div>
            <div>
                <Field name="password" placeholder="Password" component="input" type="text" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
                <label htmlFor="rememberMe">remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmitHandler = values => {
        console.log(values)
    };
    return  <div>
        <h1>login</h1>
        <ReduxLoginForm onSubmit={onSubmitHandler} />
    </div>
}

export default Login