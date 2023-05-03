import Image from 'next/image'
import React from 'react'

const SubjectRow = () => {
  return (
      <div>
          <div className="wrpper py-4 grid grid-cols-8 border-[1px] rounded-md my-4">
              <div className='flex col-span-2 ml-8'>
                <Image src={`static/images/home/svgs/vector4.svg`} width={24} height={24} alt="card icon" />

                 <h3 className='ml-4'>English Language</h3>

            </div>
            <div className='col-span-2'>Lorem ipsum dolor em...</div>
            <div className='col-span-2'>21 Jan 2021, 12:20 PM</div>
              <div className='col-span-2 flex justify-between items-center pr-4'>
                <h3>Samuel Ojukwu</h3>
                <Image src={`/star.svg`} width={20} height={20} alt="card star" />
            </div>
           
          </div>
    </div>
  )
}

export default SubjectRow