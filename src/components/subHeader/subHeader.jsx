import React from 'react'
import "./subHeader.css"
function subHeader({title}) {
  return (
    <div className="subTitle">
      <h2 className='title'>
        {title}

        <div className = "underline"> </div>
      </h2>
      
    </div>
  )
}

export default subHeader