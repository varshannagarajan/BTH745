import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './GameLaunchCard.css'

function GameLaunchCard(props) {
    return (
        <>
        <IconButton color="primary">
            <CloseIcon />
        </IconButton>
        <img src={props.image} />
        </>
    );
}

export default GameLaunchCard;