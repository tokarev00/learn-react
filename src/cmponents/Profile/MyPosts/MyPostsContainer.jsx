import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }
    debugger
    return(<MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={props.store.getState().profilePage.posts}
                    newPostText={props.store.getState().profilePage.newPostText}/>)
}
export default MyPostsContainer;