import React from "react";
import Profile from "./profile/Profile";
import profileDetails from './profileDetails.json';

export const handleName = () => {
  alert(`Your name is ${profileDetails[0].fullname}`)
}

const App = () => {
  return (
    <div>
      <Profile src='/sam passport.jpeg' fullName={profileDetails[0].fullName}profession={profileDetails[0].profession}bio={profileDetails[0].Bio}></Profile>
    </div>
  )
}
export default App;

