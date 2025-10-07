import styles from "./main.module.css"
import ImageCompo from "./ImageCompo"
import FotoBox from "./FotoBox"
import ForeImage from "./ForeImage"

function Main() {
    return (
        <><div className={styles.mainDivContainer}>
            <div className={styles.mainDiv}>
                <div className={styles.textDiv}>
                    <h1 className={styles.h1}>Կարեն & Ժաննա</h1>
                    <h2 className={styles.h2}>Հարսանեկան հրավիրատոմս</h2>
                </div>
                <ImageCompo />
            </div>

            <FotoBox/>
            <ForeImage/>
            </div>
        </>
    )
}

export default Main
