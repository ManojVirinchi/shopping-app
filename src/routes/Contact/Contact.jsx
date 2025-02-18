import styles from "./contact.module.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import map from "../../assets/map.png";

const Contact = () => {
  return (
    <div className="main--cont">
      <div className={styles.main}>
        <h1>We'd Love to Hear From You!</h1>
        <div className={styles.contactContainer}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
          >
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className={styles.input}
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className={styles.input}
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>

          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p>
              <img src={mail} alt="email" />
              <a href="mailto:support@thelivingloft.com">
                support@thelivingloft.com
              </a>
            </p>
            <p>
              <img src={phone} alt="email" />{" "}
              <a href="tel:+1234567890">(123) 456-7890</a>
            </p>
            <p>
              <img src={map} alt="email" /> 123 Loft Avenue, Design City,
              Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
