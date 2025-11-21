import React, { useEffect } from "react";

import { useMyContext } from "../../context/MyContext";

const GetProducts = () => {
  
  const { getProducts, products } = useMyContext();

  useEffect(() => {
    getProducts();
  }, []);
  console.log("all products", products);
  return (
    <section>
      <div className="w-full">
        <h3 className=" font-poppins  pb-4">All Products List</h3>
        <table className="w-full">
          <tr className="bg-gray-200 w-full border-[1px] border-black ">
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {products.map((pro, i) => (
            <tr
              key={i}
              className="bg-gray-200 w-full border-[1px] border-black "
            >
              <td className=" py-2 flex items-center justify-center overflow-hidden">
                <div className=" w-[50px] h-[50px]">
                  <img
                    src={pro.imagesUrl[0]}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </td>
              <td className="text-center">{pro.title}</td>
              <td className="text-center">{pro.category}</td>
              <td className="text-center">{pro.price}</td>
              <td className="text-center">-</td>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};

export default GetProducts;
