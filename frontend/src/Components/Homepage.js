import React from 'react'
import '../CSS/Homepage.css'
function Homepage() {
  return (
    <>

    <div className="Services">

    

    <div className="card">
    <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" alt="Avatar" />
    <div className="container">
    <h4><b>Medicines</b></h4> 
    <button>Book it</button> 
    </div>
    </div>

    <div className="card">
    <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="Avatar" />
    <div className="container">
    <h4><b>Lab Tests</b></h4> 
    <button>Schedule it</button> 
    </div>
    </div>

    <div className="card">
    <img src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" alt="Avatar" />
    <div className="container">
    <h4><b>Health Blogs</b></h4> 
    <button>Explore it</button> 
    </div>
    </div>

    <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GmbEFWFN4XGeG-_IPy63dzL2Oux5Xpl4NA&usqp=CAU" alt="Avatar" />
    <div className="container">
    <h4><b>Health Blogs</b></h4> 
    <button>Explore it</button> 
    </div>
    </div>

    </div>
    
    </>
  );
}

export default Homepage;