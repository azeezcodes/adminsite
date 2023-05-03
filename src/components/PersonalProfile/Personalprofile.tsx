import {
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
   Radio,
   RadioGroup,
} from "@mui/material";
import React from 'react'
import Image from "next/image";
import InputField from "../InputField/InputField";
import ButtonType from "../ButtonType/ButtonType";

type Props = {}

const Personalprofile = (props: Props) => {
  return (
     <div className="w-full">
        <div className="avatar flex items-center my-4 mb-8">
           <div className="avatar__image mr-4">
              <Image
                 src="/profileImage.png"
                 width={140}
                 height={140}
                 alt="avatar"
              />
           </div>
           <div className="avatar__button">
              <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Change Profile Picture
              </button>
           </div>
        </div>

        <form className="md:w-[96%] lg:w-[70%]">
           <div className="flex flex-col md:flex-row justify-between">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Last Name" placeholder="Last Name" />
           </div>
           <div className="flex flex-col md:flex-row md:my-12 justify-between">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Phone Number" placeholder="Phone Number" />
           </div>
           <div className="flex flex-col md:flex-row justify-between">
              <InputField label="D.O.B" placeholder="DOB" />

              <div className="w-[22rem] mb-0 lg:mb-0 mt-4 md:mt-0">
                 <h2 className="block mb-1">Gender</h2>
                 <FormControl>
                    <RadioGroup
                       row
                       aria-labelledby="demo-row-radio-buttons-group-label"
                       name="row-radio-buttons-group"
                    >
                       <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                       />
                       <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                       />
                    </RadioGroup>
                 </FormControl>
              </div>
           </div>

           <div className="flex flex-col md:flex-row md:gap-8 md:my-12 w-[100%] justify-between ">
              <div className="w-full mt-4 md:mt-0">
                 <label className="block mb-2 text-[.9rem]">Country</label>
                 <select className="block bg-white border  box-border  border-[#e0e3e6] hover:border-[#e0e3e6] px-4 py-[10px] rounded-[6px] leading-tight focus:outline-none focus:border-[#e0e3e6] w-full ">
                    <option value="NIG">Nigeria</option>
                    <option value="GHA">Ghana</option>
                    <option value="ZAM">Zambia</option>
                 </select>
              </div>
              <div className="w-full mt-4 md:mt-0">
                 <label className="block mb-2 text-[.9rem]">Address</label>
                 <input
                    type="text"
                    className="border-[1px] w-full border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4"
                    placeholder="Enter school address"
                 />
              </div>
           </div>
           <div className="button mt-8">
              <ButtonType
                 content="Save Update"
                 variant="contained"
                 height=".5rem"
                 width="2rem"
              />
           </div>
        </form>
     </div>
  );
}

export default Personalprofile