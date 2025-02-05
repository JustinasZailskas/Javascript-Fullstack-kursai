import { Routes, Route } from "react-router-dom";
import styles from "./styles/MainPageStyles.module.css";
import MainPage from "./pages/MainPage";
import FirstExercise from "./pages/FirstExercise";
import SecondExercise from "./pages/SecondExercise";
import ThirdExercise from "./pages/ThirdExercise";
import FourthExercise from "./pages/FourthExercise";
import FifthExercise from "./pages/FifthExercise";
import CommentsComponent from "./pages/CommentsComponent";

function App() {
  return (
    <>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">Pradinis langas</a>
          </li>
          <li className={styles.navItem}>
            <a href="/first-exercise">1 uzduotis</a>
          </li>
          <li className={styles.navItem}>
            <a href="/second-exercise">2 uzduotis</a>
          </li>
          <li className={styles.navItem}>
            <a href="/third-exercise">3 uzduotis</a>
          </li>
          <li className={styles.navItem}>
            <a href="/fourth-exercise">4 uzduotis</a>
          </li>
          <li className={styles.navItem}>
            <a href="/fifth-exercise">5 uzduotis</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/first-exercise" element={<FirstExercise />} />
        <Route path="/second-exercise" element={<SecondExercise />} />
        <Route path="/third-exercise" element={<ThirdExercise />}>
          <Route path="fourth-exercise" element={<FourthExercise />} />
          <Route path="fifth-exercise" element={<FifthExercise />} />
        </Route>
        <Route path="/fourth-exercise" element={<FourthExercise />} />
        <Route path="/fifth-exercise" element={<FifthExercise />} />
        <Route path="/post-comments/:postId" element={<CommentsComponent />} />
      </Routes>
    </>
  );
}

export default App;
