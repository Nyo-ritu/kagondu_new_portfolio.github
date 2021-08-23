import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import notepad_image from '../../assets/images/notebook.jpg';

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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
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
                    <h2>Full Stack Web Developer</h2>
                    <p>Flask</p>
                    <p>Python</p>
                    <p>Javascript</p>
                    <p>SQL</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Data Science</p>
                </div>
            </main>
        </div>
    )
}
