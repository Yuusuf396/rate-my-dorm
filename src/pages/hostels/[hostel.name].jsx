import { useState } from "react";
// import {useHistory} 
import { hostelReviews } from "../../data/hostelDataReviews";
import back from "../../assets/arrow-left-solid.svg";
import Navbar from "../../components/navbar";
import Modal from "../../components/modal";

import "./[hostel.name].css";
import { useNavigate } from "react-router-dom";
function HostelName() {
  const [openModal, setOpenModal] = useState(false);
  const navigate =useNavigate();
 
  return (
    <>
      <Navbar onOpen={() => setOpenModal(true)} />
      <div className="hostel-header-container">
        {/* <img src={header} alt="" /> */}
        <p>{hostelReviews[0].hostels}</p>
      </div>
      <div  className="back-button">
        <img onClick={()=>navigate(-1)} src={back} alt="" />
        <div className="writing-container">
          <button><p>upload picture</p></button>
          <button className="activate-writing-btn"><p>Write something</p></button>
        </div>
      </div >


      {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
    </>
  );
}

export default HostelName;
