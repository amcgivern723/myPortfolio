import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">ASD Matters</span>
            <span className="university-degree">Python, Flask, HTML, CSS </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2020-2021 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"> Flappy Bird</span>
            <span className="university-degree">JavaScript, HTML and CSS </span>
          </div>{" "}
          <div>
            <span className="year-passedout">2022</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Aineflix</span>
            <span className="university-degree">PHP, CSS, MySQL, HTML</span>
          </div>{" "}
          <div>
            <span className="year-passedout">Dec 2021 - Jan 2022 </span>
          </div>
        </div>
      </div>
    </>
  );
}
