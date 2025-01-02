export default function Greetings() {
  const hour = new Date().getHours();
  if (hour > 5 && hour <= 10) {
    return <p>Good morning</p>;
  } else if (hour > 10 && hour <= 18) {
    return <p>Good afternoon</p>;
  } else if (hour > 18 && hour <= 22) {
    return <p>Good evening</p>;
  }
  return <p>Good night</p>;
}
