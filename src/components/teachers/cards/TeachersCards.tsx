import React from 'react'
import TeachersCard from '../TeachersCard/TeachersCard'

interface teachersCardsProps {
  open : () => void
}

const TeachersCards = ({open}: teachersCardsProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <TeachersCard open={ open} />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
          <TeachersCard />
    </div>
  )
}

export default TeachersCards