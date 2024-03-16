import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h2>Navbar</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/projects">Projects</Link>
    </>
  );
};

export default Navbar;
