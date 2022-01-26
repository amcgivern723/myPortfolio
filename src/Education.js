import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Liverpool John Moores University{" "}
            </span>
            <span className="university-degree">BSc Honours </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2017-2021 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              St Catherines College, Armagh{" "}
            </span>
            <span className="university-degree">
              A Levels: Business Studies (B) Sociology (B) Applied Science (D){" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2014-2016 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              St Catherines College, Armagh{" "}
            </span>
            <span className="university-degree">
              GCSE's: 10 GCSE grade B and above inc English, Maths and Science{" "}
            </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2012-2014 </span>
          </div>
        </div>
      </div>
    </>
  );
}
