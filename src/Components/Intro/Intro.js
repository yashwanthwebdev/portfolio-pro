import React, { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import notepad_1 from "../../Images/portfolio/notepad_1.jpg";
import abstract_mobile from "../../Images/portfolio/abstract_mobile.jpg";
import hanging_flowers_mobile from "../../Images/portfolio/hanging_flowers_mobile.jpg";
import intro_mobile_1 from "../../Images/portfolio/intro_mobile_1.jpg";
// import plants_1 from "../../Images/portfolio/plants_1.jpg";
import plants_1 from "../../Images/portfolio/intro_mobile_6.jpg";
import style from "./Intro.module.css";
import Box from "@mui/material/Box";

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
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundSize: "cover",
        justifyContent: "center",
      }}
      sx={{
        backgroundImage: {
          // xs: `url(${abstract_mobile})`,
          // xs: `url(${hanging_flowers_mobile})`,
          xs: `url(${intro_mobile_1})`,
          md: `url(${plants_1})`,
        },
      }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          placeSelf: "center",
          justifyContent: "center",
        }}
        sx={{
          width: {
            xs: "70%",
            lg: "50%",
          },
        }}
      >
        <motion.div>
          <Stack
            direction="column"
            gap={{
              xs: 8,
              lg: 10,
            }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
                color: "white",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  scale: [0.5, 1],

                  opacity: [0, 1],
                  color: "black",
                },
              }}
              animate={mainControls}
              transition={{
                // delay: 0.5,
                duration: 1.5,
                ease: "anticipate",
              }}
              // transition={{ delay: 0.75, duration: 1, ease: "easeInOut" }}
              style={{
                placeContent: "center",
                placeItems: "center",
                marginBottom: "auto",
              }}
            >
              <Typography
                className={style.pageTitle}
                variant="h5"
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  marginTop: "auto",
                  width: "100%",
                  placeSelf: "center",
                  // fontFamily: "'Charmonman', cursive",
                  // fontFamily: "'Bebas Neue', sans-serif",
                  fontFamily: "'Oswald', sans-serif",
                }}
                sx={{
                  marginBottom: {
                    xs: "auto",
                    lg: "inherit",
                  },
                  letterSpacing: {
                    xs: "0.6ch",
                    lg: "1.5ch",
                  },
                  wordSpacing: {
                    xs: "1ch",
                    lg: "2.5ch",
                  },
                }}
              >
                WELCOME TO MY PORTFOLIO!
              </Typography>
            </motion.div>

            <motion.div
              className={style.introParaContainer}
              initial={{
                opacity: 0,
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: [0, 1],
                },
              }}
              animate={mainControls}
              transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
              style={{
                // marginTop: "auto",
                placeContent: "center",
                placeItems: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                className={style.introParagraphs}
                sx={{
                  fontFamily:
                    props.theme == "light"
                      ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                      : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                  lineHeight: "3ch",
                  fontFamily: "monospace",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0ch 1ch 0ch 1ch",
                  fontSize: {
                    xs: "1rem",
                    lg: "1.4rem",
                  },
                }}
                style={{}}
              >
                {/* Hey, I am Yashwanth. I have professional experience in web
                development... */}
                Hello, there! I'm Yashwanth,{" "}
                <Box sx={{ fontWeight: 800 }} component="span">
                  a passionate website developer
                </Box>{" "}
                dedicated to transforming ideas into engaging online
                experiences.
              </Typography>
            </motion.div>
            <motion.div
              className={style.introParaContainer}
              initial={{
                opacity: 0,
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: [0, 1],
                },
              }}
              animate={mainControls}
              transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
              style={{
                placeContent: "center",
                placeItems: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                className={style.introParagraphs}
                sx={{
                  fontFamily:
                    props.theme == "light"
                      ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                      : "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                  lineHeight: "3ch",
                  fontFamily: "monospace",
                  margin: "auto",
                  textAlign: "center",
                  padding: "0ch 1ch 0ch 1ch",
                  fontSize: {
                    xs: "1rem",
                    lg: "1.4rem",
                  },
                  // wordSpacing: "1.5ch",
                }}
                style={{}}
              >
                With a{" "}
                <Box sx={{ fontWeight: 800 }} component="span" f>
                  keen eye for design
                </Box>{" "}
                and a knack for coding, I specialize in creating{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  user-friendly, responsive
                </Box>{" "}
                websites that seamlessly blend{" "}
                <Box component="span" sx={{ fontWeight: 800 }}>
                  functionality and aesthetics.
                </Box>
              </Typography>
            </motion.div>
          </Stack>
        </motion.div>
        <div ref={introRef}> </div>
      </motion.div>
    </Stack>
  );
}

export default Intro;
