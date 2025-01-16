import React from "react";
import styles from "./Forms/Form.module.css";

const ButtonComponent = ({ type, action, title }) => (
  <button type={type} onClick={action} className={styles.button}>
    {title}
  </button>
);

export default ButtonComponent;
