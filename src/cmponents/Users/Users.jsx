import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                followed: false,
                fullName: 'Testname',
                status: 'test status',
                location: {city: 'Poltava', country: "Ukraine"}
            },
            {
                id: 2,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                followed: false,
                fullName: 'Testname2',
                status: 'test status 2',
                location: {city: 'Poltava', country: "Ukraine"}
            },
            {
                id: 3,
                photoUrl: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                followed: true,
                fullName: 'Testname3',
                status: 'test status 3',
                location: {city: 'Poltava', country: "Ukraine"}
            },
        ]);
    }

    return <div>
        {
            props.users.map(u => <div className={styles.user} key={u.id}>
                <div>
                    <div>
                        <img src={u.photoUrl} alt="avatar" className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                </div>
                <span>{u.location.country}</span>
                <span>{u.location.city}</span>
            </div>)
        }
    </div>
}

export default Users;