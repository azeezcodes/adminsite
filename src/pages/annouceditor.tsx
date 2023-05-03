// import React from 'react'

// type Props = {}

// const annouceditor = (props: Props) => {
//   return (
//       <div>
          
//     </div>
//   )
// }

// export default annouceditor

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import RightSideBar from "@/components/EditorLeftSidebar/RightSideBar";
import { BsSearch } from "react-icons/bs";
import Header from "@/components/Header/Header";
import Appbar from "@/components/Appbar";
import SidebarTabs from "@/components/SidebarTabs/SidebarTabs";
import AnnounceSide from "@/components/EditorLeftSidebar/AnnounceSide";

const Editorpage = dynamic(() => import("../components/Editor/Editor"), {
   ssr: false,
});

type Props = {};

const annouceditor = (props: Props) => {
   return (
      <div className="">
         <Appbar />

         <div className="w-full flex h-[100vh]">
            <div className="w-full lg:w-[24%] md:w-[30%] border-r border-r-[#D2D2D2]  h-[95vh] scroll-smooth overscroll-y-auto overflow-y-auto">
               <AnnounceSide />
            </div>
            <div className="hidden md:block md:w-[70%]  lg:w-[50%] lg:border-r lg:border-r-[#D2D2D2]  h-[95vh] scroll-smooth overscroll-y-auto overflow-y-auto">
               <Editorpage />
            </div>
            <div className="hidden lg:block lg:w-[26%] border-r  h-[95vh] scroll-smooth overscroll-y-auto overflow-y-auto "></div>
         </div>
      </div>
   );
};

export default annouceditor;
