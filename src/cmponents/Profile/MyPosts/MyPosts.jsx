import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
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
                <Post message="Hi, How are you?" />
                <Post message="It's my first post"/>
            </div>
        </div>
    )
}
export default MyPosts