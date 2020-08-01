import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './GameLaunchCard.css'
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    screen:{
        width: "100%",
        height: "95vh",
        marginTop: "-5vh",
    },
    close: {
        position:"absolute",
        right: 0,
        color: "#f93a3a",
        height: "10vh",
        width: "5vw",
        marginTop: "-3vh",
    }
 }));

function GameLaunchCard(props) {
    const classes = useStyles();
    return (
        <>
        <Link to="/library">
        <IconButton className={classes.close}>
            <CloseIcon/>
        </IconButton>
        </Link>
        <img src={window.location.origin + props.picture} className={classes.screen} />
        </>
    );
}

export default GameLaunchCard;