function Season() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div>
      Dabartinis data ir laikas: {date} {time}
    </div>
  );
}

export default Season;
