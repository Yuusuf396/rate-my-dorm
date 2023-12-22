import { useEffect, useState } from "react";
import { hostels } from "../data/hostels";
import { Link, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import Modal from "../components/modal";

import icon from "../assets/hostel-icon.jpg";
// import { hostelReviews } from "../data/hostelDataReviews";
// import hostelImg from '../assets/hostel-img-2.jpg'
import "./[schoolId].css";
import Footer from "../components/footer";

const HostelDescription = () => {
  const [hostel, setHostel] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  const { schoolId } = useParams();

  const findHostel = () => {
    setHostel(hostels.find((hostel) => hostel.id === Number(schoolId)));
  };
  // let url='/dorm/${schoolId}'
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
          <ul className="hostel-info-list">
            <li className="hostel-info-item">
              <div>
                <img src={icon} alt="" className="hostel-icon" />
              </div>
              <Link
                className="hostel-info-text"
                to={`/dorm/${schoolId}/pyramidhostel`}>
                <p>Pyramid Hostel</p>
                <span>{hostel?.reviews} Reviews</span>
              </Link>
            </li>
            <hr />
          </ul>
        </div>
        <div className="school-about">
          <h4 className="school-header"> {hostel?.name}</h4>
          <p className="school-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
            repellat eligendi libero soluta suscipit, laudantium nulla porro
            consequuntur nemo incidunt fugiat cupiditate tenetur molestias,
            provident labore blanditiis ex debitis sunt pariatur quo id beatae
            quisquam. Cumque, at. Adipisci, quis.
          </p>
        </div>
      </div>

      {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
      <Footer />
    </div>
  );
};

export default HostelDescription;
