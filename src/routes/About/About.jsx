import { Link } from "react-router-dom";
import about1 from "../../assets/about1.jpg";
import kitchen from "../../assets/aboutKitchen.jpg";
import furniture from "../../assets/aboutFurniture.jpg";
import home from "../../assets/aboutHome.jpg";
import styles from "../../routes/About/about.module.css";

const About = () => {
  const cards = [
    {
      text: "Curated Selection",
      image: kitchen,
    },
    {
      text: "Affordable Luxury",
      image: furniture,
    },
    {
      text: "Seamless Shopping",
      image: home,
    },
  ];
  return (
    <div className="main--cont">
      <div className={styles["about--main"]}>
        <div className={styles.aboutSection}>
          <img
            className={styles.workers}
            src={about1}
            alt="workers in a warehouse"
          />
          <h1 className={styles.mainTitle}>Where Style Meets Functionality.</h1>
          <p className={styles.mainSubtitle}>
            Curated pieces to make your house a home, with quality and design at
            the forefront.
          </p>
        </div>
        <div className={styles.aboutSection}>
          <h2 className={styles.title}>Our Journey.</h2>
          <p className={styles.subtitle}>
            At The Living Loft, we help you create unique spaces with timeless,
            functional designs. Whether upgrading your kitchen or adding a
            statement piece, we make it simple and enjoyable.
          </p>
        </div>
        <div className={styles.aboutSection}>
          <h2 className={styles.title}>Why Choose Us?</h2>
          <p className={styles.subtitle}>
            Every product in our collection is carefully curated to ensure it
            meets our high standards for quality, style, and sustainability.
          </p>
          <div className={styles.innerSection}>
            {cards.map((card, index) => {
              return (
                <div className={styles.innerCard} key={index}>
                  <img src={card.image} />
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.aboutSection}>
          <h2 id={styles.connectTitle}>
            Let’s Create Something Beautiful Together
          </h2>
          <p id={styles.connectSubtitle}>
            Have questions or need help styling your space? Our team is here to
            assist you every step of the way.
          </p>
          <div className={styles.btns}>
            <Link to="/contact">
              <button className={`${styles["btn"]} ${styles["btn-primary"]}`}>
                Contact Us
              </button>
            </Link>
            <Link to="/store">
              <button className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
                Shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
