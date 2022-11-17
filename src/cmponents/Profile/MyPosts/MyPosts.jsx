import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} id={post.id} likesCount={post.likesCount} />)
    return(
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts