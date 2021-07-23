import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import resumepdf from "../../assests/images/resume.pdf";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              {/* Un-comment below when applying again to see resume */}
              {/* <a
                {...styles}
                className="general-btn"
                target="_blank"
                href={resumepdf}
              >
                See my Resume
              </a> */}
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px"></Fade>
      </div>
    </div>
  );
}

export default Contact;
