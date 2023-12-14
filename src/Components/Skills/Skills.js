import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import style from "./Skills.module.css";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import plantsAndLeaves from "../../Images/portfolio/pensAndLeaves.jpg";
// import plants_3 from "../../Images/portfolio/plants_3.jpg";
import plants_3 from "../../Images/portfolio/intro_mobile_7.jpg";
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
      direction="column"
      style={{
        display: "flex",

        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-around",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        // background: props.theme == "light" ? "white" : "black",
        // backgroundImage: `url(${plants_3})`,
        backgroundSize: "cover",
      }}
      sx={{
        // outline: "2px red solid",
        backgroundImage: {
          // xs: `url(${abstract_mobile})`,
          // xs: `url(${hanging_flowers_mobile})`,
          xs: `url(${intro_mobile_1})`,
          md: `url(${plants_3})`,
        },
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
          color: "white",
        }}
        variants={{
          hidden: { opacity: 0, color: "white" },
          visible: {
            scale: [0.5, 1],
            opacity: [0, 1],
            color: "black",
          },
        }}
        animate={mainControls}
        // transition={{ delay: 0.5, duration: 1, ease: "anticipate" }}
        transition={{
          // delay: 0.5,
          duration: 1.5,
          ease: "anticipate",
        }}
        style={{
          color: "black",
          // fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "800",
          placeSelf: "center",
          marginTop: "auto",
          // fontFamily: "'Charmonman', cursive",
          fontFamily: "'Oswald', sans-serif",
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "800",
            placeSelf: "center",
            marginTop: "auto",
            fontFamily: "'Oswald', sans-serif",
          }}
          sx={{
            letterSpacing: {
              xs: "0.6ch",
              lg: "1.5ch",
            },
            lineHeight: "3ch",
            paddingInline: {
              xs: "3ch",
              lg: "0ch",
            },
          }}
        >
          THESE ARE MY SKILLS
        </Typography>
      </motion.div>
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
        transition={{
          delay: 1,
          duration: 2,
          ease: "easeInOut",
        }}
        // className={style.skillsMainContainer}
        sx={{}}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // outline: "2px red solid",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
          marginTop: "auto",
          padding: "1ch",
          minHeight: "40%",
          // backgroundColor: "black",
          color: "beige",

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
            columnGap: {
              lg: "10ch",
            },
            rowGap: {
              lg: "5ch",
            },
          }}
        >
          {skills.map((element, index) => (
            <Typography
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
              }}
              // sx={{ fontWeight: "800" }}
              key={element}
              className={`
                ${style.eachSkill}
                {props.theme === "dark" ? style.skillDark : style.skillLight} `}
              // style={{ textAlign: "center" }}
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
