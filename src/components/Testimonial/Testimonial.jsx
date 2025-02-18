import styles from "../../routes/Home/home.module.css";
const Testimonial = ({ name, rating, image, text }) => {
  return (
    <div className={styles.testimonialCard}>
      <img src={image} />
      <h3>{name}</h3>
      <p>{text}</p>
      {<span>{"★".repeat(rating)}</span>}
    </div>
  );
};

export default Testimonial;
