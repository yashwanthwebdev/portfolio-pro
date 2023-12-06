import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import style from "./Skills.module.css";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import plantsAndLeaves from "../../Images/portfolio/pensAndLeaves.jpg";
import plants_3 from "../../Images/portfolio/plants_3.jpg";

function Skills(props) {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  const skills = [
    "React",
    "Redux",
    "RTK query",
    "Styled components",
    "SASS",
    "Jenkins",
    "Docker",
    "Jest/RTL",
    "Javascript",
    "Typescript",
    "MaterialUI",
    "CSS",
    "Tailwind",
    "HTML",
    "GitHub",
    "Firebase",
    "Python",
    "SQL",
  ];

  return (
    <Stack
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        // backgroundColor: "yellow",
        // background:
        //   props.theme == "light"
        //     ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
        //     : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
        background: props.theme == "light" ? "white" : "black",
        // backgroundImage: `url(${plantsAndLeaves})`,
        backgroundImage: `url(${plants_3})`,
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontFamily: "monospace",
          width: "100%",
          textAlign: "center",
          fontWeight: "800",

          // color:
          //   props.theme === "light"
          //     ? // ? "rgb(67, 61, 61)"
          //       "rgba(0, 0, 0,0.5)"
          //     : "rgb(255, 255, 230)",
          color:
            props.theme === "light"
              ? // ? "rgb(67, 61, 61)"
                "rgb(255, 255, 230)"
              : "rgba(0, 0, 0,0.5)",
          backgroundColor:
            props.theme === "light" ? "rgba(0,0,0,0.8)" : "white",
          // borderRadius: "0ch 0ch 50% 50%",
          width: "100%",
          // width: "min-content",
          placeSelf: "center",
          padding: "1ch",
        }}
      >
        SKILLS
      </Typography>
      <motion.div
        variants={{
          // hidden: { opacity: 0, x: "100%" },
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1],
            // rotate: [0, 360],
            // borderRadius: ["50%", "50%"],
            borderRadius: ["2%", "2%"],
            // padding: ["20ch", "10ch"],
            padding: ["2ch", "2ch"],
            x: [800, 320],
          },
        }}
        animate={mainControls}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        // className={style.skillsMainContainer}
        style={{
          margin: "auto",
          background: "#DAD299",
          background: "-webkit-linear-gradient(to right, #B0DAB9, #DAD299)",
          background: "linear-gradient(to right, #B0DAB9, #DAD299)",

          background: "#73C8A9" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #373B44, #73C8A9)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #373B44, #73C8A9)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

          boxShadow:
            props.theme == "light"
              ? `0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)`
              : `0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)`,
          width: "50%",
        }}
      >
        <Stack style={{ justifyContent: "center" }}>
          {/* <span
            style={{
              fontSize: "1.3rem",
              fontWeight: "700",
              letterSpacing: "0.1ch",
              color:
                props.theme !== "light"
                  ? // ? "rgb(67, 61, 61)"
                    "rgba(0, 0, 0,0.5)"
                  : "rgb(255, 255, 230)",
              textAlign: "center",
              marginBottom: "1.5ch",
            }}
          >
            {" "}
            My skills{" "}
          </span> */}
        </Stack>
        <div className={style.skillsContainer}>
          {skills.map((element, index) => (
            <span
              key={element}
              className={
                props.theme === "dark" ? style.skillDark : style.skillLight
              }
              style={{ textAlign: "center" }}
            >
              {element}
            </span>
          ))}
        </div>
        <div ref={skillsRef}></div>
      </motion.div>
    </Stack>
  );
}

export default Skills;
