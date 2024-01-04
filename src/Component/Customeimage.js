import React from 'react'

const Customeimage = ({imgSrc,pt}) => {
  return (
    <div>
      <div className='custom-image' style={{paddingTop:pt}}>
        <img src={imgSrc} alt="" />
      </div>
    </div>
  )
}

export default Customeimage
