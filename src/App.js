import React, {Component} from 'react';
// state is a JavaScript object that stores data for a component. 
//When a component's state changes, React will automatically re-render the component and any child components
// that depend on that state. This makes it easy to build dynamic user interfaces that respond to user input 
//and other events.

//state is a concept in React that allows you to store and manage data within a component.

//Component class from the react library is often used as the parent class for custom component classes.
class Clock extends Component {
  constructor(props) {// use constructor when an instance of class is created.
                        //takes the props objects as an arguments 
    super(props);      // super is called to call the constructor of the parent component class
    //super is a keyword used in the constructor of a class-based component to call 
    //the constructor of the parent class.
    //he super keyword is used to call the constructor of the parent class and pass in the props argument. 
    //This is necessary because the parent class may have its own initialization logic that needs to be run
    //before the child class can initialize its own state and props.
    this.state = {date: new Date()};
  }
//these arre called lifecycle methods
//use to g
//The componentDidMount() method runs after the component output has been rendered to the DOM. 
//This is a good place to set up a timer:
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({//is a method used in React to update the state of a component. 
      //It is available in class-based components that extend the Component class and is used to update 
      //the state object of the component.
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
//this component displays a clock that updates itself every second to show the current time.

export default Clock;