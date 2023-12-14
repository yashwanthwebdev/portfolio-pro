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
    <Stack style={{ width: "100%", outline: "2px red solid" }}>
      <Intro theme={props.theme} />
      <Projects theme={props.theme} />
      <Skills theme={props.theme} />
      <Contact theme={props.theme} />
    </Stack>
  );
}

export default Home;
