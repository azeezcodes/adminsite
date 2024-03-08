import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Research = () => {
   return (
      <div>
         <div className=" w-full mx-auto">
            <h3 className="text-[1.5rem] text-main">Search The Web</h3>
            <div className="search bg-white mt-6 rounded-[6px] pl-2 pr-4 flex justify-between items-center border-2 py-2">
               <input
                  type="text"
                  className="w-full border-none outline-none"
                  placeholder="Search..."
               />
               <BsSearch className="ml-2" />
            </div>

            <h3 className="mt-6 text-[1.1rem]">Search Results</h3>
            <div className="mt-4 border-[1px] py-2 px-4 rounded-md">
               <div className="link text-[.8rem] mb-1 text-[#1C3144]">
                  http://php.vulnweb.com/
               </div>
               <h3 className="text-[1.1rem] my-1">
                  Consectetur Adipiscing elit.
               </h3>
               <p className="text-[.9rem] text-[#4E5460]">
                  A new software version is available for downloadconsectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet
                  commo do nulla facilisi nullam{" "}
               </p>

               <div className="link pt-2 flex items-center">
                  <span className="text-[.8rem] mr-2 text-[#1C3144]">
                     Read more
                  </span>
                  <span>
                     <AiOutlineRight className="text-[#1C3144] text-[.8rem]" />
                  </span>
               </div>
            </div>
            <div className="mt-4 border-[1px] py-2 px-4 rounded-md">
               <div className="link text-[.8rem] mb-1 text-[#1C3144]">
                  http://php.vulnweb.com/
               </div>
               <h3 className="text-[1.1rem] my-1">
                  Consectetur Adipiscing elit.
               </h3>
               <p className="text-[.9rem] text-[#4E5460]">
                  A new software version is available for downloadconsectetur
                  adipiscing elit duis tristique sollicitudin nibh sit amet
                  commo do nulla facilisi nullam{" "}
               </p>

               <div className="link pt-2 flex items-center">
                  <span className="text-[.8rem] mr-2 text-[#1C3144]">
                     Read more
                  </span>
                  <span>
                     <AiOutlineRight className="text-[#1C3144] text-[.8rem]" />
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Research;
