const ButtonComponent = ({ type, action, title }) => {
  return (
    <button type={type} onClick={action}>
      {title}
    </button>
  );
};
export default ButtonComponent;
