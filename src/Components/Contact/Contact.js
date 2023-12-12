import React, { useRef, useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import feather from "../../Images/portfolio/feather.jpg";
import rose from "../../Images/portfolio/rose_mobile.jpg";
import intro_mobile_1 from "../../Images/portfolio/intro_mobile_3.jpg";

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
      direction="column"
      sx={{
        display: "flex",
        backgroundImage: {
          xs: `url(${intro_mobile_1})`,
          md: `url(${feather})`,
        },
        justifyContent: "space-around",
      }}
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h5"
        style={{
          color: "black",
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "800",
          placeSelf: "center",
          marginTop: "auto",
          marginBottom: "auto",
        }}
        sx={{
          letterSpacing: {
            xs: "0.7ch",
            lg: "1.3ch",
          },
          paddingInline: {
            xs: "3ch",
            lg: "0ch",
          },
        }}
      >
        LET'S EMBARK ON A DIGITAL JOURNEY TOGETHER!
        {/* where innovation meets
        pixel-perfect precision. */}
      </Typography>
      <Stack style={{ height: "50%" }}>
        <motion.div
          ref={contactRef}
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
          transition={{ duration: 1.5 }}
          style={{
            backdropFilter: "blur(10px)",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "auto",
            padding: "1ch",
            width: "100%",
          }}
        >
          <Stack
            className={style.container}
            style={{
              placeContent: "center",
            }}
            direction="column"
          >
            <Stack
              className={`${style.mailId} ${style.introParagraphs}`}
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
                  fontFamily: "monospace",
                  color: "black",
                  // color: "teal",
                  // color: theme == "light" ? "black" : "white",
                  fontWeight: "600",
                }}
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    lg: "1.1rem",
                  },
                }}
              >
                yashwanthsrinivaswebdev@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
}

export default Contact;
