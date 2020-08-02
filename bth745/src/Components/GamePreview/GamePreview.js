import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Purchase from "../Purchase/Purchase";
import { FaStar } from "react-icons/fa";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import { useTheme } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  outline: {
    width: "95rem",
    minHeight: "45vh",
    paddingTop: "1.25vh",
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingBottom: "1.25em",
    display: "flex",
    borderStyle: "solid",
    borderColor: "lightgray",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px #999",
  },
  cellContainer: {
    width: "50%",
    textAlign: "center",
    maxHeight: "60%",
  },
  coverImage: {
    width: "45rem",
    marginTop: "3.3em",
    objectFit: "contain",
    opacity: "0.7",
    borderRadius: "5px",
  },
  articleTitle: {
    color: "#F93A3A",
    fontSize: "3.5em",
  },
  author: {
    color: "#141414",
    fontSize: "2em",
    fontFamily: "Roboto, sans serif",
  },
  information: {
    padding: "1rem",
    overflow: "auto",
    color: "#141414",
    fontSize: "1.5em",
    maxHeight: "70rem ",
    overflowX: "hidden",
  },
  closeButton: {
    position: "static",
    float: "right",
    fontSize: "2.5em",
    cursor: "pointer",
  },
  radio: {
    display: "none",
  },
  carouselPicture: {
    height: "20vh",
  },
  gameTitle: {
    textAlign: "left",
    paddingLeft: "0.5em",
    fontSize: "3em",
  },
  price: {
    textAlign: "left",
    paddingLeft: "0.75em",
    fontSize: "2em",
    color: "red",
  },
  description: {
    textAlign: "left",
    paddingLeft: "1.6em",
  },
  gameSelect: {
    cursor: "pointer",
    height: "20vh",
    width:"98%"
  },
}));

function GamePreview(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rating] = useState(props.game.rating);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <img
        src={window.location.origin + props.game.picture}
        onClick={handleClickOpen}
        className={classes.gameSelect}
        alt={props.title}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
        autoDetectWindowHeight={false} 
        autoScrollBodyContent={false}
        contentStyle={{width: "100%", maxWidth: "none"}}
        maxWidth={"xl"}
        
      >
        <DialogContent className={classes.outline}>
          <div className={classes.cellContainer}>
            <div className={classes.gamePictures}>
              <img
                className={classes.coverImage}
                src={window.location.origin + props.game.picture}
                alt="Game Preview"
              />
            </div>
            <div className={classes.carousel}>
              <Carousel
                itemWidth={350}
                plugins={[
                  "arrows",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 3,
                    },
                  },
                ]}
              >
                <img
                  className={classes.carouselPicture}
                  src={window.location.origin + props.game.picture}
                  alt="Carousel 1"
                />
                <img
                  className={classes.carouselPicture}
                  src={window.location.origin + props.game.picture}
                  alt="Carousel 2"
                />
                <img
                  className={classes.carouselPicture}
                  src={window.location.origin + props.game.picture}
                  alt="Carousel 3"
                />
                <img
                  className={classes.carouselPicture}
                  src={window.location.origin + props.game.picture}
                  alt="Carousel 4"
                />
                <img
                  className={classes.carouselPicture}
                  src={window.location.origin  + props.game.picture}
                  alt="Carousel 5"
                />
              </Carousel>
            </div>
          </div>
          <div className={classes.cellContainer}>
              <div className={classes.gameTitle}>{props.game.title}</div>
              <div className={classes.price}>{props.gameprice}</div>
              {[...Array(5)].map((stat, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      className={classes.radio}
                      type="radio"
                      name="rating"
                      value={ratingValue}
                    />
                    <FaStar
                      size={45}
                      color={ratingValue < rating ? "#ffc107" : "e4e5e9"}
                    />
                  </label>
                );
              })}
              <p>{props.game.description}</p>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vel mauris ornare, accumsan dolor vitae, vulputate
                nunc. Morbi non tellus turpis. Maecenas ac nibh a dolor faucibus
                convallis. Suspendisse dapibus ipsum tellus, at condimentum
                ipsum convallis consectetur. Cras sit amet est dolor. Quisque
                mattis consectetur ante, at porta neque. Aliquam aliquam elit
                nec sem tempor fringilla. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Duis convallis orci eu urna pulvinar
                euismod. Maecenas scelerisque pretium felis, eu faucibus lorem
                fermentum ut. Quisque fringilla nec odio eget tempus. Aenean
                pulvinar urna vitae magna porta, ac vehicula nisl tempor. Nam
                lacus lorem, gravida ullamcorper accumsan vel, eleifend a nisl.
                Aliquam ex est, dapibus eu lobortis in, cursus at quam.
                Pellentesque sit amet est sagittis, hendrerit elit consectetur,
                placerat justo. Duis dignissim justo augue, at semper odio
                tristique eget. Morbi consequat sodales ante, quis consequat
                felis interdum aliquet. Curabitur eleifend pretium lacus nec
                auctor. Donec felis metus, placerat sed enim nec, ultrices
                posuere purus. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Nullam viverra ultricies commodo. Integer sit amet
                facilisis risus. Pellentesque fermentum lectus lectus, eget
                dictum magna molestie et. Vestibulum eget nisi egestas,
                fermentum mi nec, venenatis nunc. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Aliquam feugiat ipsum sit amet dolor congue, a faucibus nunc
                tempus. Donec egestas mauris non quam suscipit, a hendrerit
                risus dictum.
              </p>

              <Purchase></Purchase>

          </div>

          <BackspaceIcon
            className={classes.closeButton}
            onClick={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GamePreview;
