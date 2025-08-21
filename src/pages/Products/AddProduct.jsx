import React, { useState, useContext } from "react";
import {  UseContext } from "../../context/AuthContext"; // ✅ import context correctly

const AddProduct = () => {
  const { addproduct } = UseContext(); // ✅ correct way

  const [formdata, setFormdata] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    size: [],
    category: [],
    subcategory: [],
    stock: "",
  });

  // ✅ handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", formdata.image);
    data.append("title", formdata.title);
    data.append("description", formdata.description);
    data.append("price", formdata.price);
    data.append("size", JSON.stringify(formdata.size));
    data.append("category", JSON.stringify(formdata.category));
    data.append("subcategory", JSON.stringify(formdata.subcategory));
    data.append("stock", formdata.stock);

    await addproduct(data); // send FormData

    // ✅ reset form
    setFormdata({
      image: "",
      title: "",
      description: "",
      price: "",
      size: [],
      category: [],
      subcategory: [],
      stock: "",
    });
  };

  // ✅ toggle checkboxes
  const toggleValue = (field, value) => {
    setFormdata((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <section className="flex justify-center items-center py-10 bg-gray-50 min-h-screen">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-6"
  >
    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-700 text-center">
      Add New Product
    </h2>

    {/* Image Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-600">
        Product Image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFormdata({ ...formdata, image: e.target.files[0] })
        }
        className="mt-2 block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Title */}
    <div>
      <label className="block text-sm font-medium text-gray-600">Title</label>
      <input
        type="text"
        placeholder="Enter product title"
        value={formdata.title}
        onChange={(e) => setFormdata({ ...formdata, title: e.target.value })}
        required
        className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Description */}
    <div>
      <label className="block text-sm font-medium text-gray-600">
        Description
      </label>
      <input
        type="text"
        placeholder="Enter description"
        value={formdata.description}
        onChange={(e) =>
          setFormdata({ ...formdata, description: e.target.value })
        }
        required
        className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
    </div>

    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-600">Price</label>
        <input
          type="number"
          placeholder="Price"
          value={formdata.price}
          onChange={(e) => setFormdata({ ...formdata, price: e.target.value })}
          required
          className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600">Stock</label>
        <input
          type="number"
          placeholder="Stock"
          value={formdata.stock}
          onChange={(e) => setFormdata({ ...formdata, stock: e.target.value })}
          required
          className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Sizes */}
    <div>
      <p className="text-sm font-medium text-gray-600 mb-2">Select Size:</p>
      <div className="flex gap-3 flex-wrap">
        {["s", "m", "l", "xl", "2xl"].map((size) => (
          <label
            key={size}
            className="flex items-center gap-1 text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={formdata.size.includes(size)}
              onChange={() => toggleValue("size", size)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            {size.toUpperCase()}
          </label>
        ))}
      </div>
    </div>

    {/* Categories */}
    <div>
      <p className="text-sm font-medium text-gray-600 mb-2">Select Category:</p>
      <div className="flex gap-3 flex-wrap">
        {["Men", "Women", "Kids"].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-1 text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={formdata.category.includes(cat)}
              onChange={() => toggleValue("category", cat)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            {cat}
          </label>
        ))}
      </div>
    </div>

    {/* Subcategories */}
    <div>
      <p className="text-sm font-medium text-gray-600 mb-2">
        Select Subcategory:
      </p>
      <div className="flex gap-3 flex-wrap">
        {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
          <label
            key={sub}
            className="flex items-center gap-1 text-gray-700 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={formdata.subcategory.includes(sub)}
              onChange={() => toggleValue("subcategory", sub)}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            {sub}
          </label>
        ))}
      </div>
    </div>

    {/* Submit */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Add Product
      </button>
    </div>
  </form>
</section>

  );
};

export default AddProduct;


