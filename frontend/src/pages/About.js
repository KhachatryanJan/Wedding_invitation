import styles from "./about.module.css"
import BoyHome from "./BoyHome";
import ChurchRestaura from "./ChurchRestaurant";
import GirlHome from "./GirlHome";
import WeddingCountDown from "./WeddingCountDown";

function About() {
    return (
        <div className={styles.aboutWrapper}>
            <h2 className={styles.title}>Մեր Հարսանիքը </h2>
            <h4 className={styles.title2 }>Նոյոմբերի 22</h4>
             <WeddingCountDown/>
            <div className={styles.div_about}>
                <BoyHome/>
                <GirlHome />
                
                <ChurchRestaura/>
                
                </div >
            </div>
            )
}

            export default About;   