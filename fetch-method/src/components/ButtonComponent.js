const ButtonComponent = ({ type, action, title, disable, style }) => {
  return (
    <button type={type} onClick={action} disabled={disable} className={style}>
      {title}
    </button>
  );
};
export default ButtonComponent;
