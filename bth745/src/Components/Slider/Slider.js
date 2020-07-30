import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { makeStyles } from "@material-ui/core/styles"
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css'

const useStyles = makeStyles((theme) => ({
    images: {
        height: "20vh",
    }
  }));

function Slider(props) {
    for (var i = 0; i < props.games.length; i++) {
        console.log(props.games[i].picture);
    }
    const classes = useStyles();
    return (
        <>
            <Carousel
                plugins={[
                    'arrows',
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 5
                    },
                    },
                ]}
                >
                {props.games.map(function(game, index){
                    return <img src={game.picture} className={classes.images}/>
                })}
            </Carousel>
        </>
    );
}

export default Slider;