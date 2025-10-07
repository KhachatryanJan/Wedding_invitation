import styles from "./about.module.css"



function ChurchRestaura() {
    return (
        <section className={styles.section}>
            <h3 className={styles.girl_h2}>Եկեղեցի</h3>
            <div className={styles.box1}>
            <img className={styles.image_hous1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyp0SqTezT4Mkv9p9URij1XyqayFNkQ0tkg&s" alt="Եկեղեցու նկար" className={styles.image} />
            <div className={styles.line1}></div>
            <iframe
                title="Եկեղեցու Քարտեզ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.0676564429486!2d43.99958800000001!3d40.60633089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a756d0c044a69%3A0x9b1dc7a53f3e2642!2z1YDVodW81avVs9Wh1b7VodW21oQ!5e0!3m2!1shy!2sam!4v1759407623856!5m2!1shy!2sam" 
                width="300px"
                height="200"
                className={styles.iframe1}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <p className={styles.girl_p1}>Ժամը՝ 13:00</p>
        </section>
    )
}


export default ChurchRestaura