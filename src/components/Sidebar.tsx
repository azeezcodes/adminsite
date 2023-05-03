import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";


type Props = {};

const Sidebar = () => {
   const router = useRouter();
   return (
      <div className="bg-[#242F9B] h-[100vh] fixed pt-[3rem] w-[20%]">
         <div className="flex w-[100%]  pl-[42px]">
            <Link href="/">
               <Image
                  src="/Logo.png"
                  width={130}
                  height={130}
                  alt="logo"
                  className=""
                  loading="lazy"
               />
            </Link>
         </div>

         <div className="flex flex-col mt-6 ">
            <div
               className={` ${
                  router.pathname === "/"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               <Image src="/element4.svg" alt="" width={20} height={20} />
               <Link href="/">
                  <p className="text-white font-normal text-[1rem] ">
                     Dashboard
                  </p>
               </Link>
            </div>

            <div
               className={` ${
                  router.pathname === "/notes"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               <Image src="/book1.svg" alt="" width={20} height={20} />
               <Link href="/notes">
                  <p className="text-white font-normal text-[1rem]">Note</p>
               </Link>
            </div>
            <div
               className={` ${
                  router.pathname === "/teachers"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               <Image src="/profile2user.svg" alt="" width={20} height={20} />
               <Link href="/teachers">
                  {" "}
                  <p className="text-white font-normal text-[1rem] ">
                     Teachers
                  </p>
               </Link>
            </div>
            <div
               className={` ${
                  router.pathname === "/posthistory"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               <Image src="/people.svg" alt="" width={20} height={20} />
               <Link href="/posthistory">
                  {" "}
                  <p className="text-white font-normal text-[1rem] ">
                     Social Post
                  </p>
               </Link>
            </div>
            <div
               className={` ${
                  router.pathname === "/announcement"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               <Image src="/microscope.svg" alt="" width={20} height={20} />
               <Link href="/announcement">
                  {" "}
                  <p className="text-white font-normal text-[1rem] ">
                     Announcement
                  </p>
               </Link>
            </div>
            <div
               className={` ${
                  router.pathname === "/setting"
                     ? "flex gap-4 bg-[#FF6E31] items-center h-[56px] pl-[42px] "
                     : " flex gap-4 hover:bg-[#FF6E31] items-center h-[56px] pl-[42px]"
               }`}
            >
               {" "}
               <Image src="/setting2.svg" alt="" width={20} height={20} />
               <Link href="/setting">
                  {" "}
                  <p className="text-white font-normal text-[1rem] ">Setting</p>
               </Link>
            </div>
         </div>

         {/* ...... */}
         <div className="rounded-lg bg-[#4E57AE] flex flex-col  items-center px-[2rem] h-[200px]  w-[210px] mx-auto mt-12 ">
            <p className="text-white font-[700] text-[1.1rem] my-4">Upgrade</p>
            <p className="text-white font-light text-[0.7rem] text-center">
               Duis sed rutrum massa cras elit. Dictumst curabitur egestas a sit
               egestas habitant mauris id
            </p>
            <button className="bg-[#FF6E31] text-white py-2 px-10 my-auto  ">
               UPGRADE
            </button>
         </div>
      </div>
   );
};

export default Sidebar;
