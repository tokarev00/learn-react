import {profileAPI, usersAPI} from "../api/api";

const SET_USER_PROFILE = '/profilePage/SET_USER_PROFILE';
const SET_PROFILE_STATUS = '/profilePage/SET_PROFILE_STATUS';
const ADD_POST = '/profilePage/ADD-POST';
const DELETE_POST = '/profilePage/DELETE_POST'
const SAVE_PHOTO_SUCCESS = '/profilePage/SAVE_PHOTO_SUCCESS'
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const getUserProfile = (userId) => async (dispatch) => {

    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}
export const getUserStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    if (response.status === 200) {
        const profileStatus = response.data;
        dispatch(setProfileStatus(profileStatus));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    debugger
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));

    }
}
export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
}
export default profileReducer;