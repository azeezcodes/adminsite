import React from 'react'
import Summary from './summary/Summary'

const Summaries = () => {
  return (
    <div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <Summary />
              <Summary />
              <Summary />
              <Summary />
              <Summary />
          </div>
    </div>
  )
}

export default Summaries