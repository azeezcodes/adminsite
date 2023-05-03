import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import React from 'react'

const TopCards = () => {
    return (
        <div className='w-[92%] h-[11rem] md:h-[7rem] bg-white rounded-lg mx-auto p-2'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-full'>
                <div className='bg-[#DBEEFF] flex rounded-lg h-full'>
                    <div className='w-[90%] mx-auto bg-red400 flex items-start my-auto'>
                        <Image 
                            src="/static/images/home/sum2.png"
                            width={34}
                            height={34}
                            alt="card icon"
                        />
                        <div className='ml-4'>
                            <h3 className='text-[#2F327D] text-[.9rem]'>Total Teachers</h3>
                            <p className='text-[#2F327D] font-semibold text-[1.8rem]'>100</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F3F0F9] flex rounded-lg h-full'>
                    <div className='w-[90%] mx-auto bg-red400 flex items-start my-auto'>
                        <Image 
                            src="/static/images/home/sum1.png"
                            width={34}
                            height={34}
                            alt="card icon"
                        />
                        <div className='ml-4'>
                            <h3 className='text-[#2F327D] text-[.9rem]'>Total Teachers</h3>
                            <p className='text-[#2F327D] font-semibold text-[1.8rem]'>100</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#DBEEFF] flex rounded-lg h-full'>
                    <div className='w-[90%] mx-auto bg-red400 flex items-start my-auto'>
                        <Image 
                            src="/static/images/home/sum2.png"
                            width={34}
                            height={34}
                            alt="card icon"
                        />
                        <div className='ml-4'>
                            <h3 className='text-[#2F327D] text-[.9rem]'>Total Teachers</h3>
                            <p className='text-[#2F327D] font-semibold text-[1.8rem]'>100</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#F3F0F9] flex rounded-lg h-full'>
                    <div className='w-[90%] mx-auto bg-red400 flex items-start my-auto'>
                        <Image 
                            src="/static/images/home/sum1.png"
                            width={34}
                            height={34}
                            alt="card icon"
                        />
                        <div className='ml-4'>
                            <h3 className='text-[#2F327D] text-[.9rem]'>Total Teachers</h3>
                            <p className='text-[#2F327D] font-semibold text-[1.8rem]'>100</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

  ) 
}

export default TopCards