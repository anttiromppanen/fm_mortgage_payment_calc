import React from "react";
import MortgageCalculatorForm from "./MortgageCalculatorForm";

function MortgageCalculator() {
  return (
    <div
      className="
    bg-white lg:rounded-3xl *:lg:rounded-3xl *:px-4 *:py-8 *:md:p-10 w-full max-w-[1010px] grid 
      lg:grid-cols-2
      "
    >
      <MortgageCalculatorForm />
      <div className="bg-userSlate900 text-white">MortgageCalculator</div>
    </div>
  );
}

export default MortgageCalculator;
