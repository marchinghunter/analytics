import React from "react";
import "../../Styles/insight.css";
import {IoMdArrowDropup,IoMdArrowDropdown} from 'react-icons/io'
import {HiOutlineLightBulb} from'react-icons/hi'

const Insight = () => {
  return (
    <>
      <div className="icontainer">
        <div className="isubcontainer">
          <div className="iheadingcontainer">
            <h1 className="iheading">ZooTools insights</h1>
            <h4 className="isubheading">
              Making Analytics simple and actionable
            </h4>
          </div>
          <div className="idatamaincontainer">
            <div className="idatacontainer1">
              <h4 className="summary">Summary</h4>
              <h6 className="idata">
                <span className="bolddata"><IoMdArrowDropdown color='white' style={{backgroundColor:'#ff634c', borderRadius:'7px',marginRight:'8px',padding:'5px'}}/>Signups are slowing down.</span> -5%
                new than last week
              </h6>
              <h6 className="idata">
                <span className="bolddata"><IoMdArrowDropup color='white' style={{backgroundColor:'#4dff54', borderRadius:'7px',marginRight:'8px',padding:'5px'}}/>80% </span> of your signup were invited
                by other members.
              </h6>
              <h6 className="idata">
                <span className="bolddata"><HiOutlineLightBulb color='black' style={{backgroundColor:'#fee34d', borderRadius:'7px',marginRight:'8px',padding:'5px'}}/>80% </span> of your signup were invited
                by a friend
              </h6>
              <h6 className="idata">
                <span className="bolddata"><HiOutlineLightBulb color='black' style={{backgroundColor:'#fee34d', borderRadius:'7px',marginRight:'8px',padding:'5px'}}/>80% </span> of your signup were invited
                by a friend
              </h6>
            </div>
            <div className="idatacontainer2">
              <h4 className="summary">Recommendation</h4>
              <h6 className="idata">
                <span className="bolddata">
                  Make sure to promote and share your form
                </span>
              </h6>
              <h6 className="idata">
                <span className="bolddata">
                  Congrats! this is huge. Keep giving reward for your users
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
