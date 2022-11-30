import React from "react";

import { Join, Monthly, WhyUs } from "../../components";

import "./styles.scss";

export const PriceLayout = () => {
  return (
    <div id="price-layout-container">
      <Join />
      <Monthly />
      <WhyUs />
    </div>
  );
};
