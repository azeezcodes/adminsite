import React from 'react'
import { note } from "@/datafile/note";
import Link from 'next/link';

type Props = {}



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

 function getRandomColor(index: number): string {
    const colorIndex = index % colors.length;
    return colors[colorIndex];
 }

const AnnouncmentMob = (props: Props) => {
  return (
     <div className="px-2 py-4  bg-white h-[75vh] overscroll-auto ">
        <p className="font-medium text-[#2F327D] text-[1.7rem] ">
           Post History
        </p>
        <div>
           {note.map((data, index) => (
              <div className="flex gap-3  mt-6 px-3" key={index}>
                 <div
                    style={{ backgroundColor: getRandomColor(index) }}
                    className="h-[2rem]  w-[2rem] items-center justify-center rounded-full flex flex-row"
                 >
                    <h5 className="font-extrabold text-white text-[.6rem]">
                       {data.title[0]}
                    </h5>
                 </div>
                 <div>
                    <Link href={`/announceview/${data.id}`}>
                       <p className="font-bold text-[#2F327D] text-[.9rem]">
                          {data.title}
                       </p>
                    </Link>
                    <p className="text-[#353535] font-light text-[.7rem] truncate w-[300px] whitespace-nowrap   ">
                       {data.content}
                    </p>
                    <p className="font-normal text-[#353535] text-[.6rem]">
                       {data.date}
                    </p>
                 </div>
              </div>
           ))}
        </div>
     </div>
  );
}

export default AnnouncmentMob