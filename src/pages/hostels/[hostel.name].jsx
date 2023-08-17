import { useState } from "react";
import { hostelReviews } from "../../data/hostelDataReviews";
import header from "../../assets/school.avif";
import Navbar from "../../components/navbar";
import Modal from "../../components/modal";

import "./[hostel.name].css";
function HostelName() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar  onOpen={() => setOpenModal(true)}/>
      <div className="hostel-header-container">
        <img src={header} alt="" />
      </div>
      <div className="">
        <p>{hostelReviews}</p>
      </div>
      {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
    </>
  );
}

export default HostelName;
