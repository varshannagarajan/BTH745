import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackspaceIcon from "@material-ui/icons/Backspace";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  outline: {
    borderStyle: "solid",
    borderColor: "lightgray",
    width: "90vw",
    minHeight: "45vh",
    paddingTop: "1.25vh",
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingBottom: "1.25em",
    display: "flex",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px #999",
  },
  cellContainer: {
    width: "50%",
    textAlign: "center",
    maxHeight: "60%",
  },
  coverImage: {
    maxWidth: "100%",
    maxHeight: "100%",
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
    padding: "1em",
    overflow: "auto",
    color: "#141414",
    fontSize: "1.5em",
    maxHeight: "70vh",
    overflowX: "hidden",
  },
  closeButton: {
    position: "static",
    float: "right",
    fontSize: "2.5em",
  },
  outline: {
    width: "95rem",
    minHeight: "45vh",
    paddingTop: "1.25vh",
    paddingRight: "2em",
    paddingLeft: "2em",
    paddingBottom: "1.25em",
    display: "flex",
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
    width: "20vw",
  },
}));

function ArticleCard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <img
        src={window.location.origin + props.article.picture}
        onClick={handleClickOpen}
        className={classes.gameSelect}
        alt={props.title}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        autoDetectWindowHeight={false}
        autoScrollBodyContent={false}
        contentStyle={{ width: "100%", maxWidth: "none" }}
        maxWidth={"xl"}
      >
        <div className={classes.outline}>
          <div className={classes.cellContainer}>
            <div className={classes.introduction}>
              <img
                className={classes.coverImage}
                src={window.location.origin + props.article.picture}
              />
              <h1 className={classes.articleTitle}>{props.article.title}</h1>
              <div className={classes.author}>
                <i>By: {props.article.author}</i>
              </div>
            </div>
          </div>
          <div className={classes.cellContainer}>
            <div className={classes.information}>
              <p>{props.article.contents}</p>
            </div>
          </div>
          <BackspaceIcon className={classes.closeButton} />
        </div>
      </Dialog>
    </div>
  );
}

export default ArticleCard;
