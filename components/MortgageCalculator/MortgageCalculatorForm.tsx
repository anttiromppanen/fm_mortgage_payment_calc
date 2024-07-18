"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MortgageRadioButton from "./MortgageRadioButton";
import { MortgageCalculatorFormInputs } from "@/types/types";

const inputSpanStyles =
  "text-lg font-semibold py-2 px-4 bg-userSlate100 text-userSlate700";

function MortgageCalculatorForm() {
  const { register, handleSubmit } = useForm<MortgageCalculatorFormInputs>();
  const onSubmit: SubmitHandler<MortgageCalculatorFormInputs> = (data) =>
    console.log(data);

  return (
    <section className="text-userSlate900">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Mortgage Calculator</h1>
        <button type="button">Clear All</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
        <div className="flex flex-col input-parent">
          <label htmlFor="mortgageAmount">Mortgage Amount</label>
          <div>
            <span className={`rounded-l-md ${inputSpanStyles}`}>£</span>
            <input defaultValue="" {...register("mortgageAmount")} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-6">
          <div className="flex flex-col input-parent">
            <label htmlFor="mortgageTerm">Mortgage Term</label>
            <div>
              <input defaultValue="" {...register("mortgageTerm")} />
              <span className={`rounded-r-md ${inputSpanStyles}`}>years</span>
            </div>
          </div>
          <div className="flex flex-col input-parent">
            <label htmlFor="interestRate">Interest Rate</label>
            <div>
              <input defaultValue="" {...register("interestRate")} />
              <span className={`rounded-r-md ${inputSpanStyles}`}>%</span>
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="text-slate-500 mb-3">Mortgage Type</legend>
          <MortgageRadioButton
            id="field-repayment"
            value="repayment"
            text="Repayment"
            register={register}
          />
          <MortgageRadioButton
            id="field-interest-only"
            value="interest-only"
            text="Interest Only"
            register={register}
          />
        </fieldset>
        <button type="submit">Calculate Repayments</button>
      </form>
    </section>
  );
}

export default MortgageCalculatorForm;
