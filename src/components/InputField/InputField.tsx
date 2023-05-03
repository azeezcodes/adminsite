import React, { FC } from "react";

export interface IInputFieldProps {
   label?: string;
   placeholder?: string;
}

const InputField: FC<IInputFieldProps> = ({ label, placeholder }) => {
   return (
      <div className="mt-6 md:mt-1">
         <label className="block mb-2 text-[.9rem]">{label}</label>
         <input
            type="text"
            className="border-[1px] box-border border-[#e0e3e6] outline-none rounded-[6px] py-2 px-4 w-[22rem]"
            placeholder={placeholder}
         />
      </div>
   );
};

export default InputField;
