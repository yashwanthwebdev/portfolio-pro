import React, { useRef, useEffect } from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
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
  const introRef = useRef(null);
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
      <div
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
        <div>
          <Stack
            direction="column"
            gap={{
              xs: 8,
              lg: 10,
            }}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div




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
            </div>

            <div
              className={style.introParaContainer}


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
            </div>

          </Stack>
        </div>
        <div ref={introRef}> </div>
      </div>
    </Stack>
  );
}

export default Intro;
