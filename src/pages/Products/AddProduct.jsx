import React, { useState,  } from "react";

import MyButton from "../../common/MyButton";
import { Uploades } from "../../common/icon";
import { useMyContext } from "../../context/MyContext";


const AddProduct = () => {
  
  const { addproduct } = useMyContext()

  const [formdata, setFormData] = useState({
    
    images: [],
    title: "",
    description: "",
    price: "",
    size: [],
    category: "",
    subcategory: "",
    stock: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  
  if (
    !formdata.images.length ||
    !formdata.title ||
    !formdata.description ||
    !formdata.price ||
    !formdata.size.length ||
    !formdata.category ||
    !formdata.subcategory ||
    !formdata.stock
  ) {
    alert("Please fill in all fields and select size, category, and subcategory");
    return;
  }

  const data = new FormData();
  formdata.images.forEach((file) => {
    data.append("images", file);
  });
  data.append("title", formdata.title);
  data.append("description", formdata.description);
  data.append("price", formdata.price);
  data.append("size", JSON.stringify(formdata.size)); 
  data.append("category", formdata.category);
  data.append("subcategory", formdata.subcategory);
  data.append("stock", formdata.stock);

  await addproduct(data); 

  
  setFormData({
    images: [],
    title: "",
    description: "",
    price: "",
    size: [],
    category: "",
    subcategory: "",
    stock: "",
  });
};




  const handleSelection = (field, value) => {
  if (field === "size") {
    setFormData((prev) => {
      const sizes = prev.size || [];
      if (sizes.includes(value)) {        
        return { ...prev, size: sizes.filter((s) => s !== value) };
      } else {        
        return { ...prev, size: [...sizes, value] };
      }
    });
  } else {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
};


  return (
    <section className="">
<div className="container">
    <form
    onSubmit={handleSubmit}
    className="max-w-[500px] overflow-hidden"
  >
   

    
    <div className="flex flex-col items-start">
      <label className=" inline-block font-poppins text-[#4B5563] pb-4" >
        Product Image
      </label>
      <label htmlFor="productimg" className="border-[1px] border-dotted border-[#4B5563] inline-block  py-4 px-6 rounded-md"> 
        <Uploades/>
      </label>
      <input
  type="file"
  id="productimg"
  multiple
  accept="image/*"
  onChange={(e) =>
    setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }))
  }
  className="hidden"
/>

    </div>

    {/* Title */}
    <div className="pt-4">
      <label className="text-[#4B5563] font-outfit">Product name</label>
      <input
        type="text"
        placeholder="Product name"
        value={formdata.title}
        onChange={(e) => setFormData({ ...formdata, title: e.target.value })}
        required
        className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Description */}
    <div className="pt-4">
      <label className=" inline-block font-poppins text-[#4B5563]">
        Description
      </label>
      <input
        type="text"
        placeholder="Enter description"
        value={formdata.description}
        onChange={(e) =>
          setFormData({ ...formdata, description: e.target.value })
        }
        required
        className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    
    <div className="grid grid-cols-2 gap-4 pt-4">
      <div>
        <label className=" inline-block font-poppins text-[#4B5563]">Price</label>
        <input
          type="number"
          placeholder="Price"
          value={formdata.price}
          onChange={(e) => setFormData({ ...formdata, price: e.target.value })}
          required
          className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className=" inline-block font-poppins text-[#4B5563]">Stock</label>
        <input
          type="number"
          placeholder="Stock"
          value={formdata.stock}
          onChange={(e) => setFormData({ ...formdata, stock: e.target.value })}
          required
          className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Sizes */}



  {/* Category */}
<div className="pt-4">
  <label className=" inline-block font-poppins text-[#4B5563]">
    Select Category:
  </label>
  <select
    value={formdata.category}
    onChange={(e) => handleSelection("category", e.target.value)}
    className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">-- Select Category --</option>
    <option value="Men">Men</option>
    <option value="Women">Women</option>
    <option value="Kids">Kids</option>
  </select>
</div>

{/* Subcategory */}
<div className="pt-4">
  <label className=" inline-block font-poppins text-[#4B5563]">
    Select Subcategory:
  </label>
  <select
    value={formdata.subcategory}
    onChange={(e) => handleSelection("subcategory", e.target.value)}
    className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">-- Select Subcategory --</option>
    <option value="Topwear">Topwear</option>
    <option value="Bottomwear">Bottomwear</option>
    <option value="Winterwear">Winterwear</option>
  </select>
</div>



<div className="py-4">
  <p className=" inline-block font-poppins text-[#4B5563] pb-4">Select Size:</p>
  <div className="flex gap-3 flex-wrap">
    {["s", "m", "l", "xl", "2xl"].map((size) => (
      <label
        key={size}
        className="flex items-center gap-1 text-gray-700 cursor-pointer"
      >
        <input
          type="checkbox"
          name="size"
          value={size}
          checked={formdata.size?.includes(size)}
          onChange={() => handleSelection("size", size)}
          className="text-blue-600 focus:ring-blue-500"
        />
        {size.toUpperCase()}
      </label>
    ))}
  </div>
</div>             
    <MyButton type="submit" buttonnmae="ADD"/>
  </form>
</div>
</section>

  );
};

export default AddProduct;