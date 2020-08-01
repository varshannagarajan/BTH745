import React from 'react';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Game from '../../assets/objects/Game';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

import "@brainhubeu/react-carousel/lib/style.css";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "2.5em", 
        textAlign: "left",
        paddingLeft: "1em",
    },
}));

const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }



  
function Store() {
    const classes = useStyles();
    const listOfGames = Game;
    let listOfGenres = [...new Set(listOfGames.map(x=> x.genre))];  

    return (
        
        <div> 
        {listOfGenres.map((genre) => (
            <div>
            <div className={classes.title}>{genre}</div>
            
            <Carousel
            itemWidth={350}
            plugins={[
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
          >
            {listOfGames.map((game) => (
                
            <div>
            <img
              className={classes.carouselPicture}
              src={window.location.origin + game.picture}
              alt="Carousel 1"/>
              <p>{game.title} {game.price}</p>
              </div>
            ))}
         

          </Carousel>
          </div>



        ))}            
        
        </div>
    )
}



export default Store;