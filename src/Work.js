import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              Liverpool John Moores University
            </span>
            <span className="year-passedout">Sep 2021- Sep 2022</span>
          </div>
        </div>

        <div className="d-flex flex-column">
          <span className="position">Faculty and Course Rep</span>
          <span className="description-position">
            <ul>
              <li>
                {" "}
                Volunteer at Faculty-level to represent views and opinions of
                students in that Faculty and work in partnership with the
                University to meaningfully shape the educational experience.
              </li>
              <li>
                {" "}
                As a Faculty Representative I work in consultation with Course
                Representatives and University staff to identify and discuss
                important issues; liaise with the Students’ Union throughout the
                year.
              </li>
            </ul>
          </span>
        </div>

        <div className="work-inside-new mx-2 my-4">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <span className="company-name">
                Liverpool John Moores University
              </span>
              <span className="year-passedout">Sep 2017- April 2018</span>
            </div>
          </div>

          <div className="d-flex flex-column">
            <span className="position">Girls In Technology</span>
            <span className="description-position">
              <ul>
                <li>
                  {" "}
                  Being part of the Girls in Technology Society has given me
                  valuable experience of working within a team of students with
                  different computing knowledge and expertise. We meet up once a
                  week for two hours where we learn a range of programming
                  language i.e. Java, HTML, CSS, JavaScript etc. Furthermore, we
                  designed a Website for our society.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
