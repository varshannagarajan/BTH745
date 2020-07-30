import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { makeStyles } from "@material-ui/core/styles"
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '@brainhubeu/react-carousel/lib/style.css';
import './Slider.css'

const useStyles = makeStyles((theme) => ({
    images: {
        height: "20vh",
    },
    titlePurchased: {
        textAlign: "left",
        paddingLeft: "0.5vh",
    },
    price:{
        textAlign: "right",
        color: "#f93a3a",
        paddingRight: "0.5vh",
    },
  }));

function Owned(props) {
    const classes = useStyles();
    return(
        <>
        <img src={props.image} className={classes.images}/>
        <Typography variant="subtitle1"> {props.title}</Typography>
        </>
    )
}

function Purchase(props) {
    const classes = useStyles();
    return(
        <>
        <img src={props.image} className={classes.images}/>
        <Grid container spacing={2}>
            <Grid item xs>
                <Typography noWrap variant="subtitle1" className={classes.titlePurchased}> {props.title}</Typography>
            </Grid>
            <Grid item xs>
                <Typography variant="subtitle2" className={classes.price}> {props.price}</Typography>
            </Grid>
        </Grid>
        </>
    )
}

function Slider(props) {
    for (var i = 0; i < props.games.length; i++) {
        console.log(props.games[i].picture);
    }
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
                    return (
                        <div>
                            {game.owned ? <Owned image={game.picture} title={game.title}/> : <Purchase  image={game.picture} title={game.title} price={game.price}/>}
                        </div>
                    )
                })}
            </Carousel>
        </>
    );
}

export default Slider;