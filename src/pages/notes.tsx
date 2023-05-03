import Layout from '@/components/Layout/Layout'
import NotesTab from '@/components/Notes/tab/NotesTab'
import Image from 'next/image'
import React from 'react'

const Notes = () => {
  return (
      <Layout>
          <div className='bg-bodyBg min-h-screen w-full pt-4'>
            <div className="wrapper min-h-[90vh] w-[92%] py-4 px-6 mx-auto rounded-lg bg-white">
                <div className="header flex justify-between">
                    <h3 className='text-[#2F327D] text-[1.48rem]'>Teacher</h3>  
                      <button className='bg-[#2F327D] flex items-center rounded-[4px] text-white px-6 py-2 '>
                          <Image src="/notes.svg" className='mr-2' width= {18} height = {18} alt="card icon" />
                          <h3>
                            Create New Notes
                          </h3>
                      </button>  
                </div>  
                <NotesTab />   
            </div>
        </div>
    </Layout>
  )
}

export default Notes