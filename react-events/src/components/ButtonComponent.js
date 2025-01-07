export const ButtonComponent = ({ title, callbackFunction }) => {
  return <button onClick={callbackFunction}>{title}</button>;
};
