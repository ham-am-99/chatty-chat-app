
import Login from "./pages/login/Login";



import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/Messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  
  console.log(user);
  
  return (
    <Router>
      <Switch>
        
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
       <Messenger />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
