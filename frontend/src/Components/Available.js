import React from 'react'
import {useRef, useEffect} from 'react';
import '../CSS/Available.css'
import {useState} from 'react';



function Available() {
    

    const [pin, setPin] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 
    setPin('');
  }

      var zipcodes = [443404, 411045, 754142];

var btn = document.getElementById('submit-btn');

 function checkAvailability() {
 	var zipcode = pin;
 	var res = document.getElementById("res");
	
 	if(zipcodes.includes(parseInt(zipcode))) {
		console.log('true');
		res.textContent = "Available"
		 res.classList.add("available");
		 res.classList.remove("not-available");
		setPin('');
	} 
    else {
		console.log("false");
		res.textContent = "Not Available"
		res.classList.add("not-available");
		res.classList.remove("available");
		setPin('');
	}
}

 
  

    return (
    <>
    <div className="Availability">
    <input id="zipcode" type="text"  onChange={event => setPin(event.target.value)}
          value={pin} placeholder="Enter the zipcode"/>
	<button  onClick={checkAvailability} id="submit-btn" type="submit" >Check</button>
	<div id="res"></div>
    </div>
    </>
  )
}

export default Available