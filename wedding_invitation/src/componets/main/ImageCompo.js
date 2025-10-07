import ring from "../../image/ring.png"
import styles from "./main.module.css"
import frame from "../../image/frame.png"
import flowers from "../../image/flowers.png"
import img from "../../image/img.png"
function ImageCompo() {
    return (
<div className={styles.imageCompoDiv}>
        <div className={styles.img_div1}>
            <img src={ring} alt="ring" className={styles.ring} />
            <div className={styles.div1}>
                <img src={frame} alt="frame" className={styles.frame} />
            </div>
        </div>
        <div className={styles.img_div2}>
            <img src={flowers} alt="flowers" className={styles.flowers} />  
             <div className={styles.div2}>
                <img src={frame} alt="frame" className={styles.frame1} />
            </div>
            </div>  
            <div className={styles.img_div3}>
            <img src={img} alt="img" className={styles.img} />  
             <div className={styles.div1}>
                <img src={frame} alt="frame" className={styles.frame} />
            </div>
            </div>  
        </div>
        )
}

export default ImageCompo;