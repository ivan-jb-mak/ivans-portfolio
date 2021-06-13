import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  //replace the {} inside of the themeprovider to get accodian style
  // <Accordion onChange={({ expanded }) => console.log(expanded)}>
  //         {props.sections.map((section) => {
  //           return (
  //             <Panel
  //               className="accord-panel"
  //               title={section["title"]}
  //               key={section["title"]}
  //             >
  //               {section["experiences"].map((experience) => {
  //                 return (
  //                   <ExperienceCard experience={experience} theme={theme} />
  //                 );
  //               })}
  //             </Panel>
  //           );
  //         })}
  //       </Accordion>

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        {props.sections.map((section) => {
          return (
            <div
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
            >
              {section["experiences"].map((experience) => {
                return <ExperienceCard experience={experience} theme={theme} />;
              })}
            </div>
          );
        })}
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
