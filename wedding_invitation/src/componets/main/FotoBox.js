import foto from "../../image/foto.png"
import styles from "./main.module.css"

function FotoBox(){
    return(
        <>
        <div className={styles.buttomDiv}>
            <div className={styles.mainDiv2}>
                <p className={styles.p}><span className={styles.span}>THE ART OF LOVE FAILITATION</span></p>
                <div className={styles.divFoto}>
                <p className={styles.p2}> <span className={styles.span1}>INFINITE & ETERNAL LOVE </span></p>
                <img src={foto} alt="foto" className={styles.foto} />
                </div>
            </div>
            </div></>
    )
}


export default FotoBox;