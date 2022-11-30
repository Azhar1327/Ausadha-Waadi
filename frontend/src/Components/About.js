import React from 'react'
import '../CSS/About.css'

import abhishek from "../Images/abhishek.jpg"
import aman from "../Images/aman.jpg"
import azhar from "../Images/azhar.jpg"
import amit from "../Images/amit.jpg"

function About() {
  return (
    <>
    <div class="about-section">
  <h1>About Us </h1>
  <p>We are currently the undergraduate students of GCE Keonjhar working together as SkullBots .</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div class="row">
  <div class="column">
    <div class="about-card">
      <img src={azhar} alt="Jane" />
      <div class="container">
        <h2>MD. Azhar</h2>
        <p class="title">AI/ML Engineer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><a href=""><button class="about-button">Contact</button></a></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="about-card">
      <img src={amit} alt="Mike" />
      <div class="container">
        <h2>Amit Rout</h2>
        <p class="title">MERN Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="about-card">
      <img src={abhishek} alt="John" />
      <div class="container">
        <h2>Abhishek Kumar</h2>
        <p class="title">React Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>

    
  <div class="column">
    <div class="about-card">
      <img src={aman} alt="John" />
      <div class="container">
        <h2>Aman Rath</h2>
        <p class="title">Python Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="about-button">Contact</button></p>
      </div>
    </div>
  </div>


</div>
    
    </>
  )
}

export default About