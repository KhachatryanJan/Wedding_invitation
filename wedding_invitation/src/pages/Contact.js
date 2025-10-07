import { useState } from "react";
import styles from "./contact.module.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    side: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Շնորհակալություն, ${formData.name}:
    \n✅ Մասնակցություն՝ ${formData.attending}
    \n👤 Կողմ՝ ${formData.side}`);

    // Այստեղ կարող եք տվյալները ուղարկել backend, կամ պահել
    try {
      const response = fetch("https://localhost:3000/api/guests", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })


      const result = await response.json();
      if (response.ok) {
        alert(`Շնորհակալություն, ${formData.name}! Ձեր պատասխանն ընդունվեց 🥰`);
      setFormData({ name: "", attending: "", side: "" });
      } else {
        alert("Error:", result.message || "Unknown error");

      }
      } catch (error) {
        alert("Սերվերի հետ կապ չկա 😢");

      }
    };

    return (
      <div className={styles.contactDiv}>
        <div className={styles.wrapper}>
          <h2>Հարսանիքի Մասնակցություն</h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Ձեր անունը ւ այն մարդկանց ով մասնակցելու են "
              value={formData.name}
              onChange={handleChange}
              required
            />

            <div className={styles.optionGroup}>
              <label>Մասնակցելու ե՞ք հարսանիքին</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="Այո"
                    checked={formData.attending === "Այո"}
                    onChange={handleChange}
                    required
                  />
                  Այո
                </label>
                <label>
                  <input
                    type="radio"
                    name="attending"
                    value="Ոչ"
                    checked={formData.attending === "Ոչ"}
                    onChange={handleChange}
                  />
                  Ոչ
                </label>
              </div>
            </div>

            <div className={styles.optionGroup}>
              <label>Ո՞ւմ կողմից եք</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="side"
                    value="ժաննայի"
                    checked={formData.side === "ժաննայի"}
                    onChange={handleChange}
                    required
                  />
                  ժաննայի
                </label>
                <label>
                  <input
                    type="radio"
                    name="side"
                    value="Կարենի"
                    checked={formData.side === "Կարենի"}
                    onChange={handleChange}
                  />
                  Կարենի
                </label>
              </div>
            </div>

            <button type="submit">Ուղարկել</button>
          </form>
        </div>
      </div>
    );
  }

  export default Contact;
