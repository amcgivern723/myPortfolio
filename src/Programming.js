import React from "react";
import "./programming.css";
export default function Programming() {
  const value = [
    {
      text: "HTML",
      percentage: 100
    },
    {
      text: "CSS",
      percentage: 100
    },
    {
      text: "PHP",
      percentage: 90
    },
    {
      text: "Java",
      percentage: 85
    },
    {
      text: "JavaScript",
      percentage: 85
    },
    {
      text: "Python",
      percentage: 75
    },
    {
      text: "MySQL",
      percentage: 85
    },
    {
      text: "React.js",
      percentage: 60
    },
    {
      text: "Flutter",
      percentage: 55
    },
    {
      text: "MERN Stack",
      percentage: 50
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                  <span className="language">{value.text} </span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
