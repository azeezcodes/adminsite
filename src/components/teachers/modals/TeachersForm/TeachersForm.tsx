import React from 'react'

const TeachersForm = () => {
  return (
      <div className=' w-full'>
          <div className=' mb-8 w-full'>
            <h3 className='text-[1rem]'>Full Name</h3>
            <input className='w-full  rounded-md border-[1px] px-4 py-2' type="text" placeholder='Enter Full Name Here ...'/>   
          </div>
          <div className='mb-8 w-full'>
            <h3 className='text-[1rem]'>Email</h3>
            <input className='w-full  rounded-md border-[1px] px-4 py-2' type="text" placeholder='Enter Full Name Here ...'/>   
          </div>
          <div className='mb-8 w-full'>
            <h3 className='text-[1rem]'>Phone Number</h3>
            <input className='w-full  rounded-md border-[1px] px-4 py-2' type="text" placeholder='Enter Full Name Here ...'/>   
          </div>

          <button disabled className='bg-[#888989] w-full py-2 rounded-sm text-white'>
              Create
          </button>
    </div>
  )
}

export default TeachersForm