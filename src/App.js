import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Programming from "./Programming";
import Projects from "./Projects";
import "./styles.css";
import Courses from "./Courses";
import Work from "./Work";
import Typed from "typed.js";
export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkshitory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Computer Science Graduate",
        "1st Class Honours",
        "Willingness To Learn",
        "Enthusiastic Developer"
      ],
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true
      // cursorChar: "|"
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    seteducation(false);
    setworkshitory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Aine McGivern{" "}
          </span>
          <div
            className={
              !opennav
                ? "bars mx-2 transition-all "
                : " transition-all open bars mx-2 "
            }
            style={{ background: opennav && "#02203c" }}
            onClick={() => setopennav(!opennav)}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">Aine McGivern</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home{" "}
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            CV
          </a>
          <a
            href="#Courses"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Courses
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Aine McGivern</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Enthusiastic Dev 😎 */}
              </span>
              <span className="Im-text-subheading">
                Currently looking for a Job within the Technology Industry.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Get In Touch
                </a>
                <a
                  href="https://res.cloudinary.com/aineport/raw/upload/v1643214074/AineCV_snecit.docx"
                  className="btn-resume-me"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/aineport/image/upload/v1643239160/headshot_ke9nqu.jpg"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            {" "}
            About me
          </span>
          <span className="why-text-sub">Why Choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets7.lottiefiles.com/packages/lf20_v1yudlrx.json"
                background="transparent"
                speed="1"
                // style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                A Computer Sceince Graduate from Liverpool John Moores
                University. I am constantly striving to improve my knowledge and
                learn new and UpToDate programming languages that were not
                taught on my course but often recommended by recruiters. I have
                enrolled onto several courses with Udemy to further enhance this
                aspect of my knowledge base.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">CV</span>
        <span className="why-text-sub">Key Details</span>
        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex  px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-briefcase"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-code"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-tasks"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education{" "}
              </span>
              <span
                className={
                  workhistory === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkshitory, true);
                }}
              >
                Work{" "}
              </span>
              <span
                className={
                  programmings === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming{" "}
              </span>
              <span
                className={
                  projects === false
                    ? " resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects{" "}
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="testmonails-part my-5" id="testimonials">
        <div className="testimonials-inner-part d-flex flex-column">
          <span className="about-me-text">Courses Enrolled</span>
          <span className="why-text-sub mb-5">
            Courses I am currently taking with Udemy{" "}
          </span>
          <Courses />
        </div>
      </div>

      <div className="contact-me-part " id="contactme">
        <div className="relative-bg"> </div>

        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Lets Keep in Touch</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
