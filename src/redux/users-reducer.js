const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}
export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;