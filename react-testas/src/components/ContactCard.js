export default function ContactCard({ firstname, phoneNumber, email }) {
  return (
    <>
      <p>Vardas: {firstname}</p>
      <p>Telefono numeris: {phoneNumber}</p>
      <p>El. pastas: {email}</p>
    </>
  );
}
