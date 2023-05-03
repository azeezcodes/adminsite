import Image from 'next/image'
import React from 'react'

const TeachersProfile = () => {
  return (
      <div>
          <div className='pr-8'>
              <div className='flex justify-between items-center'>
                  <Image src={`/static/images/home/avatar1.png`} width={90} height={90} alt="card icon" />
                  <h3 className='text-red-600'>Delete Profile</h3>
              </div>

              <div className="profile flex mt-16 ">
                  <div className="left mr-8">
                      <div className="name mb-12">
                          <h3 className='text-[#3A3A3A] pb-1 text-[.9rem]'>Full Name</h3>
                          <h3 className = "font-[500">Emmanuel Yusuf</h3>
                      </div>
                      <div className="name mb-12">
                          <h3 className='text-[#3A3A3A] text-[.9rem] pb-1'>Email</h3>
                          <h3 className = "">emmanuel_yusuf@gmail.com</h3>
                      </div>
                      <div className="name mb-12">
                          <h3 className='text-[#3A3A3A] text-[.9rem] pb-1'>House Address</h3>
                          <h3 className = "">Number 10 ijaoye street jibowu, Lagos State.</h3>
                      </div>
                  </div>
                  <div className="right">
                      <div className="name mb-12">
                          <h3 className='text-[#3A3A3A] text-[.9rem] pb-1'>Gender</h3>
                          <h3 className = "">Male</h3>
                      </div>
                      <div className="name mb-12">
                          <h3 className='text-[#3A3A3A] text-[.9rem] pb-1'>Phone Number</h3>
                          <h3 className = "">08134504663</h3>
                      </div>
                      
                  </div>
              </div>
         </div>
    </div>
  )
}

export default TeachersProfile