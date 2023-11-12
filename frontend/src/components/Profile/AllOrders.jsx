import React from 'react'

const AllOrders = () => {
    const orders = [
        {
            _id: "jhsagshwih8934353948dhfg",
            orderItems: [
                {
                    name: "iPhone 14 pro max"
                },
            ],
            totalPrice: 1200,
            orderStatus: "Processing",
        },
        {
            _id: "jhsagshwihwy478203948dhfg",
            orderItems: [
                {
                    name: "Samsung S22+ Ultra"
                },
            ],
            totalPrice: 1149,
            orderStatus: "Processing",
        },
    ];

  return (
    <div className='pl-8 pt-1'>
        AllOrders
    </div>
  )
}

export default AllOrders