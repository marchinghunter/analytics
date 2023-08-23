import React, { useMemo, useState } from "react";
import userData from "../../../Data/signedup.json";
import "../../Styles/otherinsight.css";
import Barcomponent from "./Barcomponent";

const Otherinsight = () => {
  const [selectedLocation, setSelectedLocation] = useState("Country");
  const [selectedBehaviour, setSelectedBehaviour] = useState("Browser");
  const [selectedTraffic, setSelectedTraffic] = useState("Source");
  const selectLocation = () => {
    if (selectedLocation === "Country") {
      setSelectedLocation("City");
    } else {
      setSelectedLocation("Country");
    }
  };
  const selectBehaviour = () => {
    if (selectedBehaviour === "Browser") {
      setSelectedBehaviour("Decides");
    } else {
      setSelectedBehaviour("Browser");
    }
  };
  const selectTraffic = () => {
    if (selectedTraffic === "Source") {
      setSelectedTraffic("City");
    } else {
      setSelectedTraffic("Source");
    }
  };
  let filterDataCountry = useMemo(() => {
    return [
      {
        id: "USA",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "United States") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Germany",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "Germany") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Netherlands",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "Netherlands") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "India",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "India") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Japan",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "Japan") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Other",
        value: userData.data.reduce((total, item) => {
          if (item["country"] == "Other") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
    ];
  }, [userData]);
  let filterDataSocial = useMemo(() => {
    return [
      {
        id: "Google",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "Google") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Twitter",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "Twitter") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Facebook",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "Facebook") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "LinkedIn",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "LinkedIn") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "YouTube",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "YouTube") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
      {
        id: "Others",
        value: userData.data.reduce((total, item) => {
          if (item["traffic"] == "Others") {
            return total + parseInt(item.totalUsers);
          }
          return total;
        }, 0),
      },
    ];
  }, [userData]);

  return (
    <>
      <div className="oicontainer">
        <div className="userleaderboard otherinsightdatacontainer">
          <h1 className="oititle">User Leaderboard</h1>
          <table className="table">
            <tr>
              <th>Email</th>
              <th>Friends invited</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>paula.sauraze@con...es</td>
              <td>6,500</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>laura.kenet..3@yahoo.com</td>
              <td>2,300</td>
              <td>Monaco</td>
            </tr>
            <tr>
              <td>aaron.michael@arg.org</td>
              <td>1,200</td>
              <td>Prague</td>
            </tr>
            <tr>
              <td>jeremy.runner@aol.org</td>
              <td>900</td>
              <td>China</td>
            </tr>
          </table>
          <button className="leaderboardbtn leaderuniquebtn">
            See Leaderboard
          </button>
        </div>
        <div className="traffic otherinsightdatacontainer">
          <h1 className="oititle">Traffic</h1>
          <Barcomponent Data={filterDataSocial} />
          <button className="leaderboardbtn trafficuniquebtn">
            See Traffic Source
          </button>
        </div>
        <div className="signuplocation otherinsightdatacontainer">
          <h1 className="oititle">Signup Location</h1>
          <Barcomponent Data={filterDataCountry} />
          <button className="leaderboardbtn trafficuniquebtn">
            See All Countries
          </button>
        </div>
        <div className="behaviour otherinsightdatacontainer">
          <h1 className="oititle">Behaviour</h1>
          <Barcomponent Data={filterDataCountry} />
          <button className="leaderboardbtn trafficuniquebtn">
            See All Countries
          </button>
        </div>
      </div>
    </>
  );
};

export default Otherinsight;
