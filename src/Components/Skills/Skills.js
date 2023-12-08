import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import style from "./Skills.module.css";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import plantsAndLeaves from "../../Images/portfolio/pensAndLeaves.jpg";
import plants_3 from "../../Images/portfolio/plants_3.jpg";
import intro_mobile_1 from "../../Images/portfolio/intro_mobile_2.jpg";

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
        // background: props.theme == "light" ? "white" : "black",
        // backgroundImage: `url(${plants_3})`,
        backgroundSize: "cover",
      }}
      sx={{
        backgroundImage: {
          // xs: `url(${abstract_mobile})`,
          // xs: `url(${hanging_flowers_mobile})`,
          xs: `url(${intro_mobile_1})`,
          md: `url(${plants_3})`,
        },
      }}
    >
      <Typography
        variant="h5"
        style={{
          fontFamily: "monospace",
          width: "100%",
          textAlign: "center",
          fontWeight: "800",
          color:
            props.theme === "light"
              ? // ? "rgb(67, 61, 61)"
                "rgb(255, 255, 230)"
              : "rgba(0, 0, 0,0.5)",
          backgroundColor:
            props.theme === "light" ? "rgba(0,0,0,0.8)" : "white",
          width: "100%",
          placeSelf: "center",
        }}
      >
        MY SKILLS
      </Typography>
      <motion.div
        className={style.motionContainer}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1],
            borderRadius: ["2%", "2%"],
          },
        }}
        animate={mainControls}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        // className={style.skillsMainContainer}
        sx={{}}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // outline: "2px red solid",
          margin: "auto",
          padding: "1ch",
          // background: "#DAD299",
          // background: "-webkit-linear-gradient(to right, #B0DAB9, #DAD299)",
          // background: "linear-gradient(to right, #B0DAB9, #DAD299)",

          // background: "#73C8A9" /* fallback for old browsers */,
          // background:
          //   "-webkit-linear-gradient(to right, #373B44, #73C8A9)" /* Chrome 10-25, Safari 5.1-6 */,
          // background:
          //   "linear-gradient(to right, #373B44, #73C8A9)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

          boxShadow:
            props.theme == "light"
              ? `0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)`
              : `0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)`,
        }}
      >
        <Stack
          direction="row"
          className={style.skillsContainer}
          sx={{
            justifyContent: "space-between",
            columnGap: {
              lg: "5ch",
            },
            rowGap: {
              lg: "5ch",
            },
          }}
        >
          {skills.map((element, index) => (
            <Typography
              sx={{ fontWeight: "800" }}
              key={element}
              className={`
                ${style.eachSkill}
                {props.theme === "dark" ? style.skillDark : style.skillLight} `}
              style={{ textAlign: "center" }}
            >
              {element}
            </Typography>
          ))}
        </Stack>
        <div ref={skillsRef}></div>
      </motion.div>
    </Stack>
  );
}

export default Skills;
