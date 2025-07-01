"use client";
import { foods, ui } from "../constants/emoji";

type FunButtonTypes = {
  label: string;
  takesNoParams: () => void;
  takesParamsReturns: (input: string) => string;
  takesParamsNoReturn: (input: string) => void;
};

const MyButton = ({
  label,
  takesNoParams,
  takesParamsNoReturn,
  takesParamsReturns,
}: FunButtonTypes) => {
  const passStrAndDisplay = takesParamsReturns(
    "Passed a string and displayed it"
  );

  return (
    <>
      <div>
        <button onClick={takesNoParams}>{label}</button>
      </div>
      <div>
        <button
          onClick={() => takesParamsNoReturn("Takes String but has No Return")}
        >
          Example of passing string and consoling
        </button>
      </div>

      <div>{passStrAndDisplay}</div>
      <div>{foods}</div>
      <div>{ui}</div>
    </>
  );
};

export default MyButton;
