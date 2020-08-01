import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BackspaceIcon from "@material-ui/icons/Backspace";

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
    marginTop:"3.3em",
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
}));

function ArticleCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.outline}> 
      <div className={classes.cellContainer}>
        <div className={classes.introduction}>
        <img className={classes.coverImage} src={window.location.origin + props.article.picture} />
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
  );
}

export default ArticleCard;
