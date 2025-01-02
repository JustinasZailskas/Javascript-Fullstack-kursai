export default function Hobbies({ hobbiesList }) {
  return (
    <>
      <div>
        <ul>
          {hobbiesList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
