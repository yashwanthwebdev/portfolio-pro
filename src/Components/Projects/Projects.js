import React, { useRef, useEffect } from "react";
import style from "./Projects.module.css";
import veganFoodBackgroundImage from "../../Images/engin-akyurt-GnkZMT5rtx4-unsplash.jpg";
import footballStatsBackgroundImage from "../../Images/sari-ibrahim-lk0T8KLxfqs-unsplash.jpg";
import veganActivismSimulatorBackgroundImage from "../../Images/claudio-schwarz-FoVrVBxEefU-unsplash.jpg";
import todoBackgroundImage from "../../Images/todo.png";
import imageChatBot from "../../Images/veganism_chat_bot_logo.jpg";
import { useOutletContext, Link, useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import pineapple from "../../Images/portfolio/pineapple.jpg";
import plants_2 from "../../Images/portfolio/plants_2.jpg";

// import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion, useInView, useAnimation } from "framer-motion";

function Projects(props) {
  // const [theme] = useOutletContext();
  const projectsRef = useRef(null);
  const isInView = useInView(projectsRef, { once: false });
  const mainControls = useAnimation();
  const projectContainerBackgroundColor = "rgba(0,0,0,0.7)";

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <Stack
      // ref={projectsRef}
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        // background:
        //   props.theme == "light"
        //     ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
        //     : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
        background: props.theme == "light" ? "white" : "black",
        // backgroundImage: `url(${pineapple})`,
        backgroundImage: `url(${plants_2})`,
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
          // backgroundColor: props.theme === "light" ? "white" : "#8c999a",
          // borderRadius: "0ch 0ch 50% 50%",
          // width: "min-content",
          color:
            props.theme === "light"
              ? // ? "rgb(67, 61, 61)"
                "rgb(255, 255, 230)"
              : "rgba(0, 0, 0,0.5)",
          backgroundColor:
            props.theme === "light" ? "rgba(0,0,0,0.8)" : "white",
          // borderRadius: "0ch 0ch 50% 50%",
          width: "100%",
          placeSelf: "center",
          padding: "1ch",
        }}
      >
        PROJECTS
      </Typography>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial={{ opacity: 0, x: -200 }}
        animate={mainControls}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          placeContent: "center",
          placeItems: "center",
          height: "100%",
          marginBottom: "10ch",
        }}
      >
        <Grid
          container
          // style={{ width: "100%", margin: "auto" }}
          // spacing={3}
          rowSpacing={4}
          columnSpacing={10}
          style={{
            marginTop: "0ch",
            height: "100%",
            // padding: "20ch",
            // padding: { xs: "0ch", md: "20%" },
            // padding: "10%",
            justifyContent: "center",
            // marginBottom: "4ch",
            placeItems: "center",
            // backgroundColor: "yellow",
            // height: "maxContent",
          }}
        >
          <Grid
            className={style.projectContainer}
            item
            sm={12}
            md={12}
            lg={4}
            style={{
              maxHeight: "30ch",
            }}
          >
            {/* <a  href="https://football-stats-d45ae.web.app/"  */}
            <a
              href="https://veganism-chat-bot.vercel.app/"
              className={style.hrefContainer}
              style={{
                marginLeft: "2ch",
                marginRight: "2ch",
                backgroundColor: projectContainerBackgroundColor,
                // backgroundColor:
                //   props.theme == "light"
                //     ? "rgba(165, 42, 42, 0.5)"
                //     : "rgba(51, 153, 255,0.4)",
                boxShadow:
                  props.theme == "light"
                    ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                    : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
                borderRadius: "1ch",
              }}
              target="_blank"
            >
              <img src={imageChatBot} className={style.projectThumbnail} />
              <div className={style.projectDetailsContainer}>
                <span className={style.title}>Veganism chat bot</span>
                <span className={style.description}>
                  A bot whose only goal is to make you go vegan
                </span>
              </div>
            </a>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={4}
            className={style.projectContainer}
            style={{
              maxHeight: "30ch",
              // height: "30ch",
            }}
          >
            {/* <a  href="https://football-stats-d45ae.web.app/"  */}
            <a
              href="https://footballstats.vercel.app/"
              className={style.hrefContainer}
              style={{
                marginLeft: "2ch",
                marginRight: "2ch",
                backgroundColor: projectContainerBackgroundColor,
                // backgroundColor:
                //   props.theme == "light"
                //     ? "rgba(165, 42, 42, 0.5)"
                //     : "rgba(51, 153, 255,0.4)",
                boxShadow:
                  props.theme == "light"
                    ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                    : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
                borderRadius: "1ch",
              }}
              target="_blank"
            >
              <img
                src={footballStatsBackgroundImage}
                className={style.projectThumbnail}
              />
              <div className={style.projectDetailsContainer}>
                <span className={style.title}>Football stats</span>
                <span className={style.description}>
                  A place to get all the stats you want to know about any team
                  and player.
                </span>
              </div>
            </a>
          </Grid>

          <Grid
            item
            sm={12}
            md={12}
            lg={4}
            className={style.projectContainer}
            style={{
              maxHeight: "30ch",
              // height: "30ch",
            }}
          >
            <a
              // href="https://vegan-food-recipe.web.app/"
              href="https://veganmealprep.vercel.app/"
              className={style.hrefContainer}
              target="_blank"
              style={{
                marginLeft: "2ch",
                marginRight: "2ch",
                backgroundColor: projectContainerBackgroundColor,
                // backgroundColor:
                //   props.theme == "light"
                //     ? "rgba(165, 42, 42, 0.5)"
                //     : "rgba(51, 153, 255,0.4)",
                boxShadow:
                  props.theme == "light"
                    ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                    : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
                borderRadius: "1ch",
              }}
            >
              <img
                src={veganFoodBackgroundImage}
                className={style.projectThumbnail}
              />

              <div className={style.projectDetailsContainer}>
                <span className={style.title}>Vegan meal helper</span>
                <span className={style.description}>
                  A nice little meal suggester to help you cook delicious vegan
                  food using the ingredients you have.
                </span>
              </div>
            </a>
          </Grid>

          <Grid
            item
            sm={12}
            md={12}
            lg={4}
            className={style.projectContainer}
            style={{
              maxHeight: "30ch",
            }}
          >
            <a
              href="https://vegan-activism-simulator.web.app/"
              className={style.hrefContainer}
              target="_blank"
              style={{
                marginLeft: "2ch",
                marginRight: "2ch",
                backgroundColor: projectContainerBackgroundColor,
                // backgroundColor:
                //   props.theme == "light"
                //     ? "rgba(165, 42, 42, 0.5)"
                //     : "rgba(51, 153, 255,0.4)",
                boxShadow:
                  props.theme == "light"
                    ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                    : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
                borderRadius: "1ch",
              }}
            >
              <img
                src={veganActivismSimulatorBackgroundImage}
                className={style.projectThumbnail}
              />

              <div className={style.projectDetailsContainer}>
                <span className={style.title}>Vegan activism simulator</span>
                <span className={style.description}>
                  A mini-game that will test your activism skills!{" "}
                </span>
              </div>
            </a>
          </Grid>

          <Grid
            ref={projectsRef}
            item
            sm={12}
            md={12}
            lg={4}
            className={style.projectContainer}
            style={{
              maxHeight: "30ch",
            }}
          >
            <a
              href="https://todo-nine-beryl.vercel.app/"
              className={style.hrefContainer}
              target="_blank"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "30ch",
                marginLeft: "2ch",
                marginRight: "2ch",
                backgroundColor: projectContainerBackgroundColor,
                // backgroundColor:
                //   props.theme == "light"
                //     ? "rgba(165, 42, 42, 0.5)"
                //     : "rgba(51, 153, 255,0.4)",
                boxShadow:
                  props.theme == "light"
                    ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                    : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
                borderRadius: "1ch",
              }}
            >
              <img
                src={todoBackgroundImage}
                className={style.projectThumbnail}
              />

              <div className={style.projectDetailsContainer}>
                <span className={style.title}>To-do app</span>
                <span className={style.description}>
                  A simple app that helps to manage your to-dos!
                </span>
              </div>
            </a>
          </Grid>
        </Grid>
        {/* <div ref={projectsRef}></div> */}
      </motion.div>
    </Stack>
  );
}

export default Projects;
