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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    withAuthRedirect,
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



