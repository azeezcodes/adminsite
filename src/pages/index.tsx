import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout/Layout'
import TopCards from '@/components/Home/TopCards/TopCards'
import TableDisplay from '@/components/Home/Table/TableDisplay'
import Notes from '@/components/Home/Notes/Notes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='bg-bodyBg pt-6'>

        <TopCards />
        <div className='mt-4 flex flex-col-reverse lg:flex-row justify-between w-[92%] mx-auto'>
          <div className=' w-full lg:w-[66%]'>
            <TableDisplay />
          </div>
          <div className='bg- w-full lg:w-[32%]'>
            <Notes />
          </div>
        </div>
        
      </div>
    </Layout>
  )
}
