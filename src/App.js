import React from 'react';
import {Launch,Launchitem,Detail} from './components/product'
import { BrowserRouter as Router,
Routes,
Route,
Link,

} from "react-router-dom";
import './App.css';
import './home.css';
function App() {
  return (
    <Router>
      <div className="nav">
      <Link to="/" ><span className="navitem"><h4>Home</h4></span></Link>
      <Link to="Launch"><span className="navitem"><h4>Products</h4></span></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Launch" element={<Launch />}>
          <Route path="/" element={<Launchitem />} />
          <Route path=":slug" element={< Detail/>} />
          </Route>
      </Routes>
    </Router>
    
  );
}
function Home(){
  return(
    <div className="wellcome">
      <h2 className="text">Wellcome</h2>
      <a href="http://localhost:3000/Launch"><button className="btn">Show Products</button></a>
    </div>
  );
}
export default App;
