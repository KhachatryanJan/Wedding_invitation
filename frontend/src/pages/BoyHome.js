import styles from "./about.module.css";

function BoyHome() {
    return (
        <div>
            <section className={styles.section}>
                <h3 className={styles.girl_h3}>Փեսայի Տուն</h3>
                <img
                    src="https://lsbp.co.uk/wp-content/uploads/2024/09/Didsbury-House-Hotel-Wedding-Photography-1300x867.jpg.webp"
                    alt="Փեսայի Տուն"
                    className={styles.image_hous}
                />
                <p className={styles.girl_p}>Ժամը՝ 12:30</p>
                <div className={styles.div_ifeam}>
                <iframe
                    title="Եկեղեցու Քարտեզ"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12116.129604911599!2d43.99814095379869!3d40.60710876301304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a7579bf7b5f31%3A0x4345ebdf25ef9e!2z1YbVodWw1aHVutWl1b_VodW-1aHVtg!5e0!3m2!1shy!2sam!4v1759405641354!5m2!1shy!2sam"
                    width="600px"
                    height="300"
                    className={styles.iframe}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </section>
        </div>
    );
}

export default BoyHome;
