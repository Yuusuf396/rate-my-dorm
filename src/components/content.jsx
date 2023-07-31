import { useState } from "react";
import { hostels } from "../data/hostelData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import schoolImg from "../assets/school.avif";
import "./content.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

// import school from '../assets/pexels-scott-webb-305823.jpg'

function Content() {
  const [search, setSearch] = useState("");
  const searchBar = (e) => {
    console.log(e.target.value);

    // console.log(search)
    setSearch(e.target.value);
  };
  const schools = hostels.map((hostel) => (
    <Link
      key={hostel.id}
      className="hostel"
      to={`/dorm/${hostel.id}`}
      style={{ opacity: 1 }}>
      <div className="hostel-image">
        <img src={schoolImg} />
      </div>
      <div className="hostel-name">
        <p>{hostel.name}</p>
      </div>
      <div className="hostel-reviews-location">
        <p>{hostel.reviews} Reviews</p>
        <p>{hostel.location}</p>
      </div>
    </Link>

    //  hostels.forEach(hostel => {

    // }
  ));
  return (
    <>
      <div className="image-container">
        {/* <img className='school-image' src={school} alt='school' loading='lazy'/> */}
        <div className="searchbar">
          <input
            type="text"
            value={search}
            name="search"
            placeholder="Search Your Dorm"
            onChange={searchBar}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <div className="hostel-container">{schools}</div>
      <Footer />
    </>
  );
}

export default Content;
