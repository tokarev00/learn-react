import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postData = [
        {
            id: 1,
            message: 'Hi, How are you?',
            likesCount: 12,
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 22,
        },
    ]
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
                <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount} />
            </div>
        </div>
    )
}
export default MyPosts