import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import notepad_image from "../../assets/images/notebook.jpg";
import { fontSize } from "@material-ui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../../styles.css'

// New Make Styles Code
const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
  },
  navbar_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: "0 0 0 0.45em",
    textDecoration: 'underline'
  },
  logo_a: {
    color: "rgb(28,24,22)",
  },
  logo_navigation: {
    listStyle: "none",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  navigation: {
    display: "flex",
  },
  nav_a: {
    display: "block",
    padding: "1em",
    color: "black",
  },
  main: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${notepad_image});`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  awesomeform: {
    width: "20%",
    textAlign: "left",
    
    position: "relative",
    marginTop: 450,
    paddingTop: 30,
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    display: "inherit",
    fontSize: 20,

    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "5px",
  },
  textarea: {
    padding: 10,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px'
    
  },

  submit: {
    
    padding: '16px 32px',
    textAlign: 'center',
    margin: '4px 2px',
   
  },
  bubble:{
    position: 'relative',
    margin: '1em auto',
    marginLeft: '300px',
    marginTop: '100px',
    padding: '1em',
    width: '10em',
    height: '4em',
    borderRadius:'.25em',
    transform: 'rotate(-4deg) rotateY(15deg)',
    background: '#629bdd',
    font: 'italic sans-serif',
    fontSize: '16px',
    textAlign: 'center',
  
}
});

export const ContactMe = () => {
  const classes = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
            alert('Your email has been successfully sent!',result.text);
        },
        
        (error) => {
          alert('There was an error, please try again',error.text);
        }
      );
  };

  return (
    <div className={classes.root}>
      {/*New and Updated HTML Code */}
      <nav>
        <div className={classes.navbar_container}>
          <h1 className={`${classes.logo} `}>
            <a
              href="/project"
              className={`${classes.logo_a} ${classes.logo_navigation}`}
            >
              My Projects
            </a>
          </h1>
          <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
            <li>
              <a href="/" className={classes.nav_a}>
                Home
              </a>
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
        <div className={classes.bubble}>Drop me a message if you want to discuss any project work I could do for you!</div>

      </main>
      <form ref={form} onSubmit={sendEmail}>
        <div className={classes.awesomeform}>
          <div className={classes.textarea}>
            <label>Name*</label>
            <input type="text" name="user_name" placeholder="Your name.." />
          </div>
          <div className={classes.textarea}>
            <label>Email*</label>
            <input type="email" name="user_email" placeholder="Your email.." />
          </div>
          <div className={classes.textarea}>
            <label>Message*</label>
            <textarea name="message" placeholder="Your message.." />
            <div className={classes.submit}>
            <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
