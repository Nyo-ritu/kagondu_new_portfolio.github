import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import notepad_image from '../../assets/images/notebook.jpg';
import weatherapp from '../../assets/images/weather_api.png';
import blog from '../../assets/images/blog.png';
import carERD from '../../assets/images/Car_Dealership_ERD.jpg';
import capstone from '../../assets/images/capstone.png';
import { Container, Row, Col } from 'reactstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';



interface projectProps{
}

// New Make Styles Code
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em',
        textDecoration: 'underline'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${notepad_image});`,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    container: {},
    card_dims: {
        marginLeft: 20,
        minWidth: 350,
        minHeight: 350,
        maxWidth: 465,
        marginTop: 50,
        
        float: 'left',
        marginBottom: 150,
        
    },
   
    media: {
        height: '20em',
        
    },
    
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
   
    
})

export const Projects = ( props:projectProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="/project" className={ `${classes.logo_a} ${classes.logo_navigation}` }>My Projects</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <a href="/" className={classes.nav_a}>Home</a>
                        </li>
                        <li>
                            <a href="/contactme" className={classes.nav_a}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                <h1>A Preview of some of my Project Work</h1>
                <Container className={classes.container}>
                        
                        <Row>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                    
                                            image={weatherapp}
                                    />
                                        
                                        <CardContent>
                                           Flask Weather API 
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small"> <a href="https://github.com/Nyo-ritu/kagondu_wk6_weatherapp.github"target="_blank" rel="noreferrer noopener">Github</a></Button>
                                        <Button size="small"> <a href="https://kw-weatherapp.onrender.com/"target="_blank" rel="noreferrer noopener">Render app</a></Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims} >
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                                                              
                                            image={capstone}
                                    />
                                        
                                        <CardContent>
                                            Heroku hosted Football stats app -Capstone Project
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small"> <a href="https://fb-api-capstone.herokuapp.com/"target="_blank" rel="noreferrer noopener">Heroku app</a></Button>
                                        <Button size="small"> <a href="https://github.com/Nyo-ritu/kagondu_capstone.github"target="_blank" rel="noreferrer noopener">Github</a></Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                                                                
                                            image={blog}
                                    />
                                        
                                        <CardContent>
                                           Django Blog and Translator App
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small"> <a href="https://github.com/Nyo-ritu/django_blog_and_translator_app.git"target="_blank" rel="noreferrer noopener">Github</a></Button>
                                        <Button size="small"> <a href="https://kw-blog-translator.herokuapp.com"target="_blank" rel="noreferrer noopener">Heroku app</a></Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                                                                                                    
                                            image={carERD}
                                    />
                                        
                                        <CardContent>
                                            Car Dealership ERD
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small"> <a href="https://github.com/Nyo-ritu/kagondu_wk4_car_dealership.github" target="_blank" rel="noreferrer noopener">Github</a></Button>
                                    </CardActions>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            </main>
        </div>
    )
}