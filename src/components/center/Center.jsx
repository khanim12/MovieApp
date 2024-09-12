import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import './center.css'
function Center() {
  return (
    <div className='flex gap-6 text-white my-10 items-center  '>
          <h5>Content Lists as per your Mood <span className='underline font-bold'>Thug Life</span></h5>
      <button className="center-btn flex gap-2 items-center">
        <FilterListIcon />
              Filter
          </button>
    </div>
  )
}

export default Center
