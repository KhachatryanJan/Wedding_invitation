import styles from "./main.module.css"
import iamge1 from "../../image/image1.png"
import iamge2 from "../../image/image2.png"
import iamge3 from "../../image/image3.png"    
import iamge4 from "../../image/image4.png"
import grap from "../../image/grap.png"


function ForeImage() {
    return (
        <div className={styles.foreImageDiv}>
            <div className={styles.box}>
                <img src={iamge1} alt="iamge1" className={styles.iamge1} />
                <img src={iamge2} alt="iamge2" className={styles.iamge2} />
                <img src={iamge3} alt="iamge3" className={styles.iamge3} />
                <img src={iamge4} alt="iamge4" className={styles.iamge4} />
            </div>

           <div className={styles.grap_img}>
            <img src={grap} alt ="grap" className={styles.image}  ></img>
           </div>

        </div>
    );
}   

export default ForeImage;