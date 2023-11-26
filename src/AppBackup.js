import style from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <div
      className={style.container}
      // style={{background:theme=="light" ? "radial-gradient(circle,  rgb(128, 0, 96), rgb(255, 153, 230) )" :"radial-gradient(circle, rgb(0, 26, 26),rgb(0, 77, 77))"}}>
      style={{
        background:
          theme == "light"
            ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
            : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
      }}
    >
      <div
        className={style.navBar}
        style={{ background: `${navBarBackgroundColor}`, marginBottom: "5ch" }}
      >
        <Link
          to="/home"
          style={{
            color: `${navBarColor}`,
            letterSpacing: "0.2ch",
            fontWeight: "700",
          }}
          className={style.link}
        >
          Home
        </Link>
        <Link
          to="/projects"
          style={{
            color: `${navBarColor}`,
            letterSpacing: "0.2ch",
            fontWeight: "700",
          }}
          className={style.link}
        >
          Projects{" "}
        </Link>
        <Link
          to="/contact"
          style={{
            color: `${navBarColor}`,
            letterSpacing: "0.2ch",
            fontWeight: "700",
          }}
          className={style.link}
        >
          Contact{" "}
        </Link>

        <div className={style.themeContainer}>
          <button
            onClick={() => {
              setTheme("light");
              setBackgroundColor("rgba(123, 32, 146, 0.8)");
              setNavBarBackgroundColor(
                // "linear-gradient(to right, rgba(250, 0, 0, 0.6),white, rgba(250, 0, 0, 0.6))"
                // "linear-gradient(to right, rgba(250, 0, 0, 0.6),#DE3163, rgba(250, 0, 0, 0.6))"
                // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(250,0,0,0.1) , rgba(250, 0, 0, 0.6))"
                // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(255,255,255,0.4) , rgba(250, 0, 0, 0.6))"
                "linear-gradient(to right, rgba(250, 0, 0, 0.9), rgba(255,0,0,0.3) , rgba(250, 0, 0, 0.9))"
              );
              setNavBarColor("rgba(89, 1, 89, 0.87)");
            }}
            className={style.buttonLight}
          >
            light
          </button>

          <button
            onClick={() => {
              setTheme("dark");
              setBackgroundColor("rgba(12, 12, 12, 1)");
              setNavBarBackgroundColor(
                "linear-gradient(to right, rgba(4, 160, 250, 0.6), black, rgba(4, 160, 250, 0.6)"
              );
              setNavBarColor("rgba(255, 255, 255,0.87)");
            }}
            className={style.buttonDark}
          >
            dark
          </button>
        </div>
      </div>

      {/* <Outlet context={[theme]} /> */}
    </div>
  );
}

export default App;
