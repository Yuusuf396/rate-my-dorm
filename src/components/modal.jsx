/* eslint-disable react/prop-types */
// import React from 'react'

function Modal(props) {
  return (
    <>
      <div className="modal-container">
        <div className={`modal active`}>
          <span className="close" onClick={props.onClose}>
            &times;
          </span>
          <div className="sign-in-google">
            <p>Sign in with Google</p>
            <button>
              Sign in with Google
              {/* <img width="48" height="48" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/> */}
            </button>
          </div>
          <div className="line">
            <hr className="horizontal-line hr1" />
            <p className="or">OR</p>
            <hr className="horizontal-line hr1" />
          </div>
        </div>
      </div>  
    </>
  )
}

export default Modal