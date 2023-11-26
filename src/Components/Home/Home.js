import React from "react";
import style from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

function Home(props) {
  // const [theme] = useOutletContext();

  // const theme = "light";

  return (
    // <div className={style.container}>
    <div>
      <Intro theme={props.theme} />
      <Skills theme={props.theme} />
      <Projects theme={props.theme} />
      <Contact theme={props.theme} />
      {/* <p
        className={style.intro}
        style={{
          color: theme == "light" ? "black" : "white",
          fontFamily:
            theme == "light"
              ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
              : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          lineHeight: "3ch",
          fontFamily: "monospace",
          minHeight: "100vh",
          marginTop: "50%",
        }}
      >
        Hey, I am Yashwanth. I have professional experience in web development.
      </p> */}
      {/* <p
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
      </p> */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1],
          // rotate: [0, 360],
          borderRadius: ["50%", "50%"],
          padding: ["20ch", "10ch"],
        }}
        transition={{ duration: 1 }}
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
          My skills{" "}
        </span>
        <div className={style.skillsContainer}>
          {skills.map((element, index) => (
            <span
              className={theme === "dark" ? style.skillLight : style.skillDark}
              style={{ textAlign: "center" }}
            >
              {element}
            </span>
          ))}
        </div>
      </motion.div> */}
    </div>
  );
}

export default Home;
