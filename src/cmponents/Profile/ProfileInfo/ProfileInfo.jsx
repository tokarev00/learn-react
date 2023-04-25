import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-picture.png";
import s from './ProfileInfo.module.css'
const ProfileInfo = ({profile, updateUserStatus, profileStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader />
    }
    function handleFileChange (e) {
        debugger
        if (e.target.files) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <>
            <div>
                <img src="https://thumbs.dreamstime.com/z/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg" alt="banner"/>
                {isOwner && <input type="file" onChange={handleFileChange} />}
            </div>
            <div>
                <img src={profile.photos.large || userPhoto} alt="avatar" className={s.mainPhoto}/>
                <ProfileStatusWithHooks isOwner={isOwner} updateUserStatus={updateUserStatus} status={profileStatus} />
            </div>
        </>
    )
}

export default ProfileInfo;