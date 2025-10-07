import logo from "../../image/JK.png"
import styles from "./Header.module.css"
function Logo() {
    return (
        <div className={styles.logoDiv}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" className={styles.size} />
            </div>
        </div>
    )
}

export default Logo 