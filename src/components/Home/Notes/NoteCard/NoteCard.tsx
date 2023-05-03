import { courses } from '@/constants/courses';
import Image from 'next/image'
import React, {FC, useState} from 'react'


export interface ICardProps {
    subject: string;
    desc: string;
    icon: string;
    handleOpen: () => void;

}


const Card: FC<ICardProps> = ({ subject, desc, icon, handleOpen }) => {


    

    

    
  return ( 
      <div className="relative card1 cursor-pointer transition-all duration-200 hover:shadow-lg border-[1px] rounded-[5px] border-boderGrey">
          <div className="wrapper px-4 py-2 flex justify-between items-start">
              <div className="left flex items-start">
                  <div className="icon mt-[.4rem] mr-4">
                      <Image src={`static/images/home/svgs/${icon}.svg`} width= {24} height = {24} alt="card icon" />
                  </div>
                  <div className="text">
                      <h3 className='text-primary font-semibold'>{subject}</h3>
                      <p className='w-[90%] text-[.8rem]'>{desc}</p>
                  </div>
              </div>
                <Image src={`/star.svg`} width={20} height={20} alt="card star" />
          </div>
          
    </div>
  )
}

export default Card


