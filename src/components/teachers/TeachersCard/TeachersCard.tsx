import Image from 'next/image'
import React from 'react'

const TeachersCard = ({open}: any) => {
  return (
<div onClick={open} className="relative card1 cursor-pointer transition-all duration-200 hover:shadow-lg border-[1px] rounded-[5px] border-boderGrey">
          <div className="wrapper p-2 flex justify-between items-start">
              <div className="left flex items-start">
                  <div className="icon mt-[.4rem] mr-4">
                      <Image src={`/static/images/home/avatar1.png`} width= {30} height = {30} alt="card icon" />
                  </div>
                  <div className="text">
                      <h3 className='text-[#2F327D] text-[1rem] pb-1'>Matthew Olaoluwa</h3>
                      <p className='text-[.8rem] text-[#7A7A7A]'>felicia.reid@example.com</p>
                  </div>
              </div>
                <Image src={`/star.svg`} width={20} height={20} alt="card star" />
          </div>
          
    </div>
  )
}

export default TeachersCard