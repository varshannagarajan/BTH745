import React from 'react';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Game from '../../assets/objects/Game';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import GamePreview from '../../Components/GamePreview/GamePreview'

import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "2.5em",
        textAlign: "left",
        paddingLeft: "1.8em",
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

function Store() {
    const classes = useStyles();
    const listOfGames = Game;
    let listOfGenres = [...new Set(listOfGames.map(x=> x.genre))];
    var gamesOfGenre = Array();
    return (
        <div>
        {listOfGenres.map((genre) => (
            <div>
            <div className={classes.title}>{genre}</div>
            <Carousel
            plugins={[
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 4,
                },
              },
            ]}
          >
            {listOfGames.filter(game => game.genre == genre).map((currentGame) => (
                <div>
                    <GamePreview game={currentGame}></GamePreview>
                    <div className={classes.gameName}>{currentGame.title}</div> <div className={classes.gamePrice}>{currentGame.price}</div>
                </div>
            ))}
          </Carousel>
          </div>
        ))}
        </div>
    )
}

export default Store;