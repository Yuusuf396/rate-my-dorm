import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Content from "./components/content";
import Modal from "./components/modal";
import Navbar from "./components/navbar";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar onOpen={() => setOpenModal(true)} />
      <Content />
      {openModal ? <Modal onClose={() => setOpenModal(false)} /> : null}
      {/* <img className='school-image' src={school} alt='school' /> */}
    </>
  );
}

export default App;
