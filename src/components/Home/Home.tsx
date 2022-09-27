import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import notepad_image from '../../assets/images/notebook.jpg';
import { FormatUnderlinedTwoTone } from '@material-ui/icons';
import cookie_image from '../../assets/images/cookie.jpg';

interface Props{
    title: string;
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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    bubble:{
        position: 'relative',
        margin: '2em auto',
        marginLeft: '20px',
        padding: '1em',
        width: '10em',
        height: '4em',
        borderRadius:'.25em',
        transform: 'rotate(-4deg) rotateY(15deg)',
        background: '#629bdd',
        font: 'sans-serif',
        fontSize: '16px',
        textAlign: 'center',
      },
    
})

export const Home = ( props:Props) => {
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
                    <h1>Kagondu Wai</h1>
                    <br />
                    <h2>Full Stack Web Developer</h2>
                    <p>Flask</p>
                    <p>Python</p>
                    <p>Django</p>
                    <p>Javascript</p>
                    <p>SQL</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Data Science</p>
                </div>
                
            </main>
            <div className={classes.bubble}>Hi there! I'm a software developer with a strong focus on Python and Back-end Development.</div>
        </div>
    )
}
