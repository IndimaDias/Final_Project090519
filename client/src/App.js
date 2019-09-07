
import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Search from "./pages/Todo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Event from "./components/createEvent/createEvent";
import Todo from "./pages/Todo";
import Formpage from "./pages/Formpage";



class App extends React.Component{

   LoginContainer = () => {

    return(
      <div className="container-fluid">
      {/* <Route exact path="/" render={() => <Redirect to="/Home" />} /> */}
      <Route exact path="/" component={Home} />
    </div>
    )

    }
  
  DefaultContainer = () => {
    return(
      // <div>
        <div>
          <Navbar />
          
          <Route exact path="/calendar" component={Calendar} />
       
          <Route exact path="/todo" component={Todo} />
        
        </div>
      // </div>
    )  
  }

  render (){
    return(
      <Router>
      <Switch>
      <div className="App">
        <Route exact path="/" component={Home}/>      
        <Route exact path="/about" component={About}/>
        <Route exact path = "/(calendar)" component={this.DefaultContainer}/>
        <Route exact path = "/(todo)" component={this.DefaultContainer}/>
        <Route exact path="/formpage" component={Formpage} />

       
    
      </div>
      </Switch>
      </Router>
    )
  }


}


export default App;
