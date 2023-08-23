import React, { useState } from "react";
import Participantsinsight from './Participantsinsight'
import "../../Styles/participants.css";

const Participants = () => {
  const [selectedTime, setSelectedTime] = useState(30);
  const select1H = () => {
    setSelectedTime(1)
  };
  const select24H = () => {
    setSelectedTime(24)
  };
  const select30D = () => {
    setSelectedTime(30)
  };
  const select60D = () => {
    setSelectedTime(60)
  };
  return (
    <>
      <div className="pcontainer">
        <div className="psubcontainer">
          <h1 className="heading">Summer referral competition</h1>
          <div className="timecontainer">
            <button
              className="btn 1h"
              style={{
                backgroundColor: selectedTime == 1 ? "#cfcfcf" : "#f0f0f0",
              }}
              onClick={select1H}
            >
              1h
            </button>
            <button
              className="btn 24h"
              style={{
                backgroundColor: selectedTime == 24 ? "#cfcfcf" : "#f0f0f0",
              }}
              onClick={select24H}
            >
              24h
            </button>
            <button
              className="btn 30d"
              style={{
                backgroundColor: selectedTime == 30 ? "#cfcfcf" : "#f0f0f0",
              }}
              onClick={select30D}
            >
              30d
            </button>
            <button
              className="btn 60d"
              style={{
                backgroundColor: selectedTime == 60 ? "#cfcfcf" : "#f0f0f0",
              }}
              onClick={select60D}
            >
              60d
            </button>
          </div>
        </div>
        <Participantsinsight/>
      </div>
    </>
  );
};

export default Participants;
