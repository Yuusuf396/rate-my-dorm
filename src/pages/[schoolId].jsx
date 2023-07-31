import { useEffect, useState } from "react";
import { hostels } from "../data/hostelData";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
// import hostelImg from '../assets/hostel-img-2.jpg'
import "./[schoolId].css";

const HostelDescription = () => {
  const [hostel, setHostel] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const { schoolId } = useParams();

  const findHostel = () => {
    setHostel(hostels.find((hostel) => hostel.id === Number(schoolId)));
  };

  useEffect(() => {
    findHostel();
  }, []);

  if (!hostel) {
    <p>Loading....</p>;
  }
  const searchBar = (e) => {
    console.log(e.target.value);

    // console.log(search)
    setSearch(e.target.value);
  };
  return (
    <div className="hostel-details-container">
      <Navbar onOpen={() => setOpenModal(true)} />
      <div className="img-container">
        {/* <img src={hostelImg} alt="img"/> */}
        <h2>{hostel?.name} Dorms</h2>
        <h2>{hostel?.location}</h2>
      </div>

      <div className="main-container">
        <h2 className="school-name">{hostel?.name}</h2>
        {/* <p>{hostel?.reviews}</p> */}
        <h3>Browse hostels Reviews</h3>
        <p>
          Listing {hostel?.HostelNumbers} {hostel?.name} dorms. Click on a dorm
          to write a review
        </p>
        <input
          className="hostel-search"
          type="text"
          value={search}
          name="search"
          placeholder="Search Your Dorm"
          onChange={searchBar}
        />
      </div>

      <div className="school-description">
        <div className="hostel-info">
          <ul>
            <li>                
            </li>
          </ul>
        </div>
        <div className="school-about">

        </div>
      </div>

      {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
    </div>
  );
};

export default HostelDescription;
