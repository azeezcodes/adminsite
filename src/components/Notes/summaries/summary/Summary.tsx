import Image from 'next/image'
import React from 'react'

const Summary = () => {
  return (
      <div className='w-full border-[1px] pb-2 px-4 pt-6'>
          <Image 
              alt="sumary"
              src="/static/images/notes/summary.png"
              width = {60}
              height={60}
              className = "mx-auto"
          />

         <div className="wrapper mt-8 flex justify-between items-center">
              <div className="left flex items-start">
                  <div className="icon mt-[.4rem] mr-4">
                      <Image src="/static/images/notes/summary.png" width= {24} height = {24} alt="card icon" />
                  </div>
                  <div className="text">
                      <h3 className='text-primary text-[.9rem] font-semibold'>Subject Summary</h3>
                      <p className='w-[90%] text-[.8rem]'>Micheal Olaoluwa</p>
                  </div>
              </div>
                <Image src={`/star.svg`} width={20} height={20} alt="card star" />
          </div>
    </div>
  )
}

export default Summary