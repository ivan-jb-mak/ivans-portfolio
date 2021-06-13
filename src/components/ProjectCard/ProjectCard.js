import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const livelinkGithub = (
    <div>
      <a {...styles} className="button" target="_blank" href={repo.websiteUrl}>
        Live Link
      </a>{" "}
      <a {...styles} className="button" target="_blank" href={repo.githubUrl}>
        Github
      </a>
    </div>
  );

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
          <br />
          <div>{<div>{repo.github ? livelinkGithub : null}</div>}</div>
        </div>
      </Fade>
    </div>
  );
}
