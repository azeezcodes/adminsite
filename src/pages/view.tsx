"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import EditorSidebarComment from "@/components/EditorSidebar/EditorSidebarComment";
import { BsSearch } from "react-icons/bs";
import Appbar from "@/components/Appbar";
import SidebarTabs from "@/components/SidebarTabs/SidebarTabs";

const Editorpage = dynamic(() => import("../components/Editor/Editor"), {
   ssr: false,
});

const view = () => {
  return (
    <div>
       <Appbar />

        <div className="w-full flex h-[100vh]">
        <div className="w-[24%] border-r border-r-[#D2D2D2]">
           
         </div>
         <div className="w-[50%] border-r border-r-[#D2D2D2]">
            <Editorpage />
         </div>
         <div className="hidden lg:block lg:w-[26%] border-r  h-[100vh] overflow-auto ">
              <SidebarTabs />
        </div>
      </div>
    </div>
  )
}

export default view