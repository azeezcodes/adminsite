import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { IoIosReturnRight, IoIosSend } from "react-icons/io";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Booksvgcomp from "@/datafile/Booksvgcomp";

type Props = {};

const Postpreview = (props: Props) => {
   return (
      <div className="px-[3rem]">
         <p
            className="font-[400] text-[1.8rem] mt-[3rem] text-[#2F327D]">
            Post Preview
          
         </p>

         <div className="entirebox shadow-md mt-6 pt-4">
            <div className="flex flex-row justify-between px-[14px] holdingbothside">
               <div className="flex flex-row gap-2 items-center">
                  <img
                     src="/images/girlround.png"
                     alt="girlimg"
                     className="w-14 h-14 rounded-full"
                  />
                 
                  <div className="flex flex-col leading-4">
                     <p className="font-[600]  text-[.8rem] text-[#6e6e6e]">
                        Shireen Amin . 2st
                     </p>
                     <p className="font-[400]  text-[.7rem] text-[#6e6e6e]">
                        Ui/Ux Developer
                     </p>
                     <p className="font-[400]  text-[.7rem] text-[#6e6e6e]">
                        17h
                     </p>
                  </div>
               </div>
               <div>
                  <MoreVertIcon sx={{ fontSize: ".9rem", color: "#404040" }} />
               </div>
            </div>
            <div className="px-[14px] mt-3">
               <p className="font-[400] text-[12px] ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.{" "}
               </p>
            </div>

            <div className="img mt-4 ">
               <img
                  src="/images/imagepre.png"
                  alt="timeimg"
                  className="object-contain"
               />{" "}
            </div>

            <div className="likeiconrow flex flex-row justify-between px-[14px] mt-6 pb-5">
               <div className="flex flex-col items-center">
                  <AiOutlineLike className="text-[#585C60]" />
                  <p className="font-[400] text-[.6rem] text-[#585C60]">Like</p>
               </div>
               <div className="flex flex-col items-center">
                  <BsChatText className="text-[#585C60]" />
                  <p className="font-[400] text-[.6rem] text-[#585C60]">
                     Comment
                  </p>
               </div>
               <div className="flex flex-col items-center">
                  <IoIosReturnRight className="text-[#585C60]" />
                  <p className="font-[400] text-[.6rem] text-[#585C60]">
                     Share
                  </p>
               </div>
               <div className="flex flex-col items-center">
                  <IoIosSend className="text-[#585C60]" />
                  <p className="font-[400] text-[.6rem] text-[#585C60]">Send</p>
               </div>
            </div>
         </div>

         <div className="flex flex-row items-center w-full justify-between mt-8">
            <MdOutlineArrowBackIosNew />
            <img src="/images/linkedin.png" alt="" />
            <img src="/images/facebook.png" alt="" />
            <img src="/images/twitter.png" alt="" />
            <img src="/images/instagram.png" alt="" />
            <MdOutlineArrowForwardIos />
         </div>
      </div>
   );
};

export default Postpreview;
