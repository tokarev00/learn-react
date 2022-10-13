import Post from "./Post/Post";


const MyPosts = (props) => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
                <Post/>
                <Post/>
        </div>
    )
}
export default MyPosts