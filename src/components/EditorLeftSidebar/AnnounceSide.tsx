

import { Checkbox } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import Slide from "./Slide";

const AnnounceSide = () => {
   return (
      <div className="px-2">
         <div className="w-[90%] mx-auto pb-28 mt-10">
            <h2 className=" text-main font-semibold text-[1rem] mt-4">Create Announcement</h2>
            <div className="text-box mt-6">
               <div className="text-wrapper flex justify-between">
                  <div className="post-des flex mb-1">
                     <h3 className="mr-2 text-[1.1rem] text-[#646464]">
                        Post Descriptions
                     </h3>
                     <img src="/icons/information-circle.svg" alt="info" />
                  </div>

                  <p>0/150</p>
               </div>
               <textarea
                  name=""
                  id=""               
                  className="px-2 pt-2 w-full h-30 border-[1px] border-rounded-md outline-rounded-md resize-none border-outline outline-outline"
               ></textarea>
            </div>


            {/* TONE OF VOICE   */}
            <div className="tone mt-8">
               <div className="text-wrapper flex justify-between mb-1">
                  <h3 className="mr-2 text-[1.1rem]  text-[#646464]">
                     Tone of Voice
                  </h3>
                  <p>0/3</p>
               </div>

               <div className="input-container w-full h-10 border-outline border-rounded-lg border-[1px] flex justify-between bg-white">
                  <input
                     type="text"
                     className="w-[80%] h-full pl-2 border-none outline-none"
                     placeholder=""
                  />
                  <img
                     src="/icons/chevron-down.svg"
                     alt=""
                     className="w-[1.4rem] mr-2"
                  />
               </div>

               <div className="tags mt-4 grid grid-cols-3 gap-4">
                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 1</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 2</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 3</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>
               </div>
            </div>
            {/* KEYWORDS  */}

            <div className="tone mt-8">
               <div className="text-wrapper flex justify-between mb-1">
                  <h3 className="mr-2 text-[1.1rem] text-[#646464]">
                     Keywords
                  </h3>
                  <p>0/5</p>
               </div>

               <div className="input-container w-full h-10 border-outline border-rounded-lg border-[1px] flex justify-between bg-white">
                  <input
                     type="text"
                     className="w-[80%] h-full pl-2 border-none outline-none"
                     placeholder=""
                  />
                  <img
                     src="/icons/chevron-down.svg"
                     alt=""
                     className="w-[1.4rem] mr-2"
                  />
               </div>

               <div className="tags mt-4 grid grid-cols-3 gap-4">
                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 1</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 2</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[hsla(0,0%,0%,0)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 3</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 4</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>

                  <div className="tag bg-[rgba(0,0,0,.06)] flex items-center justify-between rounded-2xl py-1">
                     <p className="text-[.9rem] pl-2">Tone 5</p>
                     {/* <img src="/icons/.svg" alt="" /> */}
                     <AiFillCloseCircle className="text-[rgba(0,0,0,.1)] mr-2" />
                  </div>
               </div>
            </div>

            {/* RANGE SLIDER  */}
            <div className="tone mt-8">
               <div className="text-wrapper flex justify-between mb-1">
                  <h3 className="mr-2 text-[1.1rem]">Placeholder</h3>
               </div>

               <Slide />
            </div>



            {/* SUBMIT BUTTON  */}

            <div className="buttonn">
               <button className="w-full h-10 bg-main text-white rounded-sm mt-14 flex items-center justify-center">
                  <p className="mr-1">Generate</p>
                  <img
                     src="icons/arrow-right.svg"
                     alt="arrow"
                     className="mt-[4px]"
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export default AnnounceSide;