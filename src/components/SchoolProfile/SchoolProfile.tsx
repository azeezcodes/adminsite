import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import Image from "next/image";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputField from "../InputField/InputField";
import ButtonType from "../ButtonType/ButtonType";



type Props = {}

const SchoolProfile = (props: Props) => {
   const [age, setAge] = React.useState("");
  return (
     <div>
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
                 Upload school logo
              </button>
           </div>
        </div>

        <form>
           <div>
              <label className="block mb-2 text-[.9rem]">School Name</label>
              <input
                 type="text"
                 className="border-[1px] border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4 w-[100%]"
                 placeholder="name"
              />
           </div>
           <div className="mt-4">
              <label className="block mb-2 text-[.9rem]">School Address</label>
              <input
                 type="text"
                 className="border-[1px] border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4 w-[100%]"
                 placeholder="Enter school address"
              />
           </div>

           {/* .... */}
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
                 <label className="block mb-2 text-[.9rem]">
                    Local Government, State
                 </label>
                 <input
                    type="text"
                    className="border-[1px] w-full border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4"
                    placeholder="Enter school address"
                 />
              </div>
           </div>
           {/* .... */}
           <div className="flex flex-col md:flex-row md:gap-8 md:my-12 w-[100%] justify-between ">
              <div className="w-full mt-4 md:mt-0">
                 <label className="block mb-2 text-[.9rem]">
                    Education Level
                 </label>
                 <select className="block bg-white border  box-border  border-[#e0e3e6] hover:border-[#e0e3e6] px-4 py-[10px] rounded-[6px] leading-tight focus:outline-none focus:border-[#e0e3e6] w-full ">
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                 </select>
              </div>
              <div className="w-full mt-4 md:mt-0">
                 <label className="block mb-2 text-[.9rem]">
                    Registration Status
                 </label>
                 <select className="block bg-white border  box-border  border-[#e0e3e6] hover:border-[#e0e3e6] px-4 py-[10px] rounded-[6px] leading-tight focus:outline-none focus:border-[#e0e3e6] w-full ">
                    <option value="registered">Registered</option>
                    <option value="not_registered">Not Registered</option>
                 </select>
              </div>
           </div>

           {/* ......... */}

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

export default SchoolProfile