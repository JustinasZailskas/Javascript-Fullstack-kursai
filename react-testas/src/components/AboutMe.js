export default function AboutMe({ firstname, lastname, profession, aboutYou }) {
  return (
    <>
      <h1>
        {firstname} {lastname}
      </h1>
      <h2>{profession}</h2>
      <p>{aboutYou}</p>
    </>
  );
}
