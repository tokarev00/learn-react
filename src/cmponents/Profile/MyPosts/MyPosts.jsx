import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)
    let newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return(
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts