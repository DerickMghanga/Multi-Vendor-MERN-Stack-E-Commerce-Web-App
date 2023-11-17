import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react'
import { MdTrackChanges } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TrackOrder = () => {

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

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
              return params.getValue(params.id, "status") === "Delivered"
                ? "greenColor"
                : "redColor";
            },
          },
          {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
          },
      
          {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
          },
      
          {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
              return (
                <>
                  <Link to={`/user/track/order/${params.id}`}>
                    <Button>
                      <MdTrackChanges size={20} />
                    </Button>
                  </Link>
                </>
              );
            },
          },
    ];

    const row = [];
    orders && orders.forEach((item)=> {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "US$ " + item.totalPrice,
            status: item.orderStatus,
        })
    })

  return (
    <div className='pl-8 pt-1'>
        <DataGrid
        rows={row} 
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
        />
    </div>
  )
}

export default TrackOrder