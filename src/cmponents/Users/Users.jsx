import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user-picture.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={() => {
                        props.onPageChanged(p);
                    }}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"
                                 className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>Unfollow</button>
                        }
                    </div>
                </div>
                <div>
                            <span>
                                <div>{u.name}</div><div>{u.status}</div>
                            </span>
                </div>
                <span>{'u.location.country'}</span>
                <span>{'u.location.city'}</span>
            </div>)
        }
    </div>)
}

export default Users;