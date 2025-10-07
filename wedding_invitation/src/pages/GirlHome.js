import styles from "./about.module.css"
import brdeiHous from "./../image/brideHous.jpg"
function GirlHome() {
    return (    
        <>
            <section className={styles.section}>
                <h3 className={styles.girl_h3}>Հարսի Տուն</h3>
                <img  src={brdeiHous} alt="Հարսի Տուն" className={styles.image_hous} />
                <p className={styles.girl_p}>Ժամը՝ 12:00</p>
                <div className={styles.div_ifeam}>
                <iframe
                    title="Եկեղեցու Քարտեզ"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48350.7260903722!2d43.869313874389086!3d40.76377587448134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb134a7588ff%3A0xb56bd042c3b2b120!2z1LHVrdW41oLWgNW11aHVtg!5e0!3m2!1shy!2sam!4v1759402271516!5m2!1shy!2sam" 
                    width="600px"
                    height="300"
                    className={styles.iframe}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </section>
        </>
    )
}

export default GirlHome