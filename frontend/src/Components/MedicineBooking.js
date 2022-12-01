import React from "react";
import "../CSS/MedicineBooking.css";

function MedicineBooking() {
  return (
    <>
      <div className="ProductPage">
        <div className="ProductImage">
          <img
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            alt="Avatar"
          />
        </div>

        <div className="ProductDetails">
          <h1>
            <b> Insulin</b>
          </h1>

          <h3>
            Insulin is a hormone created by your pancreas that controls the
            amount of glucose in your bloodstream at any given moment. It also
            helps store glucose in your ...
          </h3>

          <h4>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </h4>

          <a href="Checkout">
            <button onClick={(e)=>{
              alert("Your Medicine is Requested")
            }}>Checkout</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MedicineBooking;
