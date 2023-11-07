import React from "react";
import style from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
function Home() {
  const [theme] = useOutletContext();
  const skills = [
    "React",
    "Javascript",
    "Typescript",
    "CSS",
    "Tailwind",
    "MaterialUI",
    "Jest/RTL",
    "HTML",
    "Redux",
    "GitHub",
    "Firebase",
    "Python",
    "SQL",
  ];

  return (
    <div className={style.container}>
      <p
        className={style.intro}
        style={{
          color: theme == "light" ? "black" : "white",
          fontFamily:
            theme == "light"
              ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
              : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          lineHeight: "3ch",
        }}
      >
        Hey, I am Yashwanth with 4 years of experience in frontend web
        development and 1 year of experience in backend development.
      </p>

      <p
        className={style.intro}
        style={{
          color: theme == "light" ? "black" : "white",
          fontFamily:
            theme == "light"
              ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
              : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          lineHeight: "3ch",
        }}
      >
        I am interested in projects that are creative or/and are helpful in
        helping our planet!
      </p>

      <div
        className={style.skillsMainContainer}
        style={{
          background:
            theme == "light"
              ? "linear-gradient(153deg, rgba(226,135,22,1) 0%, rgba(190,212,38,1) 16%, rgba(40,204,40,1) 32%, rgba(6,185,150,1) 48%, rgba(81,130,189,1) 64%, rgba(162,94,163,1) 81%, rgba(173,29,51,1) 100%)"
              : "linear-gradient(236deg, rgba(1,1,1,1) 0%, rgba(54,49,49,1) 16%, rgba(98,99,98,1) 32%, rgba(122,135,133,1) 48%, rgba(105,104,104,1) 64%, rgba(55,51,55,1) 81%, rgba(10,10,10,1) 100%)",
          boxShadow:
            theme == "light"
              ? `0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)`
              : `0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)`,
        }}
      >
        <span
          style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            letterSpacing: "0.1ch",
            color: theme == "light" ? "rgb(67, 61, 61)" : "rgb(255, 255, 230)",
          }}
        >
          {" "}
          Skills{" "}
        </span>
        <div className={style.skillsContainer}>
          {skills.map((element, index) => (
            <span
              className={theme === "dark" ? style.skillLight : style.skillDark}
            >
              {element}
            </span>
          ))}
          {/* <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            React
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Javascript
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Typescript
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            CSS
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Tailwind
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            MaterialUI
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Jest/RTL
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            HTML
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Redux
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            GitHub
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Firebase
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            Python
          </span>
          <span
            className={theme == "dark" ? style.skillLight : style.skillDark}
          >
            SQL
          </span> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
