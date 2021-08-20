import React from "react";
import ReactDOM from "react-dom";
import "./checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Checkout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <form action="">
            <input
              className="half-form"
              type="text"
              name="first_name"
              placeholder="First Name"
              required
            />

            <input
              className="half-form half-form-right"
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
            />
            <label>Email Address</label>
            <input
              className=""
              type="email"
              name="email"
              placeholder="Youremail@example.com"
              required
            />
            <label>Address</label>
            <input
              className=""
              type="text"
              name="address1"
              placeholder="123 Main St"
              required
            />
            <label>Address 2 (Optional)</label>
            <input
              className=""
              type="text"
              name="address2"
              placeholder="Apartment or suite"
              required
            />

            <div class="form-group-inline">
              <div className="country">
                <label>Country</label>
                <select
                  class="form-select address-select"
                  aria-label="Default select example"
                >
                  <option selected>Choose ...</option>
                  <option value="1">Nepal</option>
                  <option value="2">Australia</option>
                  <option value="3">Korea</option>
                </select>
              </div>
              <div className="state ">
                <label>State</label>
                <select
                  class="form-select address-select "
                  aria-label="Default select example"
                >
                  <option selected>Choose ...</option>
                  <option value="1">Nepal</option>
                  <option value="2">Australia</option>
                  <option value="3">Korea</option>
                </select>
              </div>
              <div className="zip">
                <label>Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                ></input>
              </div>
            </div>

            <div className="form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label className="form-check-label" for="flexCheckDefault">
                Shipping address is the Same as my billing address
              </label>
            </div>
            <div className="form-check tick">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked
              ></input>
              <label className="form-check-label" for="flexCheckChecked">
                Save this information for next time
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              ></input>
              <label className="form-check-label" for="exampleRadios1">
                Debit Card
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              ></input>
              <label className="form-check-label" for="exampleRadios2">
                Credit Card
              </label>
            </div>
            <div className="form-check tick">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
              ></input>
              <label className="form-check-label" for="exampleRadios3">
                Paypal
              </label>
            </div>

            <button type="submit" class="">
              Continue to Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
