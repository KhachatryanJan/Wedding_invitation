import styles from "./Footer.module.css"
import instagram from "../../image/instagram.png"
import facebook from "../../image/facebook.png"
import email from "../../image/email.png"
import NnavigateLinks from "../header/NavigateLinks"    
function Footer() {
    return (
        <>
            <div className={styles.footerDiv}>
                <div>
                    <div className={styles.img_insta}>
                        <img src={instagram} alt="instagram" className={styles.instaLogo} />
                        <div className={styles.instaTextDiv}>
                            <p className={styles.instaText}>Karen Sanosyan</p>
                            <p className={styles.instaText_1}>Jhanna Khachatryan</p>
                        </div>
                    </div>
                    <div className={styles.img_face}>
                        <img src={facebook} alt="facebook" className={styles.faceLogo} />
                        <div className={styles.faceTextDiv}>
                            <p className={styles.faceText}>Karen Sanosyan</p>
                            <p className={styles.faceText_1}>Jhanna Khachatryan</p>
                        </div>
                    </div>
                    <div className={styles.img_email}>
                        <img src={email} alt="email" className={styles.emailLogo} />
                        <div className={styles.emailTextDiv}>
                            <p className={styles.emailText}> jhannakhachatryan@404gmail.com  </p>
                        </div>
                    </div>
                </div>

                <div className={styles.line}></div>

                <div className={styles.navigateLinksDiv1}>
                    <NnavigateLinks  className={styles.links}/>                          
                </div>
            </div>
        </>
    )
}


export default Footer 