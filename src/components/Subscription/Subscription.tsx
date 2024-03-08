import React from "react";
import CheckIcon from "@mui/icons-material/Check";

type Props = {};

const Subscription = (props: Props) => {
   return (
      <div>
         <p className="text-center mt-[3rem] text-[#2F327D] font-[700] text-[2rem]">
            The Right Plans Just for You
         </p>
         <p className="mt-2 text-center  font-[400] text-[1rem]">
            Lorem ipsum dolor sit amet consectetur. Dolor aenean aliquam sed{" "}
            <br />
            eget nisi pellentesque nullam porttitor .
         </p>

         {/* ;;;;;;;;; */}
         <div className="flex md:flex-row flex-col items-center md:justify-between gap-8 md:gap-0 p-auto w-full mt-8 ">
            <div className="group w-[16rem] h-[27rem] rounded-[1.5rem] border border-[#D2D2D2] px-6 py-6  text-[#2F327D] hover:bg-[#2F327D] hover:-translate-y-2 transition duration-500 ease-in-out ">
               <p className="font-[700] text-[20px] mt-10 group-hover:text-white ">
                  Bronze
               </p>
               <div className="flex flex-col text-[#434343] group-hover:text-white h-[50%] font-[400] text-[.95rem] justify-between pr-2 mt-4 ">
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p className="">Add up to 20 teachers</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>20 notes and 20 summaries</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>1,100 words per note</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>Access to Facebook, Twitter</p>
                  </div>
               </div>

               <p className="font-[400] text-[1rem] group-hover:text-white  mt-4 ">
                  $<span className="font-[700] text-[25px]">123</span>/month{" "}
               </p>
            </div>

            {/* ......... */}
            <div className="group w-[16rem] h-[27rem] rounded-[1.5rem] border border-[#D2D2D2] px-6 py-1  text-[#2F327D] hover:bg-[#2F327D] hover:-translate-y-2 transition duration-500 ease-in-out ">
               <p className="font-[700] text-[20px] mt-10 group-hover:text-white ">
                  Silver
               </p>
               <div className="flex flex-col text-[#434343] group-hover:text-white h-[50%] font-[400] text-[.95rem] justify-between pr-2 mt-4 ">
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p className="">Add up to 40 teachers</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>40 notes and 40 summaries</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>2,200 words per note</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>Access to Facebook, Twitter</p>
                  </div>
               </div>

               <p className="font-[400] text-[1rem] group-hover:text-white  mt-4 ">
                  $<span className="font-[700] text-[25px]">123</span>/month{" "}
               </p>
               <button className="w-full h-[40px] mt-3 rounded-lg bg-[#FBE2D6] group-hover:bg-[#7D9498] text-[#1C3144] group-hover:text-white font-[700]">
                  Upgrade
               </button>
            </div>
            {/* ......... */}
            <div className="group w-[16rem] h-[27rem] rounded-[1.5rem] border border-[#D2D2D2] px-6 py-1  text-[#2F327D] hover:bg-[#2F327D] hover:-translate-y-2 transition duration-500 ease-in-out ">
               <div className="flex justify-between items-center  ">
                  <p className="font-[700] text-[20px] mt-10 group-hover:text-white ">
                     Gold
                  </p>
                  <div className="  mt-10 px-4 py-3 border border-gray-100 rounded-md h-[1.3rem] group-hover:bg-white grid place-content-center ">
                     <p className="text-[#7D9498] font-semibold text-[.8rem]">
                        Popular plan
                     </p>
                  </div>
               </div>
               <div className="flex flex-col text-[#434343] group-hover:text-white h-[50%] font-[400] text-[.95rem] justify-between pr-2 mt-4 ">
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p className="">Add up to 80 teachers</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>80 notes and 80 summaries</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>4,400 words per note</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>Access to Facebook, Twitter</p>
                  </div>
               </div>

               <p className="font-[400] text-[1rem] group-hover:text-white  mt-4 ">
                  $<span className="font-[700] text-[25px]">123</span>/month{" "}
               </p>
               <button className="w-full h-[40px] mt-3 rounded-lg bg-[#FBE2D6] group-hover:bg-[#7D9498] text-[#1C3144] group-hover:text-white font-[700]">
                  Upgrade
               </button>
            </div>
            {/* ......... */}
            <div className="group w-[16rem] h-[27rem] rounded-[1.5rem] border border-[#D2D2D2] px-6 py-1  text-[#2F327D] hover:bg-[#2F327D] hover:-translate-y-2 transition duration-500 ease-in-out ">
               <p className="font-[700] text-[20px] mt-10 group-hover:text-white ">
                  Diamond
               </p>
               <div className="flex flex-col text-[#434343] group-hover:text-white h-[50%] font-[400] text-[.95rem] justify-between pr-2 mt-4 ">
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p className="">Add up to 160 teachers</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>160 notes and 160 summaries</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>8,800 words per note</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CheckIcon sx={{ fontSize: "13px" }} />
                     <p>Access to Facebook, Twitter</p>
                  </div>
               </div>

               <p className="font-[400] text-[1rem] group-hover:text-white  mt-4 ">
                  $<span className="font-[700] text-[25px]">123</span>/month{" "}
               </p>
               <button className="w-full h-[40px] mt-3 rounded-lg bg-[#FBE2D6] group-hover:bg-[#7D9498] text-[#1C3144] group-hover:text-white font-[700]">
                  Upgrade
               </button>
            </div>
         </div>
         {/* ;;;;;;;;; */}
      </div>
   );
};

export default Subscription;
