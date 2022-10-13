import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item}  ${s.active}`}>
                <a href="#">
                    Profile
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    messages
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    news
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    music
                </a>
            </div>
            <div className={s.item}>
                <a href="#">
                    Settings
                </a>
            </div>
        </nav>
    );
}
export default NavBar;