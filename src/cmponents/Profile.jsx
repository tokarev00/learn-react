import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://thumbs.dreamstime.com/z/technology-banner-background-old-new-using-computer-circuits-old-machine-cogs-37036025.jpg" alt="banner"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.item}> Post 1</div>
                <div className={s.item}> Post 2</div>
            </div>
        </div>
    );
}
export default Profile;