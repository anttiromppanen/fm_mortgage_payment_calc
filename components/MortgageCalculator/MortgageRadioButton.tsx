import { MortgageCalculatorFormInputs } from "@/types/types";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface MortgageRadioButtonProps {
  id: string;
  value: string;
  text: string;
  register: UseFormRegister<MortgageCalculatorFormInputs>;
}

function MortgageRadioButton({
  id,
  value,
  text,
  register,
}: MortgageRadioButtonProps) {
  return (
    <div className="flex flex-col">
      <div
        className="
        px-4 relative py-2 border-slate-400 border rounded-md hover:border-userLime
        flex items-center gap-x-6 radio-parent
        "
      >
        <input
          type="radio"
          id={id}
          value={value}
          className="
          appearance-none peer rounded-md absolute left-0 top-0 w-full h-full cursor-pointer
          "
          {...register("mortgageType")}
        />
        <div className="size-5 rounded-full relative pointer-events-none bg-red-500">
          <div
            className="
          shrink-0 rounded-full absolute left-0 top-0 border border-slate-900 w-full h-full peer-checked:border-userLime"
          />
        </div>
        <label
          htmlFor={id}
          className="text-lg cursor-pointer font-bold relative z-10"
        >
          {text}
        </label>
      </div>
    </div>
  );
}

export default MortgageRadioButton;
