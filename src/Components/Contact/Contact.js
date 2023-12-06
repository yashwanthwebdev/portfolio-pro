import React, { useRef, useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import feather from "../../Images/portfolio/feather.jpg";
import rose from "../../Images/portfolio/rose_mobile.jpg";

function Contact(props) {
  // const [theme] = useOutletContext();
  const theme = props.theme;
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <Stack
      sx={{
        backgroundImage: {
          xs: `url(${rose})`,
          md: `url(${feather})`,
        },
      }}
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        // background:
        //   props.theme == "light"
        //     ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
        //     : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
        // background: props.theme == "light" ? "white" : "black",
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
          width: "min-content",
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
        CONTACT
      </Typography>
      <motion.div
        ref={contactRef}
        initial={{
          opacity: 0,
          y: 200,
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 200,
          },
          visible: {
            opacity: 1,
            y: 250,
          },
        }}
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        <Stack
          className={style.container}
          style={{
            placeContent: "center",
          }}
          direction="column"
        >
          <Stack
            className={style.mailId}
            direction="row"
            style={{ margin: "auto", alignItems: "center" }}
          >
            <AiOutlineMail
              className={style.mailIcon}
              style={{
                color: theme == "light" ? "black" : "white",
                fontWeight: "600",
              }}
            />{" "}
            <Typography
              variant="body2"
              style={{
                color: "black",
                // color: theme == "light" ? "black" : "white",
                fontWeight: "600",
                backdropFilter: "blur(10px)",
              }}
              sx={{
                fontSize: {
                  xs: "1rem",
                  lg: "1.3rem",
                },
              }}
            >
              yashwanthsrinivaswebdev@gmail.com
            </Typography>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Contact;
