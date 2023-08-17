import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  const onOpen = () => {
    // eslint-disable-next-line react/prop-types
    props.onOpen();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
        to='/'
        >
          RateMyDorm
        </Link>
      </div>
      <button className="sign-in" onClick={onOpen}>
        Sign In
      </button>
      
    </nav>
  );
}

export default Navbar;
