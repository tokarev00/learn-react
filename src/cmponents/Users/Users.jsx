import React from 'react';
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user-picture.png'
let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios({method: 'GET', url:' https://social-network.samuraijs.com/api/1.0/users'}).then(response => {
                props.setUsers(response.data.items);
            })
        }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {
                            u.followed ?
                            <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> :
                            <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>
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
    </div>
}

export default Users;