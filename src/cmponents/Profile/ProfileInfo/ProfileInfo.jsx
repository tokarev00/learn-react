import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user-picture.png";
import s from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm";
const ProfileInfo = ({profile, updateUserStatus, profileStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    function handleFileChange (e) {
        if (e.target.files) {
            savePhoto(e.currentTarget.files[0])
        }
    }
    function onSubmit (values) {
         saveProfile(values).then(()=>setEditMode(false))
    }
    return (
        <>
            <div>
                <img src="https://thumbs.dreamstime.com/z/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg" alt="banner"/>
                {isOwner && <input type="file" onChange={handleFileChange} />}
            </div>
            <div>
                <img src={profile.photos.large || userPhoto} alt="avatar" className={s.mainPhoto}/>

                {!editMode ?  <ProfileData profile={profile} onEditProfileClick={()=> setEditMode(true) }  isOwner={isOwner}/> : <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit} />}

                <ProfileStatusWithHooks isOwner={isOwner} updateUserStatus={updateUserStatus} status={profileStatus} />
            </div>
        </>
    )
}
const ProfileData = ({profile, isOwner, onEditProfileClick}) => {
    return (
        <div>
            {isOwner && <div><button onClick={onEditProfileClick}>Edit Profile</button></div>}
            <div>
                <b>Full Name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div style={{display: 'flex'}}>
                <div>
                    <b>Contacts :</b>
                </div>
                <div style={{marginLeft: 20}}>
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return<div><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;