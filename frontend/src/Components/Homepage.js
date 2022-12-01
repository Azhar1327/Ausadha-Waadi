import React, { useEffect } from "react";
import Available from "./Available.js";
import Search from "./Search.js";
import "../CSS/Homepage.css";
import { useDispatch } from "react-redux";
import { getProducts } from "../actions/ProductAction.js";
import { Link } from "react-router-dom";

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
            src="https://media.istockphoto.com/id/1250471519/photo/vial-of-insulin-injection-with-a-syringe-on-black-table-and-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=KE5VHmGmkSpQrhwfg5NUyMzECumK9lsiHDg9dJyvLPk="
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Insulin</b>
            </h4>
            <h6>
              <b>
                Insulin is a hormone created by your pancreas that controls the
                amount of glucose in your bloodstream at any given moment. It
                also helps store glucose in your ...
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>

            <Link to="/Booking">
              <button>Bookit</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/458563393/photo/aspirin-bottle-with-tablets-spilling-out.jpg?s=612x612&w=0&k=20&c=MuRtWxOfp_rA2hWvVxAoJEeOcaWFIQ1xqtieh-W5iG8="
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Aspirin</b>
            </h4>

            <h6>
              <b>
                Aspirin is a common drug for relieving minor aches, pains, and
                fevers. People also use it as an anti-inflammatory or a blood
                thinner. People can buy aspirin ...
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>

            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/490758634/photo/generic-pack-of-statins.jpg?s=612x612&w=0&k=20&c=ZouaI7Oi4AZCAeq98XafmiciI362iTA5qUbtpfcMzco="
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Statin</b>
            </h4>

            <h6>
              <b>
                Statins are drugs that can lower your cholesterol. They work by
                blocking a substance your body needs to make cholesterol.
                Lowering cholesterol isn't the ...
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.shutterstock.com/image-photo/kyiv-ukrainejune-20-2018-diuretic-260nw-1233217231.jpg"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Dieutric</b>
            </h4>

            <h6>
              <b>
                Diuretics are drugs that can increase the amount of water and
                sodium that is excreted in the urine. There are several classes
                of diuretics, each with a ...
              </b>
            </h6>

            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
              
      </div>

      <h2 className="Services-heading">Lab Tests</h2>

      <div className="Services">
        <div className="card">
          <img
            src="https://www.shutterstock.com/image-photo/hands-lab-technician-tube-blood-260nw-441264445.jpg"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Blood Lab Test</b>
            </h4>
            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://c8.alamy.com/zooms/9/4145321ac9a34a679777ab01579750f9/2j38f8w.jpg"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Anti CCP ACCP Test</b>
            </h4>
            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.istockphoto.com/id/508212846/photo/amylase-test.jpg?s=612x612&w=0&k=20&c=Sk-yVST_gNWwnV588uW5OEaF_6zBh375n7Myy6VhQ_0="
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Amylase Test</b>
            </h4>
            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <img
            src="https://www.shutterstock.com/image-photo/aldolase-test-medical-check-tube-260nw-2167391597.jpg"
            alt="Avatar"
          />
          <div className="container">
            <h4>
              <b>Aldolase Test</b>
            </h4>
            <h4>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </h4>
            <Link to="/Booking">
              <button>Book it</button>
            </Link>
          </div>
        </div>
              
      </div>

      <h2 className="Services-heading">Search the Centre</h2>
      <Search />
    </>
  );
}

export default Homepage;
