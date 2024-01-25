import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
      margin:"20px 10px"
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        href="https://www.facebook.com/zeeshaan.siddique.16"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Facebook />}
      />
      <BottomNavigationAction
        href="https://www.linkedin.com/in/Zeeshaan-siddique-a55317200/"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<LinkedIn />}
      />
      <BottomNavigationAction
        href="https://www.instagram.com/xx.zeeshhhh.xx/"
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      />
    </BottomNavigation>
  );
};

export default Footer;
