import React from "react";
import "./Education.css";
import { Navbar } from "../EducationCom/Navbar/Navbar";
import { HeroEducation } from "../EducationCom/Hero/HeroEducation";
// import { Content } from "../EducationCom/Content/Content";
import { EduContent } from "../EducationCom/Content/EduContent";
import { Courses } from "../EducationCom/Courses/Courses";
import { Testominal } from "../EducationCom/Testominal/Testominal";
import { Footer } from "../Footer/Footer";
export const Education = () => {
  return (
    <div className="educationComponent">
      <Navbar />
      <HeroEducation />
      <EduContent />
      <Courses />
      <Testominal />
      <Footer />
    </div>
  );
};
