import React, { useEffect } from "react";
import { useMyContext } from "../../context/MyContext";

const GetProducts = () => {
  const { getProducts, products } = useMyContext();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="py-8">
      <div className="">
        <h3 className="font-poppins text-xl font-semibold mb-4">
          All Products List
        </h3>

        {/* Responsive wrapper */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-800 text-sm sm:text-base">
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Category</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.length > 0 ? (
                products.map((pro, i) => (
                  <tr
                    key={i}
                    className="text-center border hover:bg-gray-100 transition"
                  >
                    <td className="py-2 px-4 border flex justify-center">
                      <div className="w-12 h-12 rounded overflow-hidden">
                        <img
                          src={pro.imagesUrl?.[0]}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    <td className="py-2 px-4 border text-gray-700 font-medium">
                      {pro.title}
                    </td>

                    <td className="py-2 px-4 border text-gray-600">
                      {pro.category}
                    </td>

                    <td className="py-2 px-4 border font-semibold text-gray-800">
                      ₹{pro.price}
                    </td>

                    <td className="py-2 px-4 border text-blue-600 cursor-pointer hover:underline">
                      Edit
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-4 text-gray-500 font-medium"
                  >
                    No Products Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default GetProducts;
