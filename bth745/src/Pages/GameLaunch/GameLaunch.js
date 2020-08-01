import React from 'react';
import GameLaunchCard from "../../Components/GameLaunchCard/GameLaunchCard"


function GameLaunch(props) {
    return (
        <>
            <GameLaunchCard picture={props.location.pictureProps.picture} />
        </>
    );
}

export default GameLaunch;