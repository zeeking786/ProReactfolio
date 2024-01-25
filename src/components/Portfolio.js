import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/Jarvis.png";
import project2 from "../images/bol.png";
import project3 from "../images/react-redux.jpg";
// import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles({
  mainContainer: {
    // background: "#233",
    // height: "100%",
    // height:"100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Voice Assistant in Python
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia architecto natus ipsa dignissimos porro rem neque,
                  repudiandae libero sapiente iste perferendis quidem quae
                  numquam ducimus pariatur voluptatem ex! A, laboriosam!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Bol-Chat Application
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia architecto natus ipsa dignissimos porro rem neque,
                  repudiandae libero sapiente iste perferendis quidem quae
                  numquam ducimus pariatur voluptatem ex! A, laboriosam!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia architecto natus ipsa dignissimos porro rem neque,
                  repudiandae libero sapiente iste perferendis quidem quae
                  numquam ducimus pariatur voluptatem ex! A, laboriosam!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia architecto natus ipsa dignissimos porro rem neque,
                  repudiandae libero sapiente iste perferendis quidem quae
                  numquam ducimus pariatur voluptatem ex! A, laboriosam!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Portfolio;
