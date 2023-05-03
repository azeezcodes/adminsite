import { Avatar, Badge } from "@mui/material";
import React, { useEffect } from "react";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Image from "next/image";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
   const [screenSize, setScreenSize] = React.useState(0);
   useEffect(() => {
      setScreenSize(window.innerWidth);
   }, []);

   useEffect(() => {
      window.addEventListener("resize", () => {
         setScreenSize(window.innerWidth);
      });
   }, []);

   return (
      <div className="bg-primary fixed lg:bg-white w-full lg:w-[80%] h-[9.5vh] z-10">
         <div className="h-full w-[92%] mx-auto lg:bg-white flex justify-between items-center">
            <div className="right">
               <div className="lg:hidden">
                  <Image
                     src="/Logo.png"
                     width={80}
                     height={80}
                     alt="logo"
                     className=""
                  />
               </div>
               <div className="hidden lg:block border-[1px] border-gray-300 py-1 px-2 rounded-sm">
                  <input
                     type="text"
                     placeholder="Search anything here..."
                     className="lg:w-[16rem] md:w-[12rem] text-[.8rem] py-2 border-none outline-none"
                  />
                  <SearchOutlinedIcon className="text-gray-300"  />
               </div>
            </div>
            {screenSize >= 1024 ? (
               <div className="left flex items-center">
                  <div>
                     <div className="relative">
                        <div className="absolute h-3 w-3 bg-red-600 rounded-full border-white border-[2px] -right-1 top-1"></div>
                        <CircleNotificationsIcon
                           sx={{ width: 34, height: 34 }}
                           color="action"
                           className="text-primary"
                        />
                     </div>
                  </div>
                  <div className="lg:ml-12 md:ml-8 flex items-center">
                     <Avatar
                        alt="Avatar"
                        src="/avatar06.png"
                        sx={{ width: 36, height: 36 }}
                     />
                     <div className="ml-3">
                        <h3 className="font-[700] text-[.8rem]">
                           Mark Villiams
                        </h3>
                        <p className="text-[.8rem]">mark@site.com</p>
                     </div>
                  </div>

                  {/* {screenSize < 768 && (
                <div className="flex">
                  <SearchOutlinedIcon  className='text-white'/>
                  <MenuOutlinedIcon  className='ml-4 text-white'/>
                </div>  
            )} */}
               </div>
            ) : (
               <div className="left flex items-center">
                  <div className="flex">
                     <SearchOutlinedIcon className="text-white" />
                     <MenuOutlinedIcon className="ml-4 text-white" />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Header;
