import React, { useState } from 'react';
import PopUpModal from './PopUpModal';
import './NavBar.css'
import { useSelector } from 'react-redux';
import { ReduxStoreReducers } from './HelperFunctions';
import { UserDataState } from './UserReducer';

let NavBar = () => {
  let userInfo = useSelector<ReduxStoreReducers, UserDataState["userData"]>(({UserReducer}) => UserReducer.userData)
  let userData = userInfo[0];
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  const openModal = () => { setIsModalOpen(true) }
  const closeModal = () => { setIsModalOpen(false) }

  const LogOut = async() => {
    localStorage.setItem("auth-token", "");
    window.location.href = "/"
  }

  const displayButton = () => {
    if (userData)
      return <button id="LogOut" onClick={LogOut}><span>{userData.user.username}</span></button> 
    else
      return <button id="SignIn" onClick={openModal}>Sign In</button>
  }

  return <div className="NavBar">
    <div className="FlexAlign">
      <a id="CurrentPage" href="http://under-120.bestbudgetphones.technology">Phones under $120</a>
      <a href="http://under-100.bestbudgetphones.technology">Phones under $100</a>
      <a href="http://under-50.bestbudgetphones.technology">Phones under $50</a>
      {displayButton()}
      <PopUpModal displayModal={isModalOpen} closeModal={closeModal} />
    </div>
  </div>
}

export default NavBar;

/*

Whenever Creating/Adding/Changing something new to Website 
use Adobe XD or something other similar program (To easily make changes and visualize the changes faster)\

Whenever you have a program go out of the room and solve the problem mentally

Switch every 15 min break

10 Mins:
Looking at Internship Requirements
3 Min Break: turn off all the screens or walk around outside the room
Homework
3 Min Break: turn off all the screens or walk around outside the room

Internship goal:
  - Get a list of easy React Internships


Internships! # The whole point of internships are to learn from them from mentoring, if they are not doing that leave the internship
  - https://angel.co/company/drawpi/jobs/890780-intern-react-js-developer 11-50
  - https://angel.co/company/stealthdpc/jobs/647534-internship-front-end-development-unpaid 11-50
  - https://angel.co/company/influencer-house/jobs/800920-full-stack-software-engineer 11-50 MAYBE, its fullstack 1+ years
  - https://angel.co/company/sweater-planet/jobs/1004610-frontend-developer
  - https://angel.co/company/command-bar-2/jobs/995258-software-engineering-intern

Prefix + Suffix
  - 7 Points => 8 Passives
  - 8 Points => 9 Passives
  - 8 Points => 10 Passives

Prefix + Suffix + Prefix
  - 5 Points => 8 Passives
  - 6 Points => 9 Passives
  - 7 Points => 10 Passives

Budget Suggestion
  - Go for 1 GOD Prefix and 2 useless with 8 Passives
  - You waste 5 points and using two of those 
    points you can get 3.6 DPS medium cluster node

*/