import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function NavigateLinks() {
  const navigate = useNavigate();

  return (
    <div className={styles.navigateLinksDiv}>
      <p className={styles.p1} onClick={()=>navigate("/")}>Home</p>
      <p className={styles.p2}  onClick={()=>navigate("/about")}>About</p>
      <p className={styles.p3 }onClick={()=>navigate("/contact")}>Contact</p>
    </div>
  );
}

export default NavigateLinks;
