import styles from "./Modal.module.css";

function ModalComponent({ isOpen, children, duom }) {
  if (!isOpen) return null;
  console.log(duom);
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>Cia yra modal screen</p>
        {duom.map((element) => (
          <p key={element.id}>{element.name}</p>
        ))}
        {children}
      </div>
    </div>
  );
}

export default ModalComponent;
