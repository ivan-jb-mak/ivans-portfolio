import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px"></Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return (
            <div>
              <DegreeCard degree={degree} theme={theme} />
              <br />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Educations;
