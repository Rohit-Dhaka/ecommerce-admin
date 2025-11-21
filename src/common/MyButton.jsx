import React from 'react'

const MyButton = ({buttonnmae , type='button' , onClick, className=""}) => {
  return (
    <button type={type} onClick={onClick} className='bg-black text-white py-2 px-4 font-poppins'>{buttonnmae}</button>
  )
}

export default MyButton