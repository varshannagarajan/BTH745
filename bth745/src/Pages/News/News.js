import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Article } from '../../assets/objects/Article';
import ArticleCard from '../../Components/ArticleCard//ArticleCard';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";


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

function News() {
    const classes = useStyles();
    let articleList = Article;
    let gameHeaders = [...new Set(articleList.map(x=> x.game))];
    return (
        <div> 
        {gameHeaders.map((gameTitle) => (
            <div>
            <div className={classes.title}>{gameTitle}</div>
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
            {articleList.filter(gameName => gameName.game == gameTitle).map((currentGame) => (
                <div>
                    <ArticleCard article={currentGame}></ArticleCard>
                    <div className={classes.gameName}>{currentGame.title}</div> <div className={classes.gamePrice}>{currentGame.price}</div>
                </div>
            ))}
          </Carousel>
          </div>
        ))}            
        </div>
    )
}

export default News;