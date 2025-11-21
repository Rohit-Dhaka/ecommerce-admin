import React, { useState } from "react";
import MyButton from "../../common/MyButton";
import { Uploades } from "../../common/icon";
import { useMyContext } from "../../context/MyContext";
import MessageBar from "../../components/common/MessageBar";

const AddProduct = () => {
  const { addProduct } = useMyContext();
  const [previewImages, setPreviewImages] = useState([]);




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

  // ---------------------------
  // HANDLE SUBMIT
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
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
      alert("Please fill in all fields and select required options.");
      
      return;
    }

    // Prepare FormData
    const data = new FormData();
    formdata.images.forEach((file) => data.append("images", file));
    data.append("title", formdata.title);
    data.append("description", formdata.description);
    data.append("price", formdata.price);
    data.append("size", JSON.stringify(formdata.size));
    data.append("category", formdata.category);
    data.append("subcategory", formdata.subcategory);
    data.append("stock", formdata.stock);

    await addProduct(data);

    
    

    // Reset Form
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

    // Reset file input
    document.getElementById("productimg").value = "";
  };

  // ---------------------------
  // HANDLE SELECTION (SIZE, CATEGORY, SUBCATEGORY)
  // ---------------------------
 const handleSelection = (field, value) => {
  if (field === "size") {
    value = value.toUpperCase(); // ALWAYS uppercase

    setFormData((prev) => {
      const sizes = prev.size;

      return sizes.includes(value)
        ? { ...prev, size: sizes.filter((s) => s !== value) }
        : { ...prev, size: [...sizes, value] };
    });
  } else {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
};


  return (
    <section className="">
      

      <div className="container">
        <form onSubmit={handleSubmit} className="max-w-[500px] overflow-hidden">

          {/* Product Image Upload */}
          <div className="flex flex-col items-start">
            <label className="font-poppins text-[#4B5563] pb-2">
              Product Images
            </label>

            <label
              htmlFor="productimg"
              className="border-dotted border w-full py-4 flex justify-center rounded-md cursor-pointer"
            >
              <Uploades />
            </label>

          <input
  type="file"
  id="productimg"
  multiple
  accept="image/*"
  onChange={(e) => {
    const files = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      images: files,
    }));

    // PREVIEW IMAGES
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  }}
  className="hidden"
/>
{/* IMAGE PREVIEW SECTION */}
{previewImages.length > 0 && (
  <div className="mt-3 flex gap-3 flex-wrap">
    {previewImages.map((img, i) => (
      <div key={i} className="w-20 h-20 border rounded-md overflow-hidden">
        <img src={img} alt="preview" className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
)}

          </div>

          {/* TITLE */}
          <div className="pt-4">
            <label className="text-[#4B5563] font-outfit">Product Name</label>
            <input
              type="text"
              placeholder="Product name"
              value={formdata.title}
              onChange={(e) =>
                setFormData({ ...formdata, title: e.target.value })
              }
              className="mt-2 block w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="pt-4">
            <label className="font-poppins text-[#4B5563]">Description</label>
            <input
              type="text"
              placeholder="Enter description"
              value={formdata.description}
              onChange={(e) =>
                setFormData({ ...formdata, description: e.target.value })
              }
              className="mt-2 block w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* PRICE + STOCK */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <label className="font-poppins text-[#4B5563]">Price</label>
              <input
                type="number"
                placeholder="Price"
                value={formdata.price}
                onChange={(e) =>
                  setFormData({ ...formdata, price: e.target.value })
                }
                className="mt-2 block w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="font-poppins text-[#4B5563]">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={formdata.stock}
                onChange={(e) =>
                  setFormData({ ...formdata, stock: e.target.value })
                }
                className="mt-2 block w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div className="pt-4">
            <label className="font-poppins text-[#4B5563]">
              Select Category
            </label>
            <select
              value={formdata.category}
              onChange={(e) =>
                handleSelection("category", e.target.value)
              }
              className="mt-2 block w-full p-2 border rounded-lg"
              required
            >
              <option value="">-- Select Category --</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* SUBCATEGORY */}
          <div className="pt-4">
            <label className="font-poppins text-[#4B5563]">
              Select Subcategory
            </label>
            <select
              value={formdata.subcategory}
              onChange={(e) =>
                handleSelection("subcategory", e.target.value)
              }
              className="mt-2 block w-full p-2 border rounded-lg"
              required
            >
              <option value="">-- Select Subcategory --</option>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* SIZE SELECTION */}
          <div className="py-4">
            <p className="font-poppins text-[#4B5563] pb-2">Select Size:</p>
            <div className="flex gap-3 flex-wrap">
              {["s", "m", "l", "xl", "2xl"].map((size) => (
                <label key={size} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={size}
                    checked={formdata.size.includes(size)}
                    onChange={() => handleSelection("size", size.toUpperCase())}

                  />
                  {size.toUpperCase()}
                </label>
              ))}
            </div>
          </div>

          <MyButton type="submit" buttonnmae="ADD" />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
