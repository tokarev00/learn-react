import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user-picture.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.user} key={user.id}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="avatar"
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div>
                            <span>
                                <div>{user.name}</div><div>{user.status}</div>
                            </span>
            </div>
            <span>{'user.location.country'}</span>
            <span>{'user.location.city'}</span>
        </div>
    )
}

export default User;