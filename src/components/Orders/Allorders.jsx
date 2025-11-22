import React, { useEffect, useState } from "react";
import { useMyContext } from "../../context/MyContext";
import MessageBar from "../common/MessageBar";
import Loader from "../common/Loader";

const Allorders = () => {
  const { getAllOrders, orders, updateOrder } = useMyContext();
  const [statusMap, setStatusMap] = useState({});
    const [message, setMessage] = useState("");
    const [bar, setBar] = useState(false);
    const [loading, setLoading] = useState(true);


  const validStatus = [
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  
  useEffect(() => {
  const fetchOrders = async () => {
    setLoading(true);
    await getAllOrders();
    setLoading(false);
  };

  fetchOrders();
}, []);


  const handleStatusChange = (orderId, value) => {
    setStatusMap((prev) => ({
      ...prev,
      [orderId]: value,
    }));
  };
const handleUpdate = async (orderId) => {
  const selectedStatus =
    statusMap[orderId] || orders.find((o) => o._id === orderId)?.status;

  const res = await updateOrder(orderId, selectedStatus);

  if (res && res.message) {
    setMessage(res.message);
    setBar(true);

    setTimeout(() => {
      setMessage("");
      setBar(false);
    }, 2000);
  }
};


  return (
    <section className=" ">
        {loading && <Loader />}
        
        <MessageBar message={message} showBar={bar} />
     
         <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 ">All Orders</h2>

        {/* No Orders */}
        {(!orders || orders.length === 0) && (
          <p className="text-gray-500 text-lg">No orders found</p>
        )}

        
          <div className="space-y-8 overflow-y-scroll h-[80vh]  overflow-hidden ">
            <div className="pb-28 ">
              {orders?.map((order) => (
                <div
                  key={order._id}
                  className="border border-gray-300 rounded-xl sm:p-6 p-4 bg-gray-50 shadow-md hover:shadow-lg transition  mb-4  "
                >
                  {/* ORDER TOP */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b pb-4">
                    <div className="">
                      <h3 className="font-semibold text-lg text-gray-900">
                        Order ID:{" "}
                        <span className="text-blue-600 font-medium">
                          {order.orderId}
                        </span>
                      </h3>
                      <p className="text-gray-500 text-sm">
                        Payment ID: {order.paymentId}
                      </p>
                      <p className="text-gray-500 text-sm">
                        Date: {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-3 items-center">
                      {/* Status Dropdown */}
                      <select
                        className="border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        value={statusMap[order._id] || order.status}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                      >
                        {validStatus.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                      {/* Update Button */}
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 active:scale-95 transition"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                  {/* USER DETAILS */}
                  <div className="py-2">
                    <p className="text-gray-700 text-sm sm:text-base">
                      <b>User:</b> {order.userId?.name} ({order.userId?.email})
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base mt-1">
                      <b>Total Amount:</b>{" "}
                      <span className="text-green-700 font-semibold">
                        ₹{order.amount}
                      </span>
                    </p>
                  </div>
                  {/* ITEMS LIST */}
                  <div className="">
                    <h4 className="font-semibold text-lg pb-1">Items</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {order.items?.map((item, index) => (
                        <div
                          key={index}
                          className="flex gap-4 border rounded-md sm:p-4 p-2 bg-gray-50 hover:bg-gray-100 transition"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-md object-cover border"
                          />
                          <div>
                            <h5 className="text-gray-900 font-medium">
                              {item.name}
                            </h5>
                            <p className="text-gray-600 text-sm">
                              Price: ₹{item.price}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
      </div>
     
    </section>
  );
};

export default Allorders;
