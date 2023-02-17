import s from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <>
            <div>
                <img src="https://thumbs.dreamstime.com/z/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg" alt="banner"/>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="avatar"/>
                <ProfileStatus status="Test test" />
            </div>
        </>
    )
}

export default ProfileInfo;