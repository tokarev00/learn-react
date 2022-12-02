import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)
    let newPostElement = React.createRef();
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
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