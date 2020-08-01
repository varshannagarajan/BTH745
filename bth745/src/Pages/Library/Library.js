import React from 'react';
import Game from '../../assets/objects/Game';
import { makeStyles } from "@material-ui/core/styles";
import Slider from '../../Components/Slider/Slider'


import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "2.5em", 
        textAlign: "left",
        paddingLeft: "1.8em",
        marginTop: "40px"
    },
    gameName: {
        float: "left"
    },
    gamePrice: {
        marginRight: "2px",
        float: "right",
        color: "red",
    }
}));

function Library() {
    const classes = useStyles();
    const listOfGames = Game;
    var recentlyPlayed = Array();
    var ownedGames = Array();
    for (var i=0; i < listOfGames.length; i++){
        if (listOfGames[i].owned){
            if (ownedGames.length < 3){
                recentlyPlayed.push(listOfGames[i]);
            }
            ownedGames.push(listOfGames[i]);
        }
    }
    ownedGames.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    
    return (
        <>
        <div className="container"> 
        <div className={classes.title}>Recently Played</div>
        <Slider games={recentlyPlayed}>
        </Slider>       
        </div>

        <div className="container"> 
        <div className={classes.title}>Games</div>
        <Slider games={ownedGames}>
        </Slider>       
        </div>

        </>
    )
}

export default Library;