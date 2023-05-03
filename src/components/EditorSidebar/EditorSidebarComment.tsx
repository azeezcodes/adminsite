import { Avatar } from '@mui/material'
import { BsSendFill } from 'react-icons/bs'
import React from 'react'

const EditorSidebarComment = () => {
  return (
    <div>
          <div className=''>
              <h3 className='text-[1.5rem] text-main'>Comments</h3>
              <div className='border-b-2 pb-6 mt-6'>
                  <div className='wrapper'>
                      <div className="avater flex">
                          <Avatar
                              alt="Cindy Baker"
                              src="/static/images/home/avatar.png"
                              sx={{ width: 38, height: 38, marginRight: 2 }}
                          />
                          <div className=''>
                              <h3 className='text-[1.1rem]'>Samuel Ojukwu</h3>
                                <p className='text-[.9rem]'>27th Jan 2021</p>
                          </div>

                      </div>
                      <div className='comment mt-4'>
                          <p className='text-[.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                      </div>
                      
                      <div className="input flex w-full bg-white justify-between pr-4 py-2 pl-2 items-center border-[1px] rounded-sm mt-8">
                          <input type="text" placeholder='Add a comment' className='text-[.8rem] w-full border-none outline-none' />
                          <BsSendFill className='text-primary ml-2'/>
                      </div>
                  </div>
              </div>
              <div className='mt-6'>
                  <div className='thread1'>
                      <div className="main">
                          <div className="avater flex">
                          <Avatar
                              alt="Cindy Baker"
                              src="/static/images/home/avatar.png"
                              sx={{ width: 38, height: 38, marginRight: 2 }}
                          />
                          <div className=''>
                              <h3 className='text-[1.1rem]'>Samuel Ojukwu</h3>
                                <p className='text-[.9rem]'>27th Jan 2021</p>
                          </div>

                      </div>
                      <div className='comment mt-4'>
                          <p className='text-[.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                          </div>
                          
                      
                      </div>
                      <div className="child ml-2 border-l-2 mt-4 pl-2 pt-2 ">
                          <div className="avater flex">
                          <Avatar
                              alt="Cindy Baker"
                              src="/static/images/home/avatar.png"
                              sx={{ width: 38, height: 38, marginRight: 2 }}
                          />
                          <div className=''>
                              <h3 className='text-[1.1rem]'>Samuel Ojukwu</h3>
                                <p className='text-[.9rem]'>27th Jan 2021</p>
                          </div>

                      </div>
                      <div className='comment mt-4'>
                          <p className='text-[.9rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                      </div>
                      
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default EditorSidebarComment