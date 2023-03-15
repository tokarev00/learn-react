import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from 'redux-form';
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} id={post.id} likesCount={post.likesCount} />)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return(
        <div>
            <h3>My posts</h3>

            <AddNewPostForm onSubmit={onAddPost} />

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
const maxLength10 = maxLength(10);


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="newPostText"
                component={Textarea}
                validate={[requiredField, maxLength10]}
            />
            <button>Add Post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts