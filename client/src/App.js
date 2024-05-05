import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { jwtDecode} from 'jwt-decode';
import './App.css';

function App() {
  const [ user, setUser ] = useState({});

  function handleCallBackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    const token = response.credential;
    const userObject = jwtDecode(token);
    console.log(userObject);

    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
  /* global google */
  google.accounts.id.initialize({
    client_id: "333914517480-b9hviqh4mumktrsg7i07kb792isrtr8u.apps.googleusercontent.com",
    callback: handleCallBackResponse
  })

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
  )

  google.accounts.id.prompt();
}, []);
// No user -> show sign in button
// User -> show log out button
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 &&
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }
      
      {user &&
        <div>
          <img src={user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
    </div>
  );
}

export default App;
