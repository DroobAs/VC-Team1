import React from "react";
import Link from './../link/link';

export default class Navbar extends React.Component {
  constructor() {
    super();
    console.log("from constructor"); //1

    this.state = {
      name: "Mona",
      title: "Developer",
      id: 1,
      skills: [],
    };
  }

  componentDidMount() {
    console.log("from componentDidMount"); //3

   
  }

  componentDidUpdate() {
    //updating
    console.log("from componentDidUpdate");
  }

  componentWillUnmount() {
    //clean up method
    console.log("from componentWillUnmount");
  }

changeName(){

    this.setState({ name: "Hend" });

}
  
  render() {
    console.log("rendering ..................."); //2
    return (
      <>
        <h1>Hello from Navbar</h1>
        <h2>Hello {this.state.name}</h2>
         <Link name="Home" href="http://www.google.com"/>
         <Link name="About us" href="http://www.facebook.com"/>
         <Link name="Contact us" href="http://www.twitter.com"/>
         <Link name="Login" href="http://www.linkedin.com"/>
         <h1>{this.props.x}</h1>

         <button onClick={()=>{this.changeName()}}>Change name</button>
      </>
    );
  }
}
