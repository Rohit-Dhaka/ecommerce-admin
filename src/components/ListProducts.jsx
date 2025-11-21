import React from 'react'

const ListProducts = () => {
  return (
    <section>
      <div className="container">
        <h6 className='font-outfit pb-2 text-[#4B5563]'>All Products List</h6>
        <table className='w-full'>
          <tr className='border-solid border-[1px] bg-[#F3F4F6] '>
            <th className='font-outfit text-[#4B5563] py-1  text-start ps-2'>Image</th>
            <th className='font-outfit text-[#4B5563] text-start ps-2'>Name</th>
            <th className='font-outfit text-[#4B5563] text-start ps-2'>Category</th>
            <th className='font-outfit text-[#4B5563] text-start ps-2'>Price</th>
            <th className='font-outfit text-[#4B5563] text-start ps-2'>Action</th>
          </tr>
          <tr className='border-solid border-[1px] '>
            <td className='text-[#4B5563] font-outfit text-[14px] ps-2 py-1 mt-2'><img src="" alt="" /></td>
            <td className='text-[#4B5563] font-outfit text-[14px] ps-2 '>Kid Tapered Slim Fit Trouser</td>
            <td className='text-[#4B5563] font-outfit text-[14px] ps-2 '>Kids</td>
            <td className='text-[#4B5563] font-outfit text-[14px] ps-2 '>$38</td>
            <td className='text-[#4B5563] font-outfit text-[14px] ps-2 '>X</td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default ListProducts