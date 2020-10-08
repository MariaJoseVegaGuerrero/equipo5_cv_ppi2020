import React from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router,
Switch,
Route,
Link
} from 'react-router-dom';
//Importar todos los componentes 
function App() {
  return (
    <Router>
    <div className="container  p-3 my-3">
      <div className="btn-group">
        <ul>
          <li><Link to="/" className="btn btn-primary"> Home </Link></li>
          <li><Link to="/Acerca" className="btn btn-primary"> Acerca </Link></li>
          <li><Link to="/Ayuda" className="btn btn-primary"> Ayuda </Link></li>
          <li><Link to="/Login" className="btn btn-primary"> Login </Link></li>
          <li><Link to="/Registro" className="btn btn-primary"> Registro </Link></li>
        </ul>
      </div>
    </div>
    <image src={logo}/>
    <hr/>
    <Switch>
      <Router exac path="/" >

      </Router>
    </Switch>
    </Router>
  );
}

export default App;