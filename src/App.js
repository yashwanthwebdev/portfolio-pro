import style from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
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
      // style={{background:theme=="light" ? "radial-gradient(circle,  rgb(128, 0, 96), rgb(255, 153, 230) )" :"radial-gradient(circle, rgb(0, 26, 26),rgb(0, 77, 77))"}}>
      style={{
        background:
          theme == "light"
            ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
            : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
      }}
    >
      <Stack
        direction="row"
        justifyContent="end"
        style={{
          zIndex: "999",
          position: "fixed",
          justifyContent: "end",
          placeSelf: "end",
        }}
      >
        <Button
          onClick={() => {
            console.log("light");
            setTheme("light");
            setBackgroundColor("rgba(123, 32, 146, 0.8)");
            // setNavBarBackgroundColor(
            //   // "linear-gradient(to right, rgba(250, 0, 0, 0.6),white, rgba(250, 0, 0, 0.6))"
            //   // "linear-gradient(to right, rgba(250, 0, 0, 0.6),#DE3163, rgba(250, 0, 0, 0.6))"
            //   // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(250,0,0,0.1) , rgba(250, 0, 0, 0.6))"
            //   // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(255,255,255,0.4) , rgba(250, 0, 0, 0.6))"
            //   "linear-gradient(to right, rgba(250, 0, 0, 0.9), rgba(255,0,0,0.3) , rgba(250, 0, 0, 0.9))"
            // );
            // setNavBarColor("rgba(89, 1, 89, 0.87)");
          }}
          size="small"
          style={{
            cursor: "pointer",
            backgroundColor: "rgb(245, 244, 244)",
            color: "rgb(7, 7, 7)",
            margin: "0",
            paddingLeft: "0.4ch",
            paddingRight: "0.4ch",
            width: "min-content",
            height: "min-content",
            borderRadius: "0.5ch",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="caption"
            style={{
              fontWeight: "800",
              letterSpacing: "0.1ch",
              fontFamily: "monospace",
            }}
          >
            light mode
          </Typography>
        </Button>

        <Button
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
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            margin: "0",
            paddingLeft: "0.4ch",
            paddingRight: "0.4ch",
            width: "min-content",
            height: "min-content",
            borderRadius: "0.5ch",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="caption"
            style={{
              fontWeight: "800",
              letterSpacing: "0.1ch",
              fontFamily: "monospace",
            }}
          >
            dark mode
          </Typography>
        </Button>
      </Stack>
      <Home theme={theme} />
    </Stack>
  );
}

export default App;
