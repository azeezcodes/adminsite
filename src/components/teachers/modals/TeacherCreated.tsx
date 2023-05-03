import Image from 'next/image'
import React from 'react'

const TeacherCreated = () => {
  return (
    <div>
          <Image 
              src={`/static/images/teachers/complete.svg`}
              width={90}
              height={90}
              alt="card icon"
              className='mx-auto mb-8'
          />
          
          <p className='text-center w-[80%] mx-auto mb-8'>You’ve successfully created king as your new teacher</p>

          <button className='bg-[#2F327D] text-white w-full py-2 rounded-sm'>Okay</button>
    </div>
  )
}

export default TeacherCreated