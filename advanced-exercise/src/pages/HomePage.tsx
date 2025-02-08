import styles from "../styles/HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePageBlock}>
      <p>Informacija</p>
      <a href="/login">Prisijungti</a>
    </div>
  );
}

export default HomePage;
