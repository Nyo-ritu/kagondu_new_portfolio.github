import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import notepad_image from '../../assets/images/notebook.jpg';
import weatherapp from '../../assets/images/weather_api.png';
import marvel from '../../assets/images/marvel2.png';
import drones from '../../assets/images/drones2.png';
import carERD from '../../assets/images/Car_Dealership_ERD.jpg';
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
        margin: '0 0 0 0.45em'
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
        height: '20em'
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
                                        <Button size="small" href="">Github</Button>
                                        <Button size="small" href="">Heroku</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                                                              
                                            image={drones}
                                    />
                                        
                                        <CardContent>
                                            FireBase Hosted Drone Inventory
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="">Github</Button>
                                        <Button size="small" href="">Heroku</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col md sm>
                                <Card className={classes.card_dims}>
                                    <CardActionArea>
                                    <CardMedia 
                                            className={classes.media}                                                                                
                                            image={marvel}
                                    />
                                        
                                        <CardContent>
                                           Imsonia CRUD APP 
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="">Github</Button>
                                        <Button size="small" href="">Heroku</Button>
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
                                            Prosgresql Database
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" href="">Github</Button>
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