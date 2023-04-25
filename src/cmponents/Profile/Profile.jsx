import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, profile, updateUserStatus, profileStatus, savePhoto}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} profile={profile} updateUserStatus={updateUserStatus} profileStatus={profileStatus}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;