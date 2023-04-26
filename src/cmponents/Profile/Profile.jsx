import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({isOwner, profile, updateUserStatus, profileStatus, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo isOwner={isOwner} savePhoto={savePhoto} saveProfile={saveProfile} profile={profile} updateUserStatus={updateUserStatus} profileStatus={profileStatus}/>
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;