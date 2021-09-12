import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";


class WhoAmI extends Component {

  constructor (props) {
    super(props);
    this.state = {
      years : 25
    }
    this.nextYear = this.nextYear.bind(this); //Первый способ привязать контекст к обработчику события
    // this.nextYear = () => { //привязываем контекст родителя с помощью стрелочной функции
    // this.setState(state =>({
    //   years: ++state.years
    // }))
    
  }
    nextYear = () => { //Class fields!
    this.setState(state =>({
      years: ++state.years
    }))

  
  // nextYear(){
  //   console.log('State.years +1');
  //   this.setState(state =>({
  //     years: ++state.years
  //   })

  //   )
  }

  render (){
    const {years} = this.state;
    const {name, surname, link} = this.props;
    return (
      <>
      <button onClick={this.nextYear}>++</button>
        <h1>My name is {name} , surname - {surname}, years {years} </h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Joh" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Dohn" surname="Smith" link="facebook.com"/>
      <div className="black green">Hello MIsha</div>
      <div className="green black">Hi</div>
      
    </>
  )

}
ReactDOM.render(<All/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
