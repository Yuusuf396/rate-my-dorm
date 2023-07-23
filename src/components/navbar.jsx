 
import "./navbar.css";


function Navbar(props) {

  const onOpen = () => {
    // eslint-disable-next-line react/prop-types
    props.onOpen()
  }
 
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">RateMyDorm</a>
      </div>
      <button className="sign-in" onClick={onOpen}>
        Sign In
      </button>

     
    </nav>
  );
}

export default Navbar;
