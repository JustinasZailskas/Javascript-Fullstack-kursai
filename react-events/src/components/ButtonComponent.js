export const ButtonComponent = ({ disabled, title, callbackFunction }) => {
  return (
    <button disabled={disabled} onClick={callbackFunction}>
      {title}
    </button>
  );
};
