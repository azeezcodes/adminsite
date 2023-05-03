import React from 'react'
import {data } from "./../datafile/history"

type Props = {}

const HistoryMobile = (props: Props) => {
  return (
     <div className="px-2 py-4  bg-white h-[75vh] overscroll-auto ">
        <p className="font-medium text-[#2F327D] text-[1.7rem] ">
           Post History
        </p>
        <div className="px-2">
           {data.map((data, index) => (
              <div key={index} className="flex gap-3 mt-4 hover:bg-slate-300 ">
                 <div className="border  border-gray-100 rounded-full grid place-content-center p-3 max-h-max max-w-max">
                    {" "}
                    <img
                       src={data.img}
                       width="18px"
                       height="18px"
                       alt="image"
                       className=" object-contain "
                    />
                 </div>
                 <div className="flex flex-col">
                    <p className="font-bold  truncate text-[0.9rem] w-[18rem]">
                       {" "}
                       {data.postContent}
                    </p>
                    <p className="text-[.7rem] mt-1">{data.time}</p>
                 </div>
              </div>
           ))}
        </div>
     </div>
  );
}

export default HistoryMobile