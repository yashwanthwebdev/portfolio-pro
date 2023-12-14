import style from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import abstract_mobile from "./Images/portfolio/abstract_mobile.jpg";
import hanging_flowers_mobile from "./Images/portfolio/hanging_flowers_mobile.jpg";
import intro_mobile_1 from "./Images/portfolio/intro_mobile_1.jpg";
import plants_1 from "./Images/portfolio/plants_1.jpg";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(123, 32, 146, 0.8)"
  );
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState(
    // "linear-gradient(to right, rgba(250, 0, 0, 0.6),white, rgba(250, 0, 0, 0.6))"
    // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(255,255,255,0.4) , rgba(250, 0, 0, 0.6))"
    "linear-gradient(to right, rgba(250, 0, 0, 0.9), rgba(255,0,0,0.3) , rgba(250, 0, 0, 0.9))"
  );
  const [navBarColor, setNavBarColor] = useState("rgba(89, 1, 89, 0.87)");
  const [theme, setTheme] = useState("light");

  var colorIndex = 0;
  useEffect(() => {
    console.log("new theme is ", backgroundColor);
  }, [backgroundColor]);

  return (
    <Stack
      className={style.container}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundSize: "cover",
        // outline: "2px red solid",
      }}
      sx={{
        backgroundImage: {
          // xs: `url(${abstract_mobile})`,
          // xs: `url(${hanging_flowers_mobile})`,
          xs: `url(${intro_mobile_1})`,
          md: `url(${plants_1})`,
        },
      }}
      // style={{background:theme=="light" ? "radial-gradient(circle,  rgb(128, 0, 96), rgb(255, 153, 230) )" :"radial-gradient(circle, rgb(0, 26, 26),rgb(0, 77, 77))"}}>
    >
      <Stack
        direction="row"
        justifyContent="end"
        style={{
          position: "fixed",
          justifyContent: "end",
          placeSelf: "end",
        }}
      >
        {/* <Stack
          direction="column"
          style={{
            placeSelf: "end",
            justifyContent: "end",
          }}
        >
          <Button
            onClick={() => {
              console.log("light");
              setTheme("light");
              setBackgroundColor("rgba(123, 32, 146, 0.8)");
              // setNavBarBackgroundColor(
                  //   "linear-gradient(to right, rgba(250, 0, 0, 0.9), rgba(255,0,0,0.3) , rgba(250, 0, 0, 0.9))"
              // );
              // setNavBarColor("rgba(89, 1, 89, 0.87)");
            }}
            size="small"
            style={{
              padding: "0ch",
              cursor: "pointer",
              backgroundColor: "rgb(245, 244, 244)",
              color: "rgb(7, 7, 7)",
              width: "min-content",
              height: "min-content",
              borderRadius: "0ch 0ch 0ch 0ch",
              // outline: "none",
              cursor: "pointer",
            }}
            className={style.buttonLight}
          >
            <LightModeIcon></LightModeIcon>
            
          </Button>

          <Button
            className={style.buttonDark}
            onClick={() => {
              setTheme("dark");
              setBackgroundColor("rgba(12, 12, 12, 1)");
              setNavBarBackgroundColor(
                "linear-gradient(to right, rgba(4, 160, 250, 0.6), black, rgba(4, 160, 250, 0.6)"
              );
              setNavBarColor("rgba(255, 255, 255,0.87)");
            }}
            size="small"
            style={{
              padding: "0ch",
              cursor: "pointer",
              backgroundColor: "black",
              color: "white",
               // paddingLeft: "0.2ch",
              // paddingRight: "0.2ch",
              width: "min-content",
              height: "min-content",
              borderRadius: "0.5ch",
              // outline: "none",
              cursor: "pointer",
            }}
          >
            <DarkModeIcon size="small" style={{ padding: "0ch" }} />
             
          </Button>
        </Stack> */}
      </Stack>
      <Home theme={theme} />
    </Stack>
  );
}

export default App;
