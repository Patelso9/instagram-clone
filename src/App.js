import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import { Button, Input } from '@material-ui/core';

// Modal Styling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  
  const [posts, setPosts] = useState([]);
  const [openSignIn, setOpenSignIn] = useState(false)
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChange((authUser) => {
      if(authUser) {
        // user has logged in
        console.log(authUser)
        setUser(authUser)

        // if (authUser.displayName) {
        //   // dont update username
        // } else {
        //   // if we just created a new user, update profile and display username
        //   return authUser.updateProfile({
        //     displayName: username,
        //   })
        // }

      } else {
        // user has logged out
        setUser(null)
      }
    })

    return() => {
      // perform cleanup actions
      unsubscribe();
    }

  //dependencies, everytime they change we need to listen for it 
  }, [user, username]);
  
  
  // runs a piece of code based on specific conditions
  // onsnpashot- everythime something new runs the code refreshes
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    // creae user with backend validation
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.update.updateProfile({
        displayName: username,
      })
    })
    .catch((error) => alert(error.message))
  }

  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))

    setOpenSignIn(false)
  }

  return (
    <div className="app">
        <Modal
          open={open}
          onClose={() => setOpen(flase)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="app_signup">
            <center>
            <img
              className="app_headerImage"
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
              alt="Instagram Logo"
              />
            </center>
              <Input 
                type= "text"
                placeholder="username"
                value ={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input 
                type= "text"
                placeholder= "email"
                value ={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                type= "password"
                placeholder="password"
                value ={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button 
              type="submit"
              onClick={signUp}>Sign Up</Button>
            </form>
          </div>
        </Modal>

        {/* SignIn */}
        <Modal
          open={openSignIn}
          onClose={() => setOpenSignIn(flase)}
        >
          <div style={modalStyle} className={classes.paper}>
            <form className="app_signin">
            <center>
            <img
              className="app_headerImage"
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
              alt="Instagram Logo"
              />
            </center>
              <Input 
                type= "text"
                placeholder="username"
                value ={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input 
                type= "text"
                placeholder= "email"
                value ={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input 
                type= "password"
                placeholder="password"
                value ={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button 
              type="submit"
              onClick={signUp}>Sign In</Button>
            </form>
          </div>
        </Modal>

      {/* Header/Nav Bar */}
        <div className="app_header">
          <img
          className="app_headerImage"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
          alt="Instagram Logo"
          />

        </div>

         {user ? (
           <Button onClick={() => auth.signOut()}>Logout</Button>
           ) : (
             <div className="app_loginContainer">
              <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>  
              <Button onClick={() => setOpen(true)}>Sign Up</Button>  
            </div>
         )
        };

        <Button onClick={signUp}>Sign Up</Button>
          
        <h1>Instagram Clone App </h1>

        {
          posts.map(posts => (
            <Post username={posts.username} caption={posts.caption} imageUrl={posts.imageUrl}/>
          ))
        }

        
    </div>
  );
}

export default App;
