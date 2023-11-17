import React from "react";
import style from "./Projects.module.css";
import veganFoodBackgroundImage from "../../Images/engin-akyurt-GnkZMT5rtx4-unsplash.jpg";
import footballStatsBackgroundImage from "../../Images/sari-ibrahim-lk0T8KLxfqs-unsplash.jpg";
import veganActivismSimulatorBackgroundImage from "../../Images/claudio-schwarz-FoVrVBxEefU-unsplash.jpg";
import todoBackgroundImage from "../../Images/todo.png";
import imageChatBot from "../../Images/veganism_chat_bot_logo.jpg";
import { useOutletContext, Link, useNavigate } from "react-router-dom";
// import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";

function Projects() {
  const [theme] = useOutletContext();
  const navigate = useNavigate();
  return (
    // <div className={style.container}>
    <Grid
      container
      // style={{ width: "100%", margin: "auto" }}
      // spacing={3}
      rowSpacing={10}
      columnSpacing={10}
      style={{
        marginTop: "0ch",
        justifyContent: "center",
        marginBottom: "4ch",
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
            backgroundColor:
              theme == "light"
                ? "rgba(165, 42, 42, 0.5)"
                : "rgba(51, 153, 255,0.4)",
            boxShadow:
              theme == "light"
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
            backgroundColor:
              theme == "light"
                ? "rgba(165, 42, 42, 0.5)"
                : "rgba(51, 153, 255,0.4)",
            boxShadow:
              theme == "light"
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
              A place to get all the stats you want to know about any team and
              player.
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
            backgroundColor:
              theme == "light"
                ? "rgba(165, 42, 42, 0.5)"
                : "rgba(51, 153, 255,0.4)",
            boxShadow:
              theme == "light"
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
              A nice little meal suggester to help you cook delicious vegan food
              using the ingredients you have.
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
            backgroundColor:
              theme == "light"
                ? "rgba(165, 42, 42, 0.5)"
                : "rgba(51, 153, 255,0.4)",
            boxShadow:
              theme == "light"
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
            backgroundColor:
              theme == "light"
                ? "rgba(165, 42, 42, 0.5)"
                : "rgba(51, 153, 255,0.4)",
            boxShadow:
              theme == "light"
                ? "0.5ch 1.5ch 2ch rgba(0, 0, 0, 0.4)"
                : "0.5ch 1.5ch 2ch rgb(38, 38, 38,0.8)",
            borderRadius: "1ch",
          }}
        >
          <img src={todoBackgroundImage} className={style.projectThumbnail} />

          <div className={style.projectDetailsContainer}>
            <span className={style.title}>Todo app</span>
            <span className={style.description}>
              A simple app that helps to manage your todos!
            </span>
          </div>
        </a>
      </Grid>
    </Grid>
  );
}

export default Projects;
