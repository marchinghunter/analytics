import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import userData from "../../../Data/signedup.json";
import {LuUsers} from 'react-icons/lu'

const ParticipantsInsight = () => {
  // Slice the data to show only the first 30 entries
  const newUser = userData.data.slice(0, 30);

  return (
    <div className="chart">
      <div className="charttagcontainer">
      <h1 className="numbertag">100,000 <LuUsers size={35}/></h1>
      <h2 className="charttag">Participants</h2>
      </div>
      <div className='mainchart'>
      <ResponsiveBar
        data={newUser}
        keys={["totalUsers"]}
        tooltip={( datum) => {
          console.log(); // Log the datum object // Log the datum object
          return (
            <div className="custom-tooltip">
              <div><span className="totalusers">{datum.data.totalUsers}</span> Signups</div>
              <div className="tooltip-title">{datum.data.date}</div>
            </div>
          );
        }}
        indexBy="date"
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        colors={['#fed401']}
        padding={0.3}
        borderRadius={10}
        title="Total Users by Date"
        axisBottom={null}
        axisLeft={null}
        enableLabel={false}
        
      />
      </div>
    </div>
  );
};

export default ParticipantsInsight;
