import React from "react";
import "./courses.css";
export default function Courses() {
  const courses = [
    {
      name: "Flutter Development Bootcamp 2022",
      text:
        " Learning Flutter from scratch to build fast, beautiful, native quality, iOS and Android apps using just one code base. By the end of the course I will be a fully fledged Flutter developer by mastering things such as stateful and stateless widgets, declarative programming, Lisp views, animations, streams, futures and much much more."
    },
    {
      name: "Build an e-commerce store with .Net, React & Redux",
      text:
        "Learning to build a e-commerce store using .Net, React and Redux. .Net will be used for backend of my application that includes the database and the Web API. React and Redux to build the front end of our application, and that makes this course a full stack development course."
    },
    {
      name: "The MERN Fullstack Guide",
      text:
        "I will build full stack web application with MongoDB, Express, React.js and Node.js which show how each of these pieces work together.  The web application which will also include important topics like file upload and user authentication, so that by the end of tis course, I will be able to build my own full stack web application with these technologies."
    }
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {courses.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonail-card d-flex flex-column">
                  <span className="description">{value.text} </span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
