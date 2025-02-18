import { Link } from "react-router-dom";
import styles from "./home.module.css";
import speakers from "../../assets/speakers.jpg";
import kitchen from "../../assets/kitchen.jpg";
import furniture from "../../assets/furniture.jpg";
import homeDecor from "../../assets/homeDecor.jpg";
import jessica from "../../assets/jessica.jpg";
import john from "../../assets/john.jpg";
import sarah from "../../assets/sarah.jpg";
import Category from "../../components/Category/Category";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const categories = [
    {
      name: "Kitchen Accessories",
      image: kitchen,
      link: "/store",
    },
    {
      name: "Furniture",
      image: furniture,
      link: "/store",
    },
    {
      name: "Home Decor",
      image: homeDecor,
      link: "/store",
    },
  ];

  const testimonials = [
    {
      text: "The quality of the furniture I bought is fantastic! It really transformed my living room.",
      name: "Jessica R.",
      image: jessica,
      rating: 5,
    },
    {
      text: "Absolutely love the kitchen accessories. They are stylish and so practical!",
      name: "John D.",
      image: john,
      rating: 4,
    },
    {
      text: "Great value for money! The home decor items I ordered look amazing in my apartment.",
      name: "Sarah L.",
      image: sarah,
      rating: 5,
    },
  ];

  return (
    <div className="main--cont">
      <section className={styles["hero-content"]}>
        <img
          className={styles["hero-img"]}
          src={speakers}
          alt="image of home decor"
        />
        <h1>Elevate Your Living Spaces</h1>
        <p>
          Discover timeless home decor, stylish furniture, and functional
          kitchen accessories.
        </p>
        <div className={styles["hero-buttons"]}>
          <Link to="store">
            <button className={`${styles["btn"]} ${styles["btn-primary"]}`}>
              Shop Now
            </button>
          </Link>
          <Link to="about">
            <button className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
              About us
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.categories}>
        <h2>Shop by Category</h2>
        <div className={styles["category-grid"]}>
          {categories.map((category, index) => (
            <Category
              name={category.name}
              link={category.link}
              image={category.image}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Customers Are Saying</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((person, index) => (
            <Testimonial
              name={person.name}
              image={person.image}
              rating={person.rating}
              text={person.text}
              key={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
