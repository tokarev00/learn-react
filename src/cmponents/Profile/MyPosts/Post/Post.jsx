import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatarImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SLYLbmf6wtjV_fj26W03NZwKo94mUvE-kA&usqp=CAU" alt="avatar"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;