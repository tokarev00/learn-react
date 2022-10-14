import Post from "./Post/Post";


const MyPosts = (props) => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
                <Post message="Hi, How are you?" />
                <Post message="It's my first post"/>
        </div>
    )
}
export default MyPosts