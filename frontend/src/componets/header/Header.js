import styles from "./Header.module.css"
import Logo from "./Logo"
import NnavigateLinks from "./NavigateLinks"
function Header(){
    return(
        <>
        <div className={styles.headerDiv}>
        <Logo />
        <NnavigateLinks />
            </div></>
    )
}

export default Header