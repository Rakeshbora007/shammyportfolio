import React from "react";
import "./qualification.css";

const Qualification = () => {
  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <section className="qualification section">
      <h2 className="section__title">Experience</h2>
      {/* <span className="section__subtitle">My personel journey</span> */}

      <div className="qualification__container container">
        {/* <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div> */}
        <div className="qualification__section">
          {/* <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__tittle">Bharti Institute Of Pharmaceutical Sciences</h3>
                <span className="qualification__subtitle">
                  Shriganganagar - Rajasthan
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__tittle">Wordpress</h3>
                <span className="qualification__subtitle">
                  Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 -present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__tittle">Web Design</h3>
                <span className="qualification__subtitle">
                Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 -present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__tittle">Web Development</h3>
                <span className="qualification__subtitle">
                Online Resources
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 -present
                </div>
              </div>
            </div>
          </div> */}
          <div className="section__subtitle ressection">
            Wokerd with Fanatic Coaders family form 5+ years
            <h3 className="mt">Responsibiltes i learn with my Team</h3>
            <li>Work with development teams and product managers to ideate software solutions  </li> 
            <li>Design client-side and server-side architecture</li> 
            <li>Build the front-end of applications through appealing visual design</li>  
            <li>Develop and manage well-functioning databases and applications</li> 
            <li>Write effective APIs</li> 
            <li>Test software to ensure responsiveness and efficiency</li> 
            <li>Troubleshoot, debug and upgrade software</li> 
            <li>Create security and data protection settings</li> 
            <li>Build features and applications with a mobile responsive design</li> 
            <li>Write technical documentation</li> 
            <li>Work with data scientists and analysts to improve software</li> 
          </div>
          {/* <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__tittle"> Web Designer</h3>
                <span className="qualification__subtitle">
                Freelance
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021-2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__tittle">Wordpress</h3>
                <span className="qualification__subtitle">
                  Fanatic Coders
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 -present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__tittle">Web Developer</h3>
                <span className="qualification__subtitle">
                  Fanatic Coders
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022-present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Qualification;
