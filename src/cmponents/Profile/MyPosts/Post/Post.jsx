import React from "react";
import s from "./Post.module.css";
const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
            <img className={s.avatarImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SLYLbmf6wtjV_fj26W03NZwKo94mUvE-kA&usqp=CAU" alt="avatar"/>
            {props.message}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;