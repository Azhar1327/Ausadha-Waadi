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
            <b> Medicine Name</b>
          </h1>

          <h3>
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis suscipit ultrices Sample text. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
            sagittis suscipit ultrices Sample text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices
          </h3>

          <h4>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </h4>

          <a href="Checkout">
            <button>Checkout</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default MedicineBooking;
