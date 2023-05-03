import React from 'react'
import ButtonType from '../ButtonType/ButtonType';

type Props = {}

const Secruity = (props: Props) => {
  return (
     <form>
        <div className="w-[50%]">
           <label className="block mb-2 text-[.9rem]">Old Password </label>
           <input
              type="text"
              className="border-[1px] w-full border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4"
              placeholder="Enter old password here"
           />
        </div>
        <div className="w-[50%] mt-6">
           <label className="block mb-2 text-[.9rem]">New Password</label>
           <input
              type="text"
              className="border-[1px] w-full border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4"
              placeholder="Enter new password here"
           />
        </div>
        <div className="w-[50%] mt-6">
           <label className="block mb-2 text-[.9rem]">Confirm Password</label>
           <input
              type="text"
              className="border-[1px] w-full border-[#e0e3e6] box-border outline-none rounded-[6px] py-2 px-4"
              placeholder="Confirm password"
           />
        </div>
        <div className="button mt-8">
           <ButtonType
              content="Save Update"
              variant="contained"
              height=".5rem"
              width="2rem"
           />{" "}
        </div>
     </form>
  );
}

export default Secruity