import React from 'react';
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user-picture.png';

class Users extends React.Component {
    componentDidMount() {
        axios({method: 'GET', url:` https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`}).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios({method: 'GET', url:` https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`}).then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return <div>
                    <div>
                        {
                            pages.map( p => {
                                return <span className={this.props.currentPage === p && styles.selectedPage} onClick={()=>{ this.onPageChanged(p)}}>{p}</span>
                            })
                        }
                    </div>
                    {
                        this.props.users.map(u => <div className={styles.user} key={u.id}>
                            <div>
                                <div>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {
                                        u.followed ?
                                            <button onClick={()=>{this.props.unfollow(u.id)}}>Follow</button> :
                                            <button onClick={()=>{this.props.follow(u.id)}}>Unfollow</button>
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
}

export default Users;