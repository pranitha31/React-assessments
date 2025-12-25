import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/todos">Todos</Link>
    </nav>
  );
}

export default Header;
