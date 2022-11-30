import React from "react";

import "./styles.scss";

export const Monthly = () => {
  return (
    <div id="monthly-container">
      <h2>Monthly Subscription</h2>
      <div id="price-container">
        <span>$29</span>per month
      </div>
      <p>Full access for less than $1 a day</p>
      <button>Sign Up</button>
    </div>
  );
};
