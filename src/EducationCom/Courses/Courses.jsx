import React from "react";
import "./Courses.css";
export const Courses = () => {
  return (
    <div className="coursesComponent">
      <h3>OUR COURSES</h3>
      <h1>Explore Our Popular Online Courses</h1>
      <div className="coursesComponentInner">
        <div className="coursesComponent1">
          <div className="divBoxContent1">
            <div className="divBoxContent1Image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/courses/c1.png"
                alt=""
                width={"100%"}
              />
            </div>
            <div className="divBoxContent1Content">
              <h1>Introducing to Software Engineering</h1>
              <div className="divBoxContent1ContentInner">
                <div className="image">
                  <img
                    src="https://educational-website-reactjs.netlify.app/images/back.webp"
                    alt=""
                    width={"80%"}
                  />
                </div>
                <h3>by John Smith</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="coursesComponent1">
          <div className="divBoxContent1">
            <div className="divBoxContent1Image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/courses/c2.png"
                alt=""
                width={"100%"}
              />
            </div>
            <div className="divBoxContent1Content">
              <h1>Enhancing Adobe Photoshop skills</h1>
              <div className="divBoxContent1ContentInner">
                <div className="image">
                  <img
                    src="https://educational-website-reactjs.netlify.app/images/back.webp"
                    alt=""
                    width={"80%"}
                  />
                </div>
                <h3>by Ram Gurung</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="coursesComponent1">
          <div className="divBoxContent1">
            <div className="divBoxContent1Image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/courses/c3.png"
                alt=""
                width={"100%"}
              />
            </div>
            <div className="divBoxContent1Content">
              <h1>HTML, CSS, and Javascript for Web Developers</h1>
              <div className="divBoxContent1ContentInner">
                <div className="image">
                  <img
                    src="https://educational-website-reactjs.netlify.app/images/back.webp"
                    alt=""
                    width={"80%"}
                  />
                </div>
                <h3>by Saroj Nepal</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
