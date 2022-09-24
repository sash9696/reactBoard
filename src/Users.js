import "./Users.css";

export default function Users({ name, email }) {
  return (
    <div className="user-container">
      <h1>{name}</h1>
      <h4>Email: {email}</h4>
    </div>
  );
}
