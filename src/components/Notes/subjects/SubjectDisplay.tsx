import React from 'react'
import SubjectRow from './SubjectRow'

const SubjectDisplay = () => {
  return (
      <div className='h-screen'>
          <div className="header w-full mx-auto rounded-md bg-[#F9F8F9]">
              <div className='grid grid-cols-8 py-4'>
                  <h3 className='col-span-2 ml-8 text-[.9rem]'>SUBJECT</h3>
                  <h3 className='col-span-2 text-[.9rem]'>TOPIC</h3>
                  <h3 className='col-span-2 text-[.9rem]'>DATE</h3>
                  <h3 className='col-span-2 text-[.9rem]'>TEACHERS NAME</h3>
              </div>
          </div>
          <div className="body">
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
              <SubjectRow />
          </div>
    </div>
  )
}

export default SubjectDisplay