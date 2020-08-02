import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Article } from '../../assets/objects/Article';
import ArticleCard from '../../Components/ArticleCard//ArticleCard';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Typography from '@material-ui/core/Typography';


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
            <Typography variant="h5" className={classes.title}>{gameTitle}</Typography>
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