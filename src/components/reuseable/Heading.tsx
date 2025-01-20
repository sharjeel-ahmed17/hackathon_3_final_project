import React from 'react'

const Heading = ({title} : {title : string}) => {
  return (
    <h2 className='text-center capitalize'>{title}</h2>
  )
}

export default Heading