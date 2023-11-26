import React, { useRef, useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

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
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        background:
          props.theme == "light"
            ? "radial-gradient(circle,  rgb(255, 153, 230) , rgb(179, 0, 131))"
            : "radial-gradient(circle,rgb(0, 77, 77),  rgb(0, 26, 26))",
      }}
    >
      <motion.div
        ref={contactRef}
        initial={{
          opacity: 0,
          y: 300,
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: 300,
          },
          visible: {
            opacity: 1,
            y: 390,
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
            style={{ margin: "auto" }}
          >
            <AiOutlineMail
              className={style.mailIcon}
              style={{
                color: theme == "light" ? "black" : "white",
                fontWeight: "600",
              }}
            />{" "}
            <span
              style={{
                color: theme == "light" ? "black" : "white",
                fontWeight: "600",
              }}
            >
              yashwanthsrinivaswebdev@gmail.com
            </span>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Contact;
