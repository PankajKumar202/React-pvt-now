import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import './main.css'
import Menu from "./Menu/menu";

// Geolocation and Weather

let Geolocation=()=>{
  
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("GeoLocation not supported.")
    }
}

let showPosition=(data)=>{
    let y = document.getElementById("weather");
    let z =  document.getElementById('icon')
    let lon=data.coords.longitude;
    let lat=data.coords.latitude;
    console.log(data);
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
   
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.list.map((item)=>{
            console.log(item.temp.day)
            y.innerText=`${item.temp.day}°C`;
            z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
        })
        
    })
}
Geolocation();

const Header=()=>{
    return(
        <Fragment>
            <div id="header1"></div>
            <div id="nav1">
                <div className="logo">
                    <Link className="navbar-brand" to={"#"}><img src="https://i.ibb.co/zbXs3MY/logo.png" alt="Logo"/></Link>
                </div>
            
                <p id="weather"></p>
                <div id="icon"></div>

                <div id="findStore">
                    <i className="fas fa-map-marker-alt"></i>
                    <Link to={"#"}>
                        <p id="find">Find a Store</p> 
                    </Link>
                </div> 
                </div>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button id="navIcon" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-50" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"coffee.html"} >COFFEE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="Menu" >MENU</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"coffeehouse.html" } >COFFEEHOUSE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"responsibility.html"} >RESPONSIBILITY</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"#"}>REWARDS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"#"}>CAREERS</Link>
                            </li>
                            <li className="nav-item" id="gift">
                                <Link className="nav-link active" to={"seasongifting.html"}>STARBUCKS SEASON'S GIFTING</Link>
                            </li>
                            <li className="nav-item" id="del">
                                <Link className="nav-link active" aria-current="page" to={"/starbucksdelivers"}>STARBUCKS DELIVERS</Link>
                            </li>
                            <li className="nav-item" id="about">
                                <Link className="nav-link active" to={"about.html"} >ABOUT US</Link>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </nav>
        
        </Fragment>
    )
}
export default Header;