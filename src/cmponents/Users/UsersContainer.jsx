import React from 'react';
import {connect} from 'react-redux';
import {
    acceptFollow,
    setCurrentPage,
    acceptUnfollow,
    toggleIsFetching,
    getUsers, unfollow, follow
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/>  : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          onPageChanged={this.onPageChanged}
                          users={this.props.users}
                          acceptFollow={this.props.acceptFollow}
                          acceptUnfollow={this.props.acceptUnfollow}
                          followingInProgress={this.props.followingInProgress}
                          unfollow={this.props.unfollow}
                          follow={this.props.follow}
                />
            </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(
        mapStateToProps,
        {acceptFollow,
            acceptUnfollow,
            setCurrentPage,
            toggleIsFetching,
            getUsers,
            unfollow,
            follow}
    )
)(UsersContainer)



