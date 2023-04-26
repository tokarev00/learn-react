import React from "react";

import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormControls";
import s from "../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = (props) => {
    const {handleSubmit, profile, error} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div><button type='submit'>save</button></div>
            {error && <div className={s.formSummaryError} >{error}</div>}
            <div>
                <Field
                    component={Input}
                    type='text'
                    placeholder='Full Name'
                    name='fullName' />
            </div>
            <div>
                <label htmlFor="lookingForAJob"><b>Looking for a job:</b></label>
                <Field
                    component={Input}
                    type='checkbox'
                    name='lookingForAJob' />
            </div>
            <div>
                <Field
                    component={Textarea}
                    placeholder='My professional skills'
                    name='lookingForAJobDescription' />
            </div>
            <div>
                <Field
                    component={Textarea}
                    placeholder='About Me'
                    name='aboutMe' />
            </div>
            <div style={{display: 'flex'}}>
                <div>
                    <b>Contacts :</b>
                </div>
                <div style={{marginLeft: 20}}>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <Field name={'contacts.' + key} placeholder={key} component='input' />
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}
export default reduxForm({form: 'edit-profile'})( ProfileDataForm);