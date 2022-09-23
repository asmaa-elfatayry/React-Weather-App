import React,{Component} from 'react';
import Form from './componant/Form.js';
import Weather from './componant/Weather.js';
import './index.css'

const APi_key="aae8e9b7a6d137105e05f07a05442740";
//  http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {
state={
teperature:'',
city:'',
country:'',
humidity:'',
description:'',
error:''

}

  getWeather= async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
 const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APi_key}`);
 const data= await api.json();
 console.log(data)

 if(city && country){
  this.setState({
    teperature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
   })
 }else{
   this.setState({
    teperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:'Enter your city and country!'
   })
 }

  }
  render(){
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
    <Form getWeather={this.getWeather}/>
    <Weather
    // update state
    teperature={this.state.teperature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
    />
    </div>
    </div>
  );
  }
}

export default App;
