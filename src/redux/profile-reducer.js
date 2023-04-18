import {profileAPI, usersAPI} from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const initialState = {
    posts :[
        {
            id: 1,
            message: 'Hi, How are you?',
            likesCount: 12,
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 22,
        },
    ],
    profileStatus: '',
    profile: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likesCount: 0,
                }],
                newPostText: '',
            }
        }
        case SET_PROFILE_STATUS :
            return {
                ...state,
                profileStatus: action.profileStatus
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case DELETE_POST :
            return  {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }
        default: return state;
    }
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatus = (profileStatus) => ({type: SET_PROFILE_STATUS, profileStatus})

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        debugger;
        if (response.data) {
            const profileStatus = response.data;
            dispatch(setProfileStatus(profileStatus));
        }
    })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status));
        }
    })
}
export default profileReducer;