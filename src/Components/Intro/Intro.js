import React, { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import notepad_1 from "../../Images/portfolio/notepad_1.jpg";
import plants_1 from "../../Images/portfolio/plants_1.jpg";
import abstract_mobile from "../../Images/portfolio/abstract_mobile.jpg";
import style from "./Intro.module.css";

function Intro(props) {
  // const theme = "light";
  const mainControls = useAnimation();
  const introRef = useRef(null);
  const isInView = useInView(introRef, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <Stack
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        backgroundSize: "cover",
      }}
      sx={{
        backgroundImage: {
          xs: `url(${abstract_mobile})`,
          md: `url(${plants_1})`,
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
          width: "100%",
          color:
            props.theme === "light"
              ? // ? "rgb(67, 61, 61)"
                "rgb(255, 255, 230)"
              : "rgba(0, 0, 0,0.5)",
          backgroundColor:
            props.theme === "light" ? "rgba(0,0,0,0.8)" : "white",
          width: "100%",
          placeSelf: "center",
          padding: "1ch",
        }}
      >
        INTRO
      </Typography>
      <motion.div
        initial={{
          opacity: 0,
          // x: -200,
          // y: 200,
          fontSize: "0.5rem",
        }}
        variants={{
          hidden: {
            opacity: 0,
            // x: -200,
            // y: 200,
            fontSize: "0.5rem",
          },
          visible: {
            opacity: 1,
            // x: 100,
            // y: 250,
            fontSize: "2rem",
          },
        }}
        animate={mainControls}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          placeSelf: "center",
          justifyContent: "center",
          height: "100%",
        }}
        sx={{
          width: {
            xs: "70%",
            lg: "50%",
          },
        }}
      >
        <Stack
          style={{
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <Typography
            sx={{
              color: props.theme == "light" ? "black" : "white",
              fontFamily:
                props.theme == "light"
                  ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                  : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              lineHeight: "3ch",
              fontFamily: "monospace",
              fontSize: "1.3rem",
              margin: "auto",
              textAlign: "center",
            }}
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            Hey, I am Yashwanth. I have professional experience in web
            development.
          </Typography>
        </Stack>
        <div ref={introRef}> </div>
      </motion.div>
    </Stack>
  );
}

export default Intro;
