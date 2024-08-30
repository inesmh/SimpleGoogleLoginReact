import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { jwtDecode} from 'jwt-decode';
import './App.css';

function App() {

  //useState gives user info and setUser function
  const [ user, setUser ] = useState({});

  //function when user logs in
  function handleResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    const token = response.credential;

    //json web token when user logged
    const userObject = jwtDecode(token);

    //user logged
    console.log(userObject);
    setUser(userObject);

    // To hide Log in button
    document.getElementById("signInDiv").hidden = true;

    // To hide Log in text
    document.getElementById("title").hidden = true;
  }

  function handleSignOut(event){
    setUser({});

    // To show Log in button
    document.getElementById("signInDiv").hidden = false;

    // To show Log in text
    document.getElementById("title").hidden = false;
  }

  useEffect(() => {
  // functions to run
  // global google - takes google object from script in index.html
  // initialize function - client id from google console + function called when user logs in
  google.accounts.id.initialize({
    client_id: "333914517480-b9hviqh4mumktrsg7i07kb792isrtr8u.apps.googleusercontent.com",
    callback: handleResponse
  })
  
  // calling the login button
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  )

  google.accounts.id.prompt();
}, []);

// No user logged -> shows sign in button
// User logged -> shows log out button, photo and name
  return (
    <div className="App">
      <h1>OpenIDConnect App</h1>
      <div id="title">  <h4>Click here to log in with Google</h4> </div>
      <div id="signInDiv"></div>
      
      {user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }

      { Object.keys(user).length != 0 &&
        <h4>You have logged in!</h4>
      }

      { Object.keys(user).length != 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }

    </div>
  );
}

export default App;
