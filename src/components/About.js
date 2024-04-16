import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent constructor")
  }
  componentDidMount(){
    
  }
  render(){
    
    return(
      <div>
        <h1>About</h1>
        <div>
          Logged In User
          <UserContext.Consumer>
            {({loggedInUser})=> <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <User name={"Akshay Saini(function)"}/>
        <UserClass name = {"Akshay Saini (class)"} location= {"Dehradun class"}/>
      </div>
    )
  }
}

// const About = () => {
//     return(
//       <div>
//         <h1>About</h1>
//         <h2>This is Namaste React Web Series</h2>
//         <User name={"Akshay Saini(function)"}/>
//         <UserClass name = {"Akshay Saini (class)"} location= {"Dehradun class"}/>
//       </div>
//     );
//   };

  export default About;