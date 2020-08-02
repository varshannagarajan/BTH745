import React from 'react';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Game from '../../assets/objects/Game';
import { makeStyles } from "@material-ui/core/styles";
import GamePreview from '../../Components/GamePreview/GamePreview';
import Typography from '@material-ui/core/Typography';

import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    paddingLeft: "2.3em",
    paddingBottom: "0.75em",
    marginTop: "4vh",
},
    gameName: {
        float: "left"
    },
    gamePrice: {
        marginRight: "2px",
        float: "right",
        color: "red",
    },
    viewHeight: {
      height: "20vh"
    }
}));

function Store() {
    const classes = useStyles();
    const listOfGames = Game;
    let listOfGenres = [...new Set(listOfGames.map(x=> x.genre))];
    return (
        <div>
        {listOfGenres.map((genre) => (
            <div>
            <Typography variant="h5" className={classes.title}>{genre}</Typography>
            <Carousel
            plugins={[
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 5,
                },
              },
            ]}
          >
            {listOfGames.filter(game => game.genre === genre).map((currentGame) => (
                <div>
                    <GamePreview game={currentGame} className={classes.viewHeight}></GamePreview>
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