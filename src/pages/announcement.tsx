import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import { Divider } from "@mui/material";
import { note } from "@/datafile/note";
import AnnouncmentMob from "@/components/AnnounmentMobile/AnnouncmentMob";
import Link from "next/link";

type Props = {};
interface noteType {
   title: string;
   content: string;
   date: string;
   id: number;
}

const colors: string[] = [
   "#A81792",
   "#8B9245",
   "#069406",
   "#65217F",
   "#0128F8",
   "#BC2745",
   "#6C2238",
   "#D3B62B",
   "#BD0967",
];

const announcement = (props: Props) => {

   const [notes, setNotes] = useState(note);
    const [selectedPost, setSelectedPost] = useState<noteType | null>(note[0]);

    const handlePostClick = (data: noteType) => {
       setSelectedPost(data);
    };
   
   function getRandomColor(index: number): string {
      const colorIndex = index % colors.length;
      return colors[colorIndex];
   }

   return (
      <Layout>
         <div className="pt-12 pb-6 px-12 bg-bodyBg min-h-screen">
            {/* //mobile view */}
            <div className="max-sm:block hidden text-[5rem] ">
               <AnnouncmentMob />
               <button className="w-full h-[3rem] px-[2.5rem] py-[1rem] bg-[#2F327D] text-white font-[400] text-[1rem] rounded-md ">
                  New Announcement
               </button>
            </div>
            {/* //major view */}
            <div className="hidden md:block lg:block bg-white rounded-[10px]">
               <div className="flex justify-between items-center px-4 pt-4 box-border">
                  <p className="font-medium text-[#2F327D] text-[1.4rem]">
                     Announcements
                  </p>
                  <Link href="/annouceditor">
                     <button className="w-[15rem] h-[3.4rem] px-[2.5rem] py-[1rem] bg-[#2F327D] text-white font-[600] rounded-md ">
                        New Announcement
                     </button>
                  </Link>
               </div>
               <Divider sx={{ marginTop: "1rem" }} />
               <div className="flex w-full  ">
                  <div className="flex flex-col w-[40%] border-r h-[75vh] border-box overscroll-contain ">
                     {note.map((data, index) => (
                        <div
                           className="flex justify-start w-full box-border px-5 mt-6 gap-4"
                           key={data.id}
                           onClick={() => handlePostClick(data)}
                        >
                           <div
                              style={{ backgroundColor: getRandomColor(index) }}
                              className={` h-[2.5rem]  w-[2.5rem] items-center justify-center rounded-full flex flex-row `}
                           >
                              <h5 className="font-extrabold text-white">
                                 {data.title[0]}
                              </h5>
                           </div>
                           <div className=" flex flex-col gap-1  ">
                              <p className=" font-bold text-[#2F327D] text-[1em]">
                                 {data.title}
                              </p>
                              <p className="text-[#353535] font-light text-[.9rem] truncate w-[300px] whitespace-nowrap   ">
                                 {data.content}
                              </p>
                              <p className="font-normal text-[#353535] text-[.9em]">
                                 {data.date}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="flex w-[60%] box-border py-4 px-4  h-[75vh] border-box overscroll-contain">
                     {selectedPost ? (
                        <div>
                           <p className="text-[#2F327D] font-bold text-[1.2rem]">
                              {selectedPost.title}
                           </p>
                           <p className="text-[#1F2937] font-normal text-[0.9rem] mt-4">
                              {" "}
                              {selectedPost.content}
                           </p>
                        </div>
                     ) : (
                        <div>Select a post to view details</div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default announcement;
