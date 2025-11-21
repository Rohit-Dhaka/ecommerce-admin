import React, { useState } from "react";
import { useMyContext } from "../context/MyContext";


const AddProducts = () => {
  
  const {addproducts} =  useMyContext();
  

  const [formdata , setFormdata] = useState({name:'',description:'',category:'',subcategory:'',price:'',size:''})
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      formdata(addproducts)

    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <section>
      <div className="container">
        <form className="max-w-[525px] flex flex-col gap-3 items-start" onSubmit={handleSubmit}>
          <label className="font-outfit text-[#c2c2c2]">Upload Image</label>

          <label
            className="font-outfit text-[#c2c2c2] mb-2 inline-block"
            htmlFor="product"
            
          >
            Product name
          </label>
          <input
            type="text"
            id="product"
            value={formdata.name}
            onChange={(e) => setFormdata({...formdata, name:e.target.value})}
            placeholder="Type here"
            className="bg-white  w-full border-[1px] border-solid py-2 px-3 rounded-md border-[#c2c2c2]"
          />

          <label
            className="font-outfit text-[#c2c2c2] mb-2 inline-block"
            htmlFor="content"
          >
            Product description
          </label>
          <textarea
            placeholder="Write content here"
            id="content"
            value={formdata.description}
            onChange={(e) => setFormdata({...formdata, description:e.target.value})}
            className="bg-white  w-full border-[1px] border-solid py-2 px-3 rounded-md border-[#c2c2c2]"
          ></textarea>

          <div className="flex gap-8">
            <div className="flex flex-col">
              <label
                className="font-outfit text-[#c2c2c2] mb-2 inline-block text-nowrap"
                htmlFor="category"
              >
                Product category
              </label>
              <select
                value={formdata.category}
                onChange={(e) => setFormdata({...formdata, category:e.target.value})}
                id="category"
                
                
  
                className="py-2 px-3 border-[1px] border-solid border-[#c2c2c2] rounded-md"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="font-outfit text-[#c2c2c2] mb-2 inline-block"
                htmlFor="category"
              >
                Sub category
              </label>
              <select
                value="category"
                id="category"
                className="py-2 px-3 border-[1px] border-solid border-[#c2c2c2] rounded-md"
              >
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Winterwear">Winterwear</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                className="font-outfit text-[#c2c2c2] mb-2 inline-block"
                htmlFor="category"
              >
                Product Price
              </label>

              <input
                type="number"
                className="py-2 px-3 border-[1px] border-solid border-[#c2c2c2] rounded-md"
              />
            </div>
          </div>
          <label
            className="font-outfit text-[#c2c2c2] mb-2 inline-block"
            htmlFor="size"
          >
            Product Size
          </label>
          
        <div className="flex gap-3">
            <label className="relative inline-block w-[32px] h-[32px] cursor-pointer bg-gray-300">
            <input type="checkbox" value="S" className="peer sr-only" />
            <span className="flex items-center justify-center w-full h-full  rounded-sm peer-checked:bg-gray-500 peer-checked:text-white ">
              S
            </span>
          </label>

            <label className="relative inline-block w-[32px] h-[32px] cursor-pointer bg-gray-300">
            <input type="checkbox" value="M" className="peer sr-only" />
            <span className="flex items-center justify-center w-full h-full  rounded-sm peer-checked:bg-gray-500 peer-checked:text-white ">
              M
            </span>
          </label>

            <label className="relative inline-block w-[32px] h-[32px] cursor-pointer bg-gray-300">
            <input type="checkbox" value="L" className="peer sr-only" />
            <span className="flex items-center justify-center w-full h-full  rounded-sm peer-checked:bg-gray-500 peer-checked:text-white ">
              L
            </span>
          </label>

            <label className="relative inline-block w-[32px] h-[32px] cursor-pointer bg-gray-300">
            <input type="checkbox" value="XL" className="peer sr-only" />
            <span className="flex items-center justify-center w-full h-full  rounded-sm peer-checked:bg-gray-500 peer-checked:text-white ">
              XL
            </span>
          </label>

            <label className="relative inline-block px-2 h-[32px] cursor-pointer bg-gray-300">
            <input type="checkbox" value="XXL" className="peer sr-only" />
            <span className="flex items-center justify-center w-full h-full  rounded-sm peer-checked:bg-gray-500 peer-checked:text-white ">
              XXL
            </span>
          </label>
        </div>

          <div className="flex gap-2 items-center pb-4">
            <input
              type="checkbox"
              id="bestsellers"
              placeholder="Type here"
              className="bg-white border-[1px] border-solid  rounded-md border-[#c2c2c2]"
            />
            <label
              className="font-outfit text-[#c2c2c2]  inline-block"
              htmlFor="bestsellers"
            >
              Add to bestsellers
            </label>
          </div>
          <input
            type="submit"
            value="ADD"
            className="font-outfit text-white bg-black py-3 px-8 "
          />
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
