import React, { Component } from "react";

const Slider = props => {
  const { title, subtitle } = props;
  return (
    <section>
      <div>
        <h1> {title}</h1>
        <h3> {subtitle}</h3>
      </div>
    </section>
  );
};

export default Slider;
