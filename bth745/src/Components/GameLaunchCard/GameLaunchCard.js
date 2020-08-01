import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './GameLaunchCard.css'
import { Link } from 'react-router-dom';

function GameLaunchCard(props) {
    return (
        <>
        <Link to="/library">
        <IconButton color="primary">
            <CloseIcon />
        </IconButton>
        <img src={window.location.origin + props.image} />
        </Link>
        </>
    );
}

export default GameLaunchCard;