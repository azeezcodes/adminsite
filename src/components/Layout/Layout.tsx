import React, { FC, ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar";

type LayoutProps = {
   children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
   return (
      <div className="w-full flex">
         <div className="hidden lg:block lg:w-[20%] bg-red-700 h-screen">
            <Sidebar />
         </div>
         <div className="w-full relative lg:w-[80%] ">
            <div className="relative mb-[8.5vh]">
               <Header />
            </div>
            {children}
         </div>
      </div>
   );
};

export default Layout;
