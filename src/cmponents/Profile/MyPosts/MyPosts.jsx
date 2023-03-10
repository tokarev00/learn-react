import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} id={post.id} likesCount={post.likesCount} />)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return(
        <div>
            <h3>My posts</h3>

            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPostText" component="textarea" />
            <button>Add Post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({
    form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts