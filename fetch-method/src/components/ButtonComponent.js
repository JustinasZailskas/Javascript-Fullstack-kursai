const ButtonComponent = ({ type, action, title, disable }) => {
  return (
    <button type={type} onClick={action} disabled={disable}>
      {title}
    </button>
  );
};
export default ButtonComponent;
