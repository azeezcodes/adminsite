import React from 'react'
import Card from './NoteCard/NoteCard'
import { courses } from '@/constants/courses'

const Notes = () => {
    const [data, setData] = React.useState(courses)
  return (
      <div className='bg-white'>
          <div className  = "flex justify-between items-center p-4">
              <h3 className='text-primary font-semibold text-[1.1rem]'>Recent Notes</h3>
              <h3 className='underline text-primary text-[.8rem]'>See All</h3>
          </div>
          <div>
              {data.map((item, index) => {
                  return <Card key={index} subject={item.subject} desc={item.desc} icon={item.icon} handleOpen={() => console.log('open')} />
                })}
          </div>
          
    </div>
  )
}

export default Notes