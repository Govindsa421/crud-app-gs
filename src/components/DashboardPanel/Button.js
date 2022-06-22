import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
const Button = ({setIsAdding}) => {
  return (
    <>
      <button
        onClick={() => setIsAdding(true)}
        className=" bg-primary tracking-wide font-semibold text-sm text-white flex items-center gap-2 px-3 py-2"
      >
        <PlusCircleIcon className="h-6 w-6" />
        Create New User
      </button>
    </>
  );
};

export default Button;
