import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css'

function Slider(props) {
    for (var i = 0; i < props.games.length; i++) {
        console.log(props.games[i].picture);
    }

    return (
        <>
            <Carousel
                plugins={[
                    {
                    resolve: slidesToShowPlugin,
                    options: {
                    numberOfSlides: 1
                    }
                    },
                ]}
                >
                {props.games.map(function(game, index){
                    return <img src={game.picture}/>
                })}
            </Carousel>
        </>
    );
}

export default Slider;