import React, { useState } from 'react'
import Modal from 'react-modal';
import './PopUpModal.css';
import { useSelector } from "react-redux";
import { UserDataState } from './UserReducer';
import { registerUserResponse, loginUserResponse, IResponseFromJWT, ReduxStoreReducers, strToAsteriks } from './HelperFunctions';

export interface IDispalyModal {
  displayModal: Boolean;
  closeModal: () => void
}

const modalStyle = {
  content: {
    width: "311px",
    height: "325px",
    margin: "auto",
    position: "absolute",
    top: 0, left: 0, bottom: 0, right: 0,
    backgroundColor: "#222325",
    border: "none",
    borderRadius: "11px",
    overflow: "hidden",
    padding: "0px",
    paddingTop: "3px"
  },
  overlay: {
    width: "auto",
    height: "100%",
    background: "rgb(0, 0, 0, 0.85)",
    border: "none",
  },
}

Modal.setAppElement(document.getElementById('root'));
let PopUpModal = ({displayModal, closeModal}: IDispalyModal): JSX.Element => {
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [registerIsActive, setRegisterIsActive] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const UserTextChange = (evt) => setUsernameText(evt.target.value)
  const PassTextChange = (evt) => setPasswordText(evt.target.value);

  const Register = async () => {
    try {
      await registerUserResponse(usernameText, passwordText)
      LogIn();
    } catch (err) {
      console.log(err.response.data);
      setErrorMessage(err.response.data);
    }
  }

  const LogIn = async () => {
    try {
      const userData: IResponseFromJWT = await loginUserResponse(usernameText, passwordText);
      localStorage.setItem("auth-token", userData.token);
      setUsernameText("");
      setPasswordText("");
      window.location.href = "/";
    } catch (err) {
      console.log(err.response.data);
      setErrorMessage(err.response.data);
    }
  }

  const displayNavButton = () => {
    if (!registerIsActive)
      return <div className="FlexJusitfy">
      <button id="SignInOptBtnHighlight">Sign In</button>
      <button id="RegisterOptBtn" onClick={ActivateRegister}>Register</button>
      </div>
    else
      return <div className="FlexJusitfy">
      <button id="SignInOptBtn" onClick={UnactivateRegister}>Sign In</button>
      <button id="RegisterOptBtnHighlight">Register</button>
      </div>
  }

  const ActivateRegister = () => {
    setRegisterIsActive(true);
  }

  const UnactivateRegister = () => {
    setRegisterIsActive(false);
  }

  const displayButton = () => {
    if (registerIsActive)
      return <button id="RegisterBtn" onClick={Register}>Register</button>
    else 
      return <button id="LoginBtn" onClick={LogIn}>Log In</button>
  }

  const displayErrorMessage = () => {
    if (errorMessage.length > 0)
      return <button id="ErrorBtn">{errorMessage}</button>
    else
      return <></>
  }

  return <div className="PopUpModal">
    <Modal style={modalStyle} closeTimeoutMS={400} onRequestClose={closeModal} isOpen={displayModal} >
      {displayNavButton()}
      <div className="FlexAlignInfo">
        <label id="UsernameLabel">Username</label>
        <input type="text" onChange={UserTextChange} placeholder="" value={usernameText}/>
        <label>Password</label>
        <input type="text" onChange={PassTextChange} placeholder="" value={strToAsteriks(passwordText)}/>
        {displayButton()}
        {displayErrorMessage()}
      </div>
    </Modal>
  </div>
}

export default PopUpModal;