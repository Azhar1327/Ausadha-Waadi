import React, { useEffect } from "react";
import Available from "./Available.js";
import "../CSS/Homepage.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/ProductAction.js";
import {Link} from "react-router-dom";

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  

  return (
    <>
      <h2 className="Services-heading">Medicines</h2>

      <div className="Services">
        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>
            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
              
            
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>

            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>
      </div>

      <div className="Services">
        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Medicines</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>
      </div>

      <h2 className="Services-heading">Lab Tests</h2>

      <div className="Services">
        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="Avatar"/>
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>
      </div>

      <div className="Services">
        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>

        <div className="card">
          <img src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" alt="Avatar"/>
          <div className="container">
            <h4>
              <b>Lab Tests</b>
            </h4>

            <h6>
              <b>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet{" "}
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking"><button>Book it</button></Link> 
          </div>
        </div>
      </div>

      <h2 className="Services-heading">Search the Centre</h2>
      <Available />
    </>
  );
}

export default Homepage;
