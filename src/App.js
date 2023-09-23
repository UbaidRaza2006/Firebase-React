
import './App.css';
import React from "react";
// import {app,analytics,auth} from './Firebase/initialization'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";
// import About from './Navbar/About';
// import Contact from './Navbar/Contact';
// import Home from './Navbar/Home';
// import Navbar from './Navbar/Navbar'
import Signup from './Comp/Signup';
import Signin from './Comp/Signin';
import Admin from './Comp/Admin';
// import { Navbar } from 'react-bootstrap';
// import { Config } from './Firebase/initialization';

function App() {
  return (
    <>
{/* <Signup/> */}
      {/* <Navbar /> */}

      {/* Router ka kaam he */}
      <Routes>
        <Route path="/" Component={Signup} >

        </Route>
        <Route path="/signin" Component={Signin} >

        </Route>
        <Route path="/admin" Component={Admin} >

        </Route>
      </Routes >

      {/* Router ka kaam tha */}
    </>
  );
}

export default App;
